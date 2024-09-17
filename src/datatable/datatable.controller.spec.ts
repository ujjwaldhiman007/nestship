import { Test, TestingModule } from '@nestjs/testing';
import { DatatableController } from './datatable.controller';

describe('DatatableController', () => {
  let controller: DatatableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatatableController],
    }).compile();

    controller = module.get<DatatableController>(DatatableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
