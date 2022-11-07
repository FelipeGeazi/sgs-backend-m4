import { Exclude } from "class-transformer";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Specialties } from "./specialties.entity";

@Entity("doctor")
export class Doctor {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 120 })
  name: string;

  @Column({ type: "date" })
  birth_date: string;

  @Column({ length: 120 })
  email: string;

  @Column({ length: 120 })
  @Exclude()
  password: string;

  @Column({ unique: true, length: 20 })
  cpf: string;

  @Column({ default: true })
  isDoctor: boolean;

  @Column({ unique: true, length: 20 })
  crm: string;

  @OneToMany((type) => Specialties, (specialties) => specialties.doctor, {
    eager: true
  })
  specialties: Specialties
}
