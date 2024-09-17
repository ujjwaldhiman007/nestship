import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class DataTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  orderId: string;

  @Column()
  mobileNumber: string;

  @Column('float')
  weight: number;

  @Column('decimal', { precision: 10, scale: 2 })
  paymentAmount: number;

  @Column()
  paymentMode: string;

  @Column()
  pickupAddress: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  courierPartner: string;

  @Column({ unique: true })
  awbNumber: string;

  @Column()
  currentStatus: string;

  @Column('date')
  orderDate: Date;

  @Column('date')
  pickupDate: Date;

  @Column('date', { nullable: true })
  ofdDate: Date;

  @Column('date', { nullable: true })
  deliveryDate: Date;

  @Column({ default: false })
  isRto: boolean;

  @Column({ default: false })
  isCancelled: boolean;

  @Column('decimal', { precision: 10, scale: 2 })
  shipmentCost: number;

  @Column()
  deliveryType: string;
}
