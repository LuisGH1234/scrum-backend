import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobRepository } from './job.repository';
import { Job, CarrierJob } from 'src/entities';
import { CarrierService } from '../carrier/carrier.service';
import { Payment } from 'src/entities/payment.entity';

@Injectable()
export class JobService {
    constructor(
        private readonly carrierService: CarrierService,
        @InjectRepository(JobRepository)
        private readonly jobRepository: JobRepository,
    ) {}

    async getJobs() {
        const data = await this.jobRepository.find({ where: { active: true } });
        return { data };
    }

    getJob(jobID: number) {
        return this.jobRepository.findOne(jobID, { where: { active: true } });
    }

    async getJobsByUser(userID: number) {
        const data = await this.jobRepository.getJobsByUser(userID);
        return { data };
    }

    async createJob(job: Job) {
        if (!job.company || !job.company.id || job.company.id == 0) {
            throw new BadRequestException('Es necesario indicar la compañia');
        } else if (
            !job.paymentMethodClient ||
            !job.paymentMethodClient.id ||
            job.paymentMethodClient.id == 0
        ) {
            throw new BadRequestException(
                'Es necesario indicar el metodo de pago',
            );
        } else if (!job.user || !job.user.id || job.user.id == 0) {
            throw new BadRequestException('Es necesario indicar el usuario');
        }

        const {
            data: carriers,
        } = await this.carrierService.getCarriersByCompany(job.company.id);
        const randomIndex = Math.floor(Math.random() * carriers.length);
        job.carrierJobs = [
            { carrier: { id: carriers[randomIndex].id } },
        ] as CarrierJob[];
        job.payment = {
            paymentMethodClient: job.paymentMethodClient,
        } as Payment;
        const newJob = await this.jobRepository.save(job);
        return newJob;
    }
}
