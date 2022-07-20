import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("specifications")
export default class Specification {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(name: string, description: string, created_at: Date, id?: string) {
    if (!this.id)
      this.id = uuid();
    if (name)
      this.name = name;
    if (description)
      this.description = description;
    if (created_at)
      this.created_at = created_at;
  }
}
