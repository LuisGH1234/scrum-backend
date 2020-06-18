import { Entity, Column, OneToMany } from 'typeorm';
import { BaseDomain } from './core/base.domain';
import { PaymentMethodClient } from './payment_method_client.entity';
import { Job } from './job.entity';

@Entity()
export class User extends BaseDomain {
    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    phone: string;

    @OneToMany(
        type => PaymentMethodClient,
        pmc => pmc.user,
        { cascade: ['insert'] },
    )
    paymentMethodClients: PaymentMethodClient[];

    @OneToMany(
        type => Job,
        job => job.company,
    )
    jobs: Job[];

    //   @BeforeInsert()
    //   beforeInsert() {
    //     this.password = BcryptHelper.hashSync(this.password);
    //     console.log(this.password);
    //   }
}
