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

@Entity()
export class Job extends BaseDomain {
    @Column({ type: 'float' })
    weight: number;

    @Column({ type: 'datetime' })
    date: String;

    @Column()
    originAddress: string;

    @Column()
    destinyAddress: string;

    @Column({ type: 'decimal' })
    originLatitude: number;

    @Column({ type: 'decimal' })
    originLongitude: number;

    @Column({ type: 'decimal' })
    destinyLatitude: number;

    @Column({ type: 'decimal' })
    destinyLongitude: number;

    @Column({ type: 'int' })
    status: number;

    @OneToOne(
        type => Payment,
        payment => payment.job,
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
    )
    carrierJobs: CarrierJob[];
}
