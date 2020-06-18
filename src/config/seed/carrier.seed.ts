import { Repository, Connection } from 'typeorm';
import { Carrier } from 'src/entities/carrier.entity';
import { Company } from 'src/entities/company.entity';

export async function seedCarriers(connection: Connection) {
    console.log('+ Seeding Carriers');

    await connection.transaction(async manager => {
        const repository = manager.getRepository(Carrier);
        const companies = await repository.find();
        if (companies.length > 0) {
            console.log(
                '* Carriers seed will not be executed because table is not empty.',
            );
            return;
        }

        await seedCarrier(repository, 'Transportista', '1', '999666333', 3, {
            id: 1,
        });
        await seedCarrier(repository, 'Transportista', '2', '999666333', 3, {
            id: 1,
        });
        await seedCarrier(repository, 'Transportista', '3', '999666333', 3, {
            id: 1,
        });

        await seedCarrier(repository, 'Transportista', '4', '999666333', 3, {
            id: 2,
        });
        await seedCarrier(repository, 'Transportista', '5', '999666333', 3, {
            id: 2,
        });
        await seedCarrier(repository, 'Transportista', '6', '999666333', 3, {
            id: 2,
        });

        await seedCarrier(repository, 'Transportista', '7', '999666333', 3, {
            id: 3,
        });
        await seedCarrier(repository, 'Transportista', '8', '999666333', 3, {
            id: 3,
        });
        await seedCarrier(repository, 'Transportista', '9', '999666333', 3, {
            id: 3,
        });
    });

    console.log('- Carriers done');
}

async function seedCarrier(
    repository: Repository<Carrier>,
    firstName: string,
    lastName: string,
    phone: string,
    rate: number,
    company: Partial<Company>,
) {
    const newItem = new Carrier();
    newItem.firstName = firstName;
    newItem.lastName = lastName;
    newItem.phone = phone;
    newItem.rate = rate;
    newItem.company = company as Company;

    await repository.insert(newItem);
}
