import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common';
import { CarrierJobService } from './carrierJob.service';
import { JwtAuthGuard} from '../auth/jwt-auth.guard';
import { CarrierJob } from 'src/entities';

@Controller('carrierJob')
export class CarrierJobController {
    constructor(private readonly carrierJobService: CarrierJobService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    getCarrierJobs() {
        return this.carrierJobService.getCarrierJobs();
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getCarrierJob(@Param('id') carrierJobID: number) {
        return this.carrierJobService.getCarrierJob(carrierJobID);
    }
}
