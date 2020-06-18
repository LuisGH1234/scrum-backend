import { Repository, Connection } from 'typeorm';
import { PaymentMethod } from 'src/entities';

export async function seedPaymentMethods(connection: Connection) {
    console.log('+ Seeding PaymentMethods');

    await connection.transaction(async manager => {
        const repository = manager.getRepository(PaymentMethod);
        const companies = await repository.find();
        if (companies.length > 0) {
            console.log(
                '* PaymentMethods seed will not be executed because table is not empty.',
            );
            return;
        }

        await seedPaymentMethod(repository, 1, 'Efectivo');
        await seedPaymentMethod(repository, 2, 'Paypal');
    });

    console.log('- PaymentMethods done');
}

async function seedPaymentMethod(
    repository: Repository<PaymentMethod>,
    id: number,
    description: string,
) {
    const newItem = new PaymentMethod();
    newItem.id = id;
    newItem.description = description;

    await repository.insert(newItem);
}
