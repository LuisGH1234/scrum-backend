import { Entity, Column, ManyToOne, OneToOne } from 'typeorm';
import { BaseDomain } from './core/base.domain';
import { PaymentMethodClient } from './payment_method_client.entity';
import { Job } from './job.entity';

@Entity()
export class Payment extends BaseDomain {
    @Column({ nullable: true })
    quantity: number;

    @Column({ type: 'float', nullable: true })
    currency: number;

    @ManyToOne(
        type => PaymentMethodClient,
        pmc => pmc.payments,
    )
    paymentMethodClient: PaymentMethodClient;

    @OneToOne(
        type => Job,
        job => job.payment,
    )
    job: Job;
}
