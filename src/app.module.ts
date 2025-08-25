import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { VendorsModule } from './vendors/vendors.module';
import { BrandsModule } from './brands/brands.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CustomersModule, VendorsModule, BrandsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
