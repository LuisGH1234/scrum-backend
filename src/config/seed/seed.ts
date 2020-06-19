require('dotenv').config();
import { Database } from '../database';
import { createConnection, ConnectionOptions } from 'typeorm';
import { seedCompanies } from './company.seed';
import { seedCarriers } from './carrier.seed';
import { seedPaymentMethods } from './paymentMethod.seed';
import { seedUsers } from './user.seed';
import { User } from 'src/entities';

createConnection(Database.MySqlOptions as ConnectionOptions)
    .then(async connection => {
        console.log('+ Database seeding started.');

        await seedCompanies(connection);
        await seedCarriers(connection);
        await seedPaymentMethods(connection);
        await seedUsers(connection);

        console.log('- Database seeding done.');
        process.exit(0);
    })
    .catch(error => {
        console.log('Database seeding failed.', error);
        process.exit(0);
    });
