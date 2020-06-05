import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { BaseDomain } from './core/base.domain';
import { BcryptHelper } from 'src/common/helpers';

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

  //   @BeforeInsert()
  //   beforeInsert() {
  //     this.password = BcryptHelper.hashSync(this.password);
  //     console.log(this.password);
  //   }
}
