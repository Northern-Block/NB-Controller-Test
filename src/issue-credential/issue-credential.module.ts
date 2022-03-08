import { Module } from '@nestjs/common';
import { IssueCredentialController } from './issue-credential.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [IssueCredentialController]
})
export class IssueCredentialModule {}
