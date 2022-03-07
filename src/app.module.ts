import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RouterModule, Route } from 'nest-router';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionsModule } from './connections/connections.module';
import { ConfigModule } from '@nestjs/config';
import { OobModule } from './oob/oob.module';
import { EndorseModule } from './endorse/endorse.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ConnectionsModule,
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
            path: 'oob_invitation',
            module: OobModule,
          }
        ],          
      },
    ]),
    EndorseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
