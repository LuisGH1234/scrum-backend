import { Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class TimeDomain {
    @CreateDateColumn({ select: false })
    createdAt: Date;

    @UpdateDateColumn({ select: false })
    updatedAt: Date;
}
