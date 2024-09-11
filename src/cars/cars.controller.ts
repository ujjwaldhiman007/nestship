import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './dto/create-car.dto';
import { Response } from 'express';
import { get } from 'http';

@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarsService) {}

  @Get()
  findAll(@Res() res: Response) {
    const cars = this.carService.findAll();
    return res.status(HttpStatus.OK).json({
      success: true,
      message: 'cars retrieved succesfully',
      data: cars,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    const car = this.carService.findOne(parseInt(id, 10));
    if (!car) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: `car with id ${id} not found`,
      });
    }
    return res.status(HttpStatus.OK).json({
      success: true,
      message: `car with ${id} retrived successfully`,
      data: car,
    });
  }

  @Post()
  create(@Body() car: Car, @Res() res: Response) {
    this.carService.create(car);

    return res.status(HttpStatus.CREATED).json({
      success: true,
      message: 'car created successfully',
      data: car,
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() car: Car, @Res() res: Response) {
    this.carService.update(parseInt(id, 10), car);
    return res.status(HttpStatus.OK).json({
      success: true,
      message: `car with id ${id} updated successfully`,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Res() res: Response) {
    this.carService.delete(Number(id));
    return res.status(HttpStatus.OK).json({
      success: true,
      message: `car with id ${id} is deleted`,
    });
  }
}
