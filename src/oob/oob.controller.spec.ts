import { Test, TestingModule } from '@nestjs/testing';
import { OobController } from './oob.controller';

describe('OobController', () => {
  let controller: OobController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OobController],
    }).compile();

    controller = module.get<OobController>(OobController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
