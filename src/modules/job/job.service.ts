import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobRepository } from './job.repository';
import { Job } from 'src/entities';

@Injectable()
export class JobService {
    constructor(
        @InjectRepository(JobRepository)
        private readonly jobRepository: JobRepository,
    ) {}

    async getJobs() {
        const data = await this.jobRepository.find();
        return { data };
    }

    getJob(jobID: number) {
        return this.jobRepository.findOne(jobID);
    }

    async getJobsByUser(userID: number) {
        const data = await this.jobRepository.getJobsByUser(
            userID,
        );
        return { data };
    }

    async createJob(job: Job) {
        try {
            const {
                updatedAt,
                ...rest
            } = await this.jobRepository.save(job);
            return rest as Job;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }
}