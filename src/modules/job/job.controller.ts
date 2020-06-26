import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common';
import { JobService } from './job.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Job } from 'src/entities';

@Controller('job')
export class JobController {
    constructor(private readonly jobService: JobService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    getJobs() {
        return this.jobService.getJobs();
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getJob(@Param('id') jobID: number) {
        return this.jobService.getJob(jobID);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createJob(@Body() job: Job) {
        const jobCreated = this.jobService.createJob(job);
        return {
            jobCreated,
        };
    }
}