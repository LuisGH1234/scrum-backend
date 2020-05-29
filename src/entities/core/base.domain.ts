import { TimeDomain } from './time.domain';
import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class BaseDomain extends TimeDomain {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  active: boolean;
}
