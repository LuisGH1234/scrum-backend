"use strict";
exports.__esModule = true;
// import { Config } from './config';
var Database = /** @class */ (function () {
    function Database() {
    }
    Object.defineProperty(Database, "MySqlOptions", {
        get: function () {
            return {
                type: 'mysql',
                host: 'us-cdbr-east-05.cleardb.net',
                port: 3306,
                username: 'b1086d5f652fd4',
                password: 'c1555724',
                database: 'heroku_266e466168986a0',
                // extra: {
                //     socketPath: Config.dbSocketPath,
                // },
                entities: ['dist/entities/*.entity{.ts,.js}'],
                synchronize: true,
                charset: 'utf8mb4',
                logging: false
            };
        },
        enumerable: true,
        configurable: true
    });
    return Database;
}());
exports.Database = Database;
