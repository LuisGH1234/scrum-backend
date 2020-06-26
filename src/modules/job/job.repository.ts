import { EntityRepository, Repository } from 'typeorm';
import { Job } from 'src/entities';

@EntityRepository(Job)
export class JobRepository extends Repository<Job> {
    getJobsByUser(userID: number) {
        return this.createQueryBuilder('j')
            .leftJoin('j.user', 'user')
            .where('user.id = :userID', { userID })
            .getMany();
    }
}