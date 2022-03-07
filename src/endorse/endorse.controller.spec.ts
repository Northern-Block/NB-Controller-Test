import { Test, TestingModule } from '@nestjs/testing';
import { EndorseController } from './endorse.controller';

describe('EndorseController', () => {
  let controller: EndorseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EndorseController],
    }).compile();

    controller = module.get<EndorseController>(EndorseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
