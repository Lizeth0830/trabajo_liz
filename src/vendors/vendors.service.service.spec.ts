import { Test, TestingModule } from '@nestjs/testing';
import { VendorsServiceService } from './vendors.service.service';

describe('VendorsServiceService', () => {
  let service: VendorsServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendorsServiceService],
    }).compile();

    service = module.get<VendorsServiceService>(VendorsServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
