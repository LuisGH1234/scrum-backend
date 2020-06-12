import {
    Entity,
    Column,
    OneToMany,
    OneToOne,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import { BaseDomain } from './core/base.domain';
import { Company } from './company.entity';
import { CarrierJob } from './carrier_job.entity';

@Entity()
export class Carrier extends BaseDomain {
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    phone: string;

    @ManyToOne(
        type => Company,
        company => company.carriers,
    )
    company: Company;

    @OneToMany(
        type => CarrierJob,
        cj => cj.carrier,
    )
    carrierJobs: CarrierJob[];
}
