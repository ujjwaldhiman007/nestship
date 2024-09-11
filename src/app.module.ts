import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { ShippingModule } from './shipping/shipping.module';

@Module({
  imports: [CarsModule, ShippingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
