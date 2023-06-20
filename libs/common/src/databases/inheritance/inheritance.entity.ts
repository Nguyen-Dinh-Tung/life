import { Column, JoinColumn, OneToOne } from 'typeorm';

export class inheritanceEntity {
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  create_at: Date;
  @Column({
    type: 'timestamp',
    nullable: true,
  })
  update_at: Date;
  @Column({
    type: 'timestamp',
    nullable: true,
  })
  delete_at: Date;
  @Column({ default: true })
  isActive: boolean;
  @Column({ default: false })
  isDelete: boolean;
}
