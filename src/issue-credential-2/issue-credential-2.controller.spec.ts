import { Test, TestingModule } from '@nestjs/testing';
import { IssueCredential2Controller } from './issue-credential-2.controller';

describe('IssueCredential2Controller', () => {
  let controller: IssueCredential2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IssueCredential2Controller],
    }).compile();

    controller = module.get<IssueCredential2Controller>(IssueCredential2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
