import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from 'src/database/pg/entities/car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}

  findAll(): Promise<Car[]> {
    return this.carRepository.find();
  }

  findOne(id: number): Promise<Car | null> {
    return this.carRepository.findOneBy({ id });
  }

  create(carData: Partial<Car>): Promise<Car> {
    const newCar = this.carRepository.create(carData);
    return this.carRepository.save(newCar);
  }

  createCars(carData: Partial<Car>[]): Promise<Car[]> {
    const newCars = this.carRepository.create(carData);
    return this.carRepository.save(newCars);
  }

  async update(id: number, carData: Partial<Car>): Promise<Car | null> {
    await this.carRepository.update(id, carData);
    return this.carRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.carRepository.delete(id);
  }
}
