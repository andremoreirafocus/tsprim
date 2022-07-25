import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
@Entity("users")
export default class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  driver_license: string;

  @Column()
  isAdmin: boolean;

  @CreateDateColumn()
  created_at: Date;
  constructor(name: string, username: string, password: string, email: string, driver_license: string, isAdmin: boolean ,id?: string) {
    if (!id) {
      this.id = uuid()
    }
    this.name = name;
    this.username = username;
    this.password = password;
    this.email = email;
    this.driver_license = driver_license;
    this.isAdmin = isAdmin;
  }
}
