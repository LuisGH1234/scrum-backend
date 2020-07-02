import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common';
import { JobService } from './job.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Job } from 'src/entities';

@Controller('jobs')
export class JobController {
    constructor(private readonly jobService: JobService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    getJobs() {
        return this.jobService.getJobs();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getJob(@Param('id') jobID: number) {
        return this.jobService.getJob(jobID);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createJob(@Body() job: Job) {
        return this.jobService.createJob(job);
    }
}
