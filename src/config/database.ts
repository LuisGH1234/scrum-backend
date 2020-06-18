import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { Config } from './config';

export class Database {
    static get MySqlOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost', // Config.dbHost,
            port: 3306, // Config.dbPort,
            username: 'root', // Config.dbUsername,
            password: 'root', // Config.dbPassword,
            database: 'ubermove', // Config.dbName,
            // extra: {
            //     socketPath: Config.dbSocketPath,
            // },
            entities: ['dist/entities/*.entity{.ts,.js}'],
            synchronize: true,
            charset: 'utf8mb4',
            logging: false,
        };
    }
}
