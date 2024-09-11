import { Injectable } from '@nestjs/common';
import { Car } from './dto/create-car.dto';
import { response } from 'express';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  // get all cars

  findAll(): Car[] {
    return this.cars;
    
  }

  findOne(id: number): Car {
    return this.cars.find((car) => car.id === id);
  }

  // let;s create a new car
  create(car: Car) {
    this.cars.push(car);
  }

  // update a car by ID
  update(id: number, updateCarDto: Car) {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    if (carIndex > -1) {
      this.cars[carIndex] = updateCarDto;
    }
  }

  // Delete a car by id
  delete(id: number) {
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
