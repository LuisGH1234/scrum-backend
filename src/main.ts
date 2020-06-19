// import * as dotenv from 'dotenv';
require('dotenv').config();
import * as morgan from 'morgan';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Config } from './config/config';

async function bootstrap() {
    // dotenv.config();

    const app = await NestFactory.create(AppModule);
    if (Config.enviroment !== 'production') app.use(morgan('dev'));
    //   app.enableCors();
    app.setGlobalPrefix('api/v1');
    await app.listen(Config.port);
}
bootstrap();
