import { EntityRepository, Repository } from 'typeorm';
import { CarrierJob } from 'src/entities';

@EntityRepository(CarrierJob)
export class CarrierJobRepository extends Repository<CarrierJob> {
    
}