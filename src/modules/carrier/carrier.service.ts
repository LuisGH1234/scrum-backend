import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarrierRepository } from './carrier.repository';

@Injectable()
export class CarrierService {
    constructor(
        @InjectRepository(CarrierRepository)
        private readonly carrierRepository: CarrierRepository,
    ) {}

    async getCarriers() {
        const data = await this.carrierRepository.find();
        return { data };
    }

    getCarrier(carrierID: number) {
        return this.carrierRepository.findOne(carrierID);
    }

    async getCarriersByCompany(companyID: number) {
        const data = await this.carrierRepository.find({
            where: { company: { id: companyID } },
        });
        return { data };
    }
}
