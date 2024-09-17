import { Body, Controller, Get, Post } from '@nestjs/common';
import { DatatableService } from './datatable.service';
import { DataTable } from 'src/database/pg/entities/datatable.entity';

@Controller('datatable')
export class DatatableController {
  constructor(private readonly datatableService: DatatableService) {}

  @Get()
  async findAll(): Promise<DataTable[]> {
    return this.datatableService.findAll();
  }

  @Get('metrics')
  getMetrics(){
    return this.datatableService.calculateMetrics()
  }

  @Post()
  async create(@Body() carData: Partial<DataTable>): Promise<DataTable> {
    return this.datatableService.create(carData);
  }
}
