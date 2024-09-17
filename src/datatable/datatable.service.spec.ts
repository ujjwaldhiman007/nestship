import { Test, TestingModule } from '@nestjs/testing';
import { DatatableService } from './datatable.service';

describe('DatatableService', () => {
  let service: DatatableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatatableService],
    }).compile();

    service = module.get<DatatableService>(DatatableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
