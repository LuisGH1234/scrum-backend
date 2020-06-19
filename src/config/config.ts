// process.env['NODE_ENV']
console.log(process.env['DB_HOST'] );
export const Config = {
    enviroment: process.env['NODE_ENV'] || 'development',
    dbHost: process.env['DB_HOST'] || 'localhost',
    dbUsername: process.env['DB_USERNAME'] || 'root',
    dbPassword: process.env['DB_PASSWORD'] || 'root',
    dbPort: Number(process.env['DB_PORT'] || 3306),
    dbName: process.env['DB_NAME'] || 'ubermove',
    port: Number(process.env['PORT'] || 3000),
    jwtSecretKey: process.env['JWT_SECRET_KEY'] || 'sercret-jwt-key',
    jwtExpiration: process.env['JWT_EXPIRATION'] || '7d',
};
