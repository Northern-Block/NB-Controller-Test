import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RouterModule, Route } from 'nest-router';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionsModule } from './connections/connections.module';
import { ConfigModule } from '@nestjs/config';
import { EndorseModule } from './endorse/endorse.module';
import { IssueCredentialModule } from './issue-credential/issue-credential.module';
import { IssueCredential2Module } from './issue-credential-2/issue-credential-2.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ConnectionsModule,
    EndorseModule,
    IssueCredentialModule,
    IssueCredential2Module,
    RouterModule.forRoutes([
      {
        path: 'topic',
        module: AppModule,
        children: [
          {
            path: 'connections',
            module: ConnectionsModule,
          },
          {
            path: 'endorse_transaction',
            module: EndorseModule,
          },
          {
            path: 'issue_credential_v2_0',
            module: IssueCredential2Module,
          },
          {
            path: 'issue_credential',
            module: IssueCredentialModule,
          }
        ],          
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
