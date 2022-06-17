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

  constructor(name: string, description:string, created_at: Date, id?: string) {
    if (!this.id) {
      this.id = uuid();
    } 
    else
      this.id = id;
    if (name)
      this.name = name;
    if (description)
      this.description = description;
    if (created_at)
      this.created_at = created_at;
  }
}