import { Test, TestingModule } from '@nestjs/testing';
import { EndorseService } from './endorse.service';

describe('EndorseService', () => {
  let service: EndorseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EndorseService],
    }).compile();

    service = module.get<EndorseService>(EndorseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
