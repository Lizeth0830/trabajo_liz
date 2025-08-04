import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';

@Module({
  
  controllers: [BrandsController],
})
export class BrandsModule {}
