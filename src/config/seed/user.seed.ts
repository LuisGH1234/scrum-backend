import { Repository, Connection } from 'typeorm';
import { User, PaymentMethodClient, PaymentMethod } from 'src/entities';
import { BcryptHelper } from 'src/common/helpers';

export async function seedUsers(connection: Connection) {
    console.log('+ Seeding Users');

    await connection.transaction(async manager => {
        const repository = manager.getRepository(User);
        const users = await repository.find();

        if (users.length > 0) {
            console.log(
                '* Users seed will not be executed because table is not empty.',
            );
            return;
        }

        await seedUser(
            repository,
            'paul.rivas@ui.iu',
            '123456',
            'Paul Rivas',
            'Alvarez Mazgo',
            '369852147',
            [{ paymentMethod: { id: 1 } as PaymentMethod }],
        );
    });

    console.log('- Users done');
}

async function seedUser(
    repository: Repository<User>,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string,
    paymentMethodClients: Partial<PaymentMethodClient>[],
) {
    const newItem = new User();
    newItem.email = email;
    newItem.password = await BcryptHelper.hash(password);
    newItem.firstName = firstName;
    newItem.lastName = lastName;
    newItem.phone = phone;
    newItem.paymentMethodClients = paymentMethodClients as PaymentMethodClient[];
    await repository.save(newItem);
}
