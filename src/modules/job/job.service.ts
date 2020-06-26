import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobRepository } from './job.repository';
import { Job, CarrierJob } from 'src/entities';
import { CarrierService } from '../carrier/carrier.service';

@Injectable()
export class JobService {
    constructor(
        private readonly carrierService: CarrierService,
        @InjectRepository(JobRepository)
        private readonly jobRepository: JobRepository,
    ) {}

    async getJobs() {
        const data = await this.jobRepository.find();
        return { data };
    }

    getJob(jobID: number) {
        return this.jobRepository.findOne(jobID);
    }

    async getJobsByUser(userID: number) {
        const data = await this.jobRepository.getJobsByUser(userID);
        return { data };
    }

    async createJob(job: Job) {
        if (!job.company || !job.company.id || job.company.id == 0) {
            throw new BadRequestException('Es necesario indicar la compañia');
        } else if (!job.payment || !job.payment.id || job.payment.id == 0) {
            throw new BadRequestException(
                'Es necesario indicar el metodo de pago',
            );
        } else if (!job.user || !job.user.id || job.user.id == 0) {
            throw new BadRequestException('Es necesario indicar el usuario');
        }

        try {
            const {
                data: carriers,
            } = await this.carrierService.getCarriersByCompany(job.company.id);
            const randomIndex = Math.floor(Math.random() * carriers.length);
            job.carrierJobs = [
                { carrier: { id: carriers[randomIndex].id } },
            ] as CarrierJob[];
            const newJob = await this.jobRepository.save(job);
            return newJob;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }
}
