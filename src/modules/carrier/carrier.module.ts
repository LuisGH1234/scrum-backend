import { Module } from '@nestjs/common';
import { CarrierController } from './carrier.controller';
import { CarrierService } from './carrier.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarrierRepository } from './carrier.repository';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        TypeOrmModule.forFeature([CarrierRepository]),
        PassportModule.register({ defaultStrategy: 'jwt' }),
    ],
    controllers: [CarrierController],
    providers: [CarrierService],
    exports: [CarrierService],
})
export class CarrierModule {}
