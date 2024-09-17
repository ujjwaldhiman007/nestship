import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { ShippingModule } from './shipping/shipping.module';
import { DataSource } from 'typeorm';
import { DatabaseModule } from './database/pg/database.provider';
import { DatatableModule } from './datatable/datatable.module';

@Module({
  imports: [CarsModule, ShippingModule, DatabaseModule, DatatableModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
