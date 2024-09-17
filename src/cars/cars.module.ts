import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsService } from './cars.service';

import { Car } from 'src/database/pg/entities/car.entity';
import { CarsController } from './cars.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarsService],
  controllers: [CarsController],
  exports: [TypeOrmModule],
})
export class CarsModule {}
