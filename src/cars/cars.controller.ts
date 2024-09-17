import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from 'src/database/pg/entities/car.entity';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  async findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Car> {
    const car = await this.carsService.findOne(+id);
    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }
    return car;
  }

  @Post()
  async create(@Body() carData: Partial<Car>): Promise<Car> {
    return this.carsService.create(carData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() carData: Partial<Car>,
  ): Promise<Car> {
    const updatedCar = await this.carsService.update(+id, carData);
    if (!updatedCar) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }
    return updatedCar;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    const car = await this.carsService.findOne(+id);
    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }
    await this.carsService.remove(+id);
  }
}
