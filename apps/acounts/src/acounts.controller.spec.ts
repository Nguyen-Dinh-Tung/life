import { Test, TestingModule } from '@nestjs/testing';
import { AcountsController } from './acounts.controller';
import { AcountsService } from './acounts.service';

describe('AcountsController', () => {
  let acountsController: AcountsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AcountsController],
      providers: [AcountsService],
    }).compile();

    acountsController = app.get<AcountsController>(AcountsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(acountsController.getHello()).toBe('Hello World!');
    });
  });
});
