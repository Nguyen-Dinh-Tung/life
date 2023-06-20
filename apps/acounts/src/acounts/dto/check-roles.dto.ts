import { FEATURE_ROLES_ENUM } from '@app/common/enums/feature-roles.enum';
import { ROLES_ENUM } from '@app/common/enums/roles.enum';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { UUID } from 'crypto';

export class CheckRolesDto {
  @IsNotEmpty()
  id: UUID;
  @IsNotEmpty()
  feature: FEATURE_ROLES_ENUM;
  @IsNotEmpty()
  service: ROLES_ENUM;
}
