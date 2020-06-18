import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyRepository } from './company.repository';
import { PassportModule } from '@nestjs/passport';
import { CarrierModule } from '../carrier/carrier.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([CompanyRepository]),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        CarrierModule,
    ],
    controllers: [CompanyController],
    providers: [CompanyService],
    // exports: [CarrierService],
})
export class CompanyModule {}
