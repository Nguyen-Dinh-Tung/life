import { AcountsEntity } from '@app/common/databases/entities';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { FindAcountByFieldDto } from '../dto/find-acount-by-field.dto';
@Injectable()
export class AcountsService {
  private readonly acountsRepo: Repository<AcountsEntity>;
  constructor(private readonly dataSource: DataSource) {
    this.acountsRepo = this.dataSource.getRepository(AcountsEntity);
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
}
