import { Entity, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { BaseDomain } from './core/base.domain';
import { Job } from './job.entity';
import { Carrier } from './carrier.entity';

@Entity()
export class Company extends BaseDomain {
    @Column()
    businessName: string;

    @Column()
    ruc: string;

    @Column()
    fare: number;

    @Column()
    email: string;

    @Column()
    rate: number; // estrellas

    @OneToMany(
        type => Job,
        job => job.company,
    )
    jobs: Job[];

    @OneToMany(
        type => Carrier,
        carrier => carrier.company,
    )
    carriers: Carrier[];
}
