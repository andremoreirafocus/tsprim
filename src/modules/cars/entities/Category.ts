import { v4 as uuid } from "uuid";
import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm"

interface ICategory {
  id?: string;
  name: string;
  description: string;
  created_at?: Date;
}
@Entity("categories")
export default class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  // constructor(category: ICategory) {
  //   this.id = category.id;
  //   this.name = category.name;
  //   this.description = category.description;
  //   this.created_at = category.created_at;
  }
}
