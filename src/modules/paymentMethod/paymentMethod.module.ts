import { Module } from '@nestjs/common';
import { PaymentMethodController } from './paymentMethod.controller';
import { PaymentMethodService } from './paymentMethod.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethodRepository } from './paymentMethod.repository';
import { PassportModule } from '@nestjs/passport';
import { CarrierModule } from '../carrier/carrier.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([PaymentMethodRepository]),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        CarrierModule,
    ],
    controllers: [PaymentMethodController],
    providers: [PaymentMethodService],
    exports: [PaymentMethodService],
})
export class PaymentMethodModule {}
