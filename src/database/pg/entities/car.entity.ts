import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  name: string;


  @Column()
  model: number;

  @Column()
  year: number;


  @Column({default: true})
  available: boolean;
}