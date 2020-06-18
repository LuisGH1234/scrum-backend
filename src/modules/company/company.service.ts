import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyRepository } from './company.repository';
import { CarrierService } from '../carrier/carrier.service';

@Injectable()
export class CompanyService {
    constructor(
        private readonly carrierService: CarrierService,
        @InjectRepository(CompanyRepository)
        private readonly companyRepository: CompanyRepository,
    ) {}

    async getCompanies() {
        const data = await this.companyRepository.find();
        return { data };
    }

    getCompany(companyID: number) {
        return this.companyRepository.findOne(companyID);
    }

    getCarriersByCompany(companyID: number) {
        return this.carrierService.getCarriersByCompany(companyID);
    }
}
