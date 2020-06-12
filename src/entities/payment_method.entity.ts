import { Entity, Column, OneToMany } from 'typeorm';
import { BaseDomain } from './core/base.domain';
import { PaymentMethodClient } from './payment_method_client.entity';

@Entity()
export class PaymentMethod extends BaseDomain {
    @Column()
    description: string;

    @OneToMany(
        type => PaymentMethodClient,
        pmc => pmc.paymentMethod,
    )
    paymentMethodClients: PaymentMethodClient[];
}
