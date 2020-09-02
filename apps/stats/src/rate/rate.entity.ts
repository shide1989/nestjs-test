import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm/index';

@Entity({ name: 'rates' })
export class RateEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', default: '' })
  currency: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'jsonb' })
  exchange_rates: any;
}
