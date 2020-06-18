import { Controller, Get, UseGuards, Param } from '@nestjs/common';
import { CompanyService } from './company.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('companies')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    getCompanies() {
        return this.companyService.getCompanies();
    }

    // companies/3/carriers
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getCompany(@Param('id') companyID: number) {
        return this.companyService.getCompany(companyID);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id/carriers')
    getCarriersByCompany(@Param('id') companyID: number) {
        return this.companyService.getCarriersByCompany(companyID);
    }
}
