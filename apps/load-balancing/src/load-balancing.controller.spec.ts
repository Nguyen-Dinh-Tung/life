import { Test, TestingModule } from '@nestjs/testing';
import { LoadBalancingController } from './load-balancing.controller';
import { LoadBalancingService } from './load-balancing.service';

describe('LoadBalancingController', () => {
  let loadBalancingController: LoadBalancingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LoadBalancingController],
      providers: [LoadBalancingService],
    }).compile();

    loadBalancingController = app.get<LoadBalancingController>(LoadBalancingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(loadBalancingController.getHello()).toBe('Hello World!');
    });
  });
});
