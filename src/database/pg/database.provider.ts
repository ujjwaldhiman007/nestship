import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { CarsController } from 'src/cars/cars.controller';
import { DataTable } from './entities/datatable.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'elephant1225',
      database: 'carsdb',
      entities: [Car, DataTable],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
