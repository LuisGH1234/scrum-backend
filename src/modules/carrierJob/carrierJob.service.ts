import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarrierJobRepository } from './carrierJob.repository';
import { CarrierJob } from 'src/entities';

@Injectable()
export class CarrierJobService {
    constructor(
        @InjectRepository(CarrierJobRepository)
        private readonly carrierJobRepository: CarrierJobRepository,
    ) {}

    async getCarrierJobs() {
        const data = await this.carrierJobRepository.find();
        return { data };
    }

    getCarrierJob(carrierJobID: number) {
        return this.carrierJobRepository.findOne(carrierJobID);
    }
}