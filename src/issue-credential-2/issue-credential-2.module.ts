import { Module } from '@nestjs/common';
import { IssueCredential2Controller } from './issue-credential-2.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [IssueCredential2Controller]
})
export class IssueCredential2Module {}
