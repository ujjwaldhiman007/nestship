import { Module } from '@nestjs/common';
import { DatatableController } from './datatable.controller';
import { DatatableService } from './datatable.service';
import { DataTable } from 'src/database/pg/entities/datatable.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DataTable])],
  controllers: [DatatableController],
  providers: [DatatableService],
  exports: [TypeOrmModule],
})
export class DatatableModule {}
