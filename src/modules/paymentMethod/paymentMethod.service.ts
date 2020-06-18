import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentMethodRepository } from './paymentMethod.repository';
import { CarrierService } from '../carrier/carrier.service';

@Injectable()
export class PaymentMethodService {
    constructor(
        @InjectRepository(PaymentMethodRepository)
        private readonly paymentMethodRepository: PaymentMethodRepository,
    ) {}

    async getPaymentMethods() {
        const data = await this.paymentMethodRepository.find();
        return { data };
    }

    getPaymentMethod(pmID: number) {
        return this.paymentMethodRepository.findOne(pmID);
    }

    async getPaymentMethodsByUser(userID: number) {
        const data = await this.paymentMethodRepository.getPaymentMethodsByUser(
            userID,
        );
        return { data };
    }
}
