import { Controller, Get, UseGuards, Param } from '@nestjs/common';
import { CarrierService } from './carrier.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('carriers')
export class CarrierController {
    constructor(private readonly carrierService: CarrierService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    getCarriers() {
        return this.carrierService.getCarriers();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getCarrier(@Param('id') carrierID: number) {
        return this.carrierService.getCarrier(carrierID);
    }
}
