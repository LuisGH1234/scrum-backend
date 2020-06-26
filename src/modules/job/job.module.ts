import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { JobController } from './job.controller';
import { JobRepository } from './job.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { CarrierModule } from '../carrier/carrier.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([JobRepository]),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        CarrierModule,
    ],
    controllers: [JobController],
    providers: [JobService],
    exports: [JobService],
})
export class JobModule {}
