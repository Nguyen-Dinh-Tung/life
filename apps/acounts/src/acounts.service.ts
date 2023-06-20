import { AcountsEntity } from '@app/common/databases/entities';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
@Injectable()
export class AcountsService {
  private readonly acountsRepo: Repository<AcountsEntity>;
  constructor(private readonly dataSource: DataSource) {
    this.acountsRepo = this.dataSource.getRepository(AcountsEntity);
  }
  async findAll() {
    return await this.acountsRepo.find();
  }
}
