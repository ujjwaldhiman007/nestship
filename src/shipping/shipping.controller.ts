import { Body, Controller, Post } from '@nestjs/common';
import { ShippingService } from './shipping.service';
import { shippingOrderDto } from './dto/shipping.dto';

@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Post('map')
  mapOrder(@Body() shippingOrderDto: shippingOrderDto): any {
    return this.shippingService.mapShippingData(shippingOrderDto);
  }
}
