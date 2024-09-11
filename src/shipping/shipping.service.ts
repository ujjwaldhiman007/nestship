import { Injectable } from '@nestjs/common';
import { shippingOrderDto } from './dto/shipping.dto';

@Injectable()
export class ShippingService {
  mapShippingData(inputData: shippingOrderDto): any {
    return {
      orderId: inputData.Shipment.orderCode,
      awbNumber: '',
      orderType: '',
      orderParty: '',
      sourceLocationDetails: {
        representativePersonName: inputData.pickupAddressDetails.name,
        unitName: 'Warehouse Example',
        contactNumPrimary: inputData.pickupAddressDetails.phone,
        contactNumSecondary:
          inputData.pickupAddressDetails.alternatePhone || '',
        gstNumber: inputData.pickupAddressDetails.gstin,
        address: {
          addressLine1: inputData.pickupAddressDetails.address1,
          addressLine2: inputData.pickupAddressDetails.address2,
          addressLine3: '',
          city: inputData.pickupAddressDetails.city,
          state: inputData.pickupAddressDetails.state,
          pincode: inputData.pickupAddressDetails.pincode,
          latitude: null,
          longitude: null,
        },
      },
      destinationLocationDetails: {
        representativePersonName: inputData.deliveryAddressDetails.name,
        unitName: 'Customer Rep',
        contactNumPrimary: inputData.deliveryAddressDetails.phone,
        contactNumSecondary:
          inputData.deliveryAddressDetails.alternatePhone || '',
        gstNumber: inputData.deliveryAddressDetails.gstin,
        address: {
          addressLine1: inputData.deliveryAddressDetails.address1,
          addressLine2: inputData.deliveryAddressDetails.address2,
          addressLine3: '',
          city: inputData.deliveryAddressDetails.city,
          state: inputData.deliveryAddressDetails.state,
          pincode: inputData.deliveryAddressDetails.pincode,
          latitude: null,
          longitude: null,
        },
      },
    
    };
  }
}