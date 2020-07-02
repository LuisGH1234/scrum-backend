import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Config } from './config';

export class Database {
    static get MySqlOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: Config.dbHost,
            port: Config.dbPort,
            username: Config.dbUsername,
            password: Config.dbPassword,
            database: Config.dbName,
            bigNumberStrings: false,
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
