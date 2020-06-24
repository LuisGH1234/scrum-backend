import { Controller, Get, UseGuards, Param } from '@nestjs/common';
import { PaymentMethodService } from './paymentMethod.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('companies')
export class PaymentMethodController {
    constructor(private readonly paymentMethodService: PaymentMethodService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    getPaymentMethods() {
        return this.paymentMethodService.getPaymentMethods();
    }

    // companies/3/carriers
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getPaymentMethod(@Param('id') pmID: number) {
        return this.paymentMethodService.getPaymentMethod(pmID);
    }
}
