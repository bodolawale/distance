import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Coordinate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lon: string;

  @Column()
  lat: string;
}

@Entity()
export class Location {
  @PrimaryColumn()
  name: string;

  @Column()
  description: string;

  @Column()
  website: string;

  @Column()
  phone: string;

  @Column()
  contactPerson: string;

  @OneToOne(() => Coordinate, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn()
  coordinate: Coordinate;

  @Column({ default: true })
  isActive: boolean;
}
