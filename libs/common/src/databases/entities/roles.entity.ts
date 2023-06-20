import { UUID } from 'crypto';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AcountsEntity } from './acounts.entity';
import { FEATURE_ROLES_ENUM } from '@app/common/enums/feature-roles.enum';
import { ROLES_ENUM } from '@app/common/enums/roles.enum';
import { inheritanceEntity } from '../inheritance/inheritance.entity';

@Entity('roles')
export class RolesEntity extends inheritanceEntity {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;
  @ManyToOne(() => AcountsEntity, (acount) => acount.id)
  @JoinColumn()
  acount: AcountsEntity;
  @Column({ enum: FEATURE_ROLES_ENUM, type: 'enum' })
  feature: FEATURE_ROLES_ENUM;
  @Column({ enum: ROLES_ENUM, type: 'enum' })
  service: ROLES_ENUM;
}
