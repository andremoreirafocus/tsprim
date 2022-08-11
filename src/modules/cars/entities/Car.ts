import {v4 as uuid} from "uuid";
// import { Column, CreateDateColumn, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import Category from "./Category";

export default class Car {
  // @PrimaryColumn()
  id: string;

  // @Column()
  name: string;

  // @Column()
  description: string;0

  // @Column()
  daily_rate: number;

  // @Column()
  available: boolean;

  // @Column()
  license_plate: string;

  // @Column()
  fine_amount: number;

  // @Column()
  brand: string;

  // @OneToOne(() => Category)
  // @JoinColumn()
  // category: Category;
  category_id: string;

  // @CreateDateColumn()
  created_at: Date;

  constructor(
    name: string, 
    description: string, 
    daily_rate: number,
    license_plate: string,
    fine_amount: number,
    brand: string,
    category_id: string,
    id?:string) {
    if (!this.id) {
      this.id = uuid()
      this.available = true;
      this.created_at = new Date();
    }
    else 
      this.id = id;
    this.name = name; 
    this.description = description; 
    this.daily_rate = daily_rate;
    this.license_plate = license_plate;
    this.fine_amount = fine_amount;
    this.brand = brand;
    this.category_id = category_id;
  }
      
}