import {
    Entity,
    Column,
    OneToOne,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { BaseDomain } from './core/base.domain';
import { Payment } from './payment.entity';
import { Company } from './company.entity';
import { User } from './user.entity';
import { CarrierJob } from './carrier_job.entity';
import { PaymentMethodClient } from './payment_method_client.entity';

@Entity()
export class Job extends BaseDomain {
    @Column({ type: 'float' })
    weight: number;

    @Column({ type: 'datetime' })
    date: String; // fecha de entrega

    @Column()
    originAddress: string;

    @Column()
    destinyAddress: string;

    @Column({ type: 'decimal', precision: 10, scale: 8 })
    originLatitude: number;

    @Column({ type: 'decimal', precision: 11, scale: 8 })
    originLongitude: number;

    @Column({ type: 'decimal', precision: 10, scale: 8 })
    destinyLatitude: number;

    @Column({ type: 'decimal', precision: 11, scale: 8 })
    destinyLongitude: number;

    @Column({ type: 'int' })
    status: number; // 0 creado - 1 - aceptado - 2 - terminado

    @OneToOne(
        type => Payment,
        payment => payment.job,
        { cascade: ['insert'] },
    )
    @JoinColumn()
    payment: Payment;

    @ManyToOne(
        type => Company,
        company => company.jobs,
    )
    company: Company;

    @ManyToOne(
        type => User,
        user => user.jobs,
    )
    user: User;

    @OneToMany(
        type => CarrierJob,
        cj => cj.job,
        { cascade: ['insert'] },
    )
    carrierJobs: CarrierJob[];

    paymentMethodClient: PaymentMethodClient;
}
