import { Module } from '@nestjs/common';
import { VendorsController } from './vendors.controller';
import { ServiceService } from './service/service.service';
import { VendorsServiceService } from './vendors.service.service';

@Module({
  controllers: [VendorsController],
  providers: [ServiceService, VendorsServiceService]
})
export class VendorsModule {}
