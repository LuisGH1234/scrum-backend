import { Entity, ManyToOne } from 'typeorm';
import { BaseDomain } from './core/base.domain';
import { Job } from './job.entity';
import { Carrier } from './carrier.entity';

@Entity()
export class CarrierJob extends BaseDomain {
    @ManyToOne(
        type => Job,
        job => job.carrierJobs,
    )
    job: Job;

    @ManyToOne(
        type => Carrier,
        carrier => carrier.carrierJobs,
    )
    carrier: Carrier;
}
