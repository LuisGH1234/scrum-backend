import { Database } from '../database';
import { createConnection, ConnectionOptions } from 'typeorm';
import { seedCompanies } from './company.seed';
import { seedCarriers } from './carrier.seed';

createConnection(Database.MySqlOptions as ConnectionOptions)
    .then(async connection => {
        console.log('+ Database seeding started.');

        await seedCompanies(connection);
        await seedCarriers(connection);

        console.log('- Database seeding done.');
        process.exit(0);
    })
    .catch(error => {
        console.log('Database seeding failed.', error);
        process.exit(0);
    });
