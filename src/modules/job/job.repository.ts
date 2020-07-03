import { EntityRepository, Repository } from 'typeorm';
import { Job } from 'src/entities';

@EntityRepository(Job)
export class JobRepository extends Repository<Job> {
    getJobsByUser(userID: number) {
        return this.createQueryBuilder('j')
            .leftJoin('j.user', 'user')
            .leftJoinAndSelect('j.payment', 'payment')
            .leftJoinAndSelect('j.company', 'company')
            .where('user.id = :userID', { userID })
            .andWhere('j.active = true')
            .getMany();
    }
}
