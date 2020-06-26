import { Module } from '@nestjs/common';
import { CarrierJobService } from './carrierJob.service';
import { CarrierJobController } from './carrierJob.controller';
import { CarrierJobRepository } from './carrierJob.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        TypeOrmModule.forFeature([CarrierJobRepository]),
        PassportModule.register({ defaultStrategy: 'jwt' }),
    ],
    controllers: [CarrierJobController],
    providers: [CarrierJobService],
    exports: [CarrierJobService]
})
export class CarrierJobModule {}