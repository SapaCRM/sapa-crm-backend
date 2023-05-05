import { Test, TestingModule } from '@nestjs/testing';
import { SetupServiceController } from './setup-service.controller';
import { SetupServiceService } from './setup-service.service';

describe('SetupServiceController', () => {
  let setupServiceController: SetupServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SetupServiceController],
      providers: [SetupServiceService],
    }).compile();

    setupServiceController = app.get<SetupServiceController>(SetupServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(setupServiceController.getHello()).toBe('Hello World!');
    });
  });
});
