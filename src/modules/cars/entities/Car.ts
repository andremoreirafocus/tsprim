import {v4 as uuid} from "uuid";
import { Column, CreateDateColumn, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import Category from "./Category";

export default class Car {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;0

  @Column()
  daily_rate: number;

  @Column()
  available: boolean;

  @Column()
  license_plate: string;

  @Column()
  fine_amount: number;

  @Column()
  brand: string;

  @OneToOne(() => Category)
  @JoinColumn()
  category: Category;

  @CreateDateColumn()
  created_at: Date;

  constructor(
      name: string, 
      description: string, 
      daily_rate: number,
      available: true,
      license_plate: string,
      fine_amount: number,
      created_at: Date,
      id?:string) {
        if (!this.id)
          this.id = uuid()
        else 
          this.id = id;
        this.name = name; 
        this.description = description; 
        this.daily_rate = daily_rate;
        this.available = available;
        this.license_plate = license_plate;
        this.fine_amount = fine_amount;
        this.created_at = created_at;
      }
      
}