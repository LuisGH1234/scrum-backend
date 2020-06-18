import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './modules/user/user.module';
import { Database } from './config/database';
import { AuthModule } from './modules/auth/auth.module';
import { CarrierModule } from './modules/carrier/carrier.module';
import { CompanyModule } from './modules/company/company.module';
import { PaymentMethodModule } from './modules/paymentMethod/paymentMethod.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(Database.MySqlOptions),
        AuthModule,
        PaymentMethodModule,
        UserModule,
        CarrierModule,
        CompanyModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
