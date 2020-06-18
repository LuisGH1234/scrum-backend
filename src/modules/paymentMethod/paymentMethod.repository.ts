import { EntityRepository, Repository } from 'typeorm';
import { PaymentMethod } from 'src/entities';

@EntityRepository(PaymentMethod)
export class PaymentMethodRepository extends Repository<PaymentMethod> {
    getPaymentMethodsByUser(userID: number) {
        return this.createQueryBuilder('pm')
            .leftJoin('pm.paymentMethodClients', 'pmc')
            .leftJoin('pmc.user', 'user')
            .where('user.id = :userID', { userID })
            .getMany();
    }
}
