import { Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseDomain } from './core/base.domain';
import { PaymentMethod } from './payment_method.entity';
import { User } from './user.entity';
import { Payment } from './payment.entity';

@Entity()
export class PaymentMethodClient extends BaseDomain {
    @ManyToOne(
        type => PaymentMethod,
        pm => pm.paymentMethodClients,
    )
    paymentMethod: PaymentMethod;

    @ManyToOne(
        type => User,
        user => user.paymentMethodClients,
    )
    user: User;

    @OneToMany(
        type => Payment,
        payment => payment.paymentMethodClient,
    )
    payments: Payment[];
}
