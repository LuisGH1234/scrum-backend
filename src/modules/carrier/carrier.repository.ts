import { EntityRepository, Repository } from 'typeorm';
import { Carrier } from 'src/entities/carrier.entity';

@EntityRepository(Carrier)
export class CarrierRepository extends Repository<Carrier> {}
