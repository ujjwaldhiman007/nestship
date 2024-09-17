import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataTable } from 'src/database/pg/entities/datatable.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DatatableService {
  constructor(
    @InjectRepository(DataTable)
    private dataTableRepo: Repository<DataTable>,
  ) {}

  findAll(): Promise<DataTable[]> {
    return this.dataTableRepo.find();
  }

  findOne(id: number): Promise<DataTable | null> {
    return this.dataTableRepo.findOneBy({ id });
  }

  create(tableData: Partial<DataTable>): Promise<DataTable> {
    const newTable = this.dataTableRepo.create(tableData);
    return this.dataTableRepo.save(newTable);
  }

  // calculate the mtrics of all data
  async calculateMetrics(): Promise<any> {
    const data = await this.dataTableRepo.find();

    let totalOrders = 0;
    let deliveredOrders = 0;
    let totalRevenue = 0;
    let totalShipmentCost = 0;
    let totalPickupToOFD = 0;
    let totalDeliveryTAT = 0;
    let rtoOrders = 0;
    let cancelledOrders = 0;
    let sddOrders = 0;
    let nddOrders = 0;

    // we traversing all o the data to and try to calculate metrics
    data.forEach((order) => {
      totalOrders += 1;

      if (order.currentStatus === 'Delivered') {
        deliveredOrders += 1;
        totalRevenue += order.paymentAmount || 0;
        totalShipmentCost += order.shipmentCost || 0;

        // Calculate Delivery TAT (if available)
        if (order.pickupDate && order.deliveryDate) {
          const tat =
            new Date(order.deliveryDate).getTime() -
            new Date(order.pickupDate).getTime();
          totalDeliveryTAT += tat;
        }

        // Same-Day or Next-Day Delivery
        const orderTime = new Date(order.orderDate).getTime();
        const deliveryTime = new Date(order.deliveryDate).getTime();
        const deliveryDifference =
          (deliveryTime - orderTime) / (1000 * 60 * 60);

        if (deliveryDifference <= 24) {
          sddOrders += 1; // Same-Day Delivery
        } else if (deliveryDifference <= 48) {
          nddOrders += 1; // Next-Day Delivery
        }
      }

      // Calculate Pickup to OFD time (if available)
      if (order.pickupDate && order.ofdDate) {
        const pickupToOFD =
          new Date(order.ofdDate).getTime() -
          new Date(order.pickupDate).getTime();
        totalPickupToOFD += pickupToOFD;
      }

      // Count RTO and Cancelled orders
      if (order.isRto) {
        rtoOrders += 1;
      }
      if (order.isCancelled) {
        cancelledOrders += 1;
      }
    });

    //  calculate metrics
    const deliveryRate = (deliveredOrders / totalOrders) * 100 || 0;
    const averageShipmentCost = totalShipmentCost / totalOrders || 0;
    const rtoRate = (rtoOrders / totalOrders) * 100 || 0;
    const cancellationRate = (cancelledOrders / totalOrders) * 100 || 0;
    const averagePickupToOFD = totalPickupToOFD / deliveredOrders || 0;
    const averageDeliveryTAT = totalDeliveryTAT / deliveredOrders || 0;

    return {
      deliveryRate: `${deliveryRate.toFixed(2)}%`,
      deliveredRevenue: totalRevenue,
      averageShipmentCost: averageShipmentCost.toFixed(2),
      ordersDeliveredInSDD: sddOrders,
      ordersDeliveredInNDD: nddOrders,
      averagePickupToOFD: `${(averagePickupToOFD / (1000 * 60 * 60)).toFixed(2)} hours`,
      rtoRate: `${rtoRate.toFixed(2)}%`,
      cancellationRate: `${cancellationRate.toFixed(2)}%`,
      averageDeliveryTAT: `${(averageDeliveryTAT / (1000 * 60 * 60)).toFixed(2)} hours`,
    };
  }
}
