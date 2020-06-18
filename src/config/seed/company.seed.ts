import { Repository, Connection } from 'typeorm';
import { Company } from 'src/entities/company.entity';

export async function seedCompanies(connection: Connection) {
    console.log('+ Seeding Companies');

    await connection.transaction(async manager => {
        const repository = manager.getRepository(Company);
        const companies = await repository.find();
        if (companies.length > 0) {
            console.log(
                '* Company seed will not be executed because table is not empty.',
            );
            return;
        }

        await seedCompany(
            repository,
            1,
            'Compañia 1',
            20,
            '12345678955',
            'company1@ui.io',
            4,
        );
        await seedCompany(
            repository,
            2,
            'Compañia 2',
            19,
            '12345678956',
            'company2@ui.io',
            3,
        );
        await seedCompany(
            repository,
            3,
            'Compañia 3',
            21,
            '12345678957',
            'company3@ui.io',
            4,
        );
    });

    console.log('- Companies done');
}

async function seedCompany(
    repository: Repository<Company>,
    id: number,
    businessName: string,
    fare: number,
    ruc: string,
    email: string,
    rate: number,
) {
    const item = await repository.findOne(id);
    if (item) return;

    const newItem = new Company();
    newItem.id = id;
    newItem.businessName = businessName;
    newItem.fare = fare;
    newItem.email = email;
    newItem.ruc = ruc;
    newItem.rate = rate;

    await repository.insert(newItem);
}
