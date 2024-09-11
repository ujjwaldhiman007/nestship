export class shippingOrderDto {
  serviceType: string;
  handOverMode: string;
  returnShipmentFlag: string;
  Shipment: {
    code: string;
    SaleOrderCode: string;
    orderCode: string;
    channelCode: string;
    channelName: string;
    source: string;
    customField: [];
    invoiceCode: string;
    orderDate: Date;
    fullFilllmentTat: Date;
    weight: number;
    length: string;
    height: string;
    breadth: string;
    numberOfBoxes: string;
    items: [
      {
        name: string;
        description: string;
        quantity: number;
        skuCode: string;
        itemPrice: number;
        imageURL: string;
        hsnCode: string;
        tags: string;
        brand: string;
        color: string;
        category: string;
        size: string;
        item_details: string;
        ean: string;
      },
    ];
  };
  deliveryAddressDetails: {
    name: string;
    email: string;
    phone: string;
    address1: string;
    address2: string;
    pincode: string;
    city: string;
    state: string;
    country: string;
    stateCode: string;
    countryCode: string;
    gstin: string;
    alternatePhone: string;
  };
  pickupAddressDetails: {
    alternatePhone: string;
    name: string;
    email: string;
    phone: string;
    address1: string;
    address2: string;
    pincode: string;
    city: string;
    state: string;
    country: string;
    stateCode: string;
    countryCode: string;
    gstin: string;
  };
  returnAddressDetails: any;
  currencyCode: string;
  paymentMode: string;
  totalAmount: string;
  collectableAmount: string;
  courierName: string;
  customField: [
    {
      name: string;
      value: string;
    },
  ];
}
