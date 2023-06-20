import { AcountsEntity } from '@app/common/databases/entities';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { FindAcountByFieldDto } from '../dto/find-acount-by-field.dto';
import { CheckRolesDto } from '../dto/check-roles.dto';
import { RolesEntity } from '@app/common/databases/entities/roles.entity';
@Injectable()
export class AcountsService {
  private readonly acountsRepo: Repository<AcountsEntity>;
  private readonly rolesRepo: Repository<RolesEntity>;
  constructor(private readonly dataSource: DataSource) {
    this.acountsRepo = this.dataSource.getRepository(AcountsEntity);
    this.rolesRepo = this.dataSource.getRepository(RolesEntity);
  }
  async findAll() {
    return await this.acountsRepo.find();
  }
  async findAcountByField(data: FindAcountByFieldDto) {
    return await this.acountsRepo.findOne({
      where: {
        ...data,
      },
    });
  }
  async findRoles(data: CheckRolesDto) {
    return await this.rolesRepo
      .createQueryBuilder('r')
      .leftJoin('r.acount', 'a')
      .where('r.feature =:feature', { feature: data.feature })
      .andWhere('r.service =:service', { service: data.service })
      .andWhere('a.id =:id', { id: data.id })
      .getOne();
  }
}
