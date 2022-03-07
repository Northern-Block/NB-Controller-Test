import { Test, TestingModule } from '@nestjs/testing';
import { OobService } from './oob.service';

describe('OobService', () => {
  let service: OobService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OobService],
    }).compile();

    service = module.get<OobService>(OobService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
