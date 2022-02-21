import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RouterModule, Route } from 'nest-router';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionsModule } from './connections/connections.module';
import { ConfigModule } from '@nestjs/config';

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
          }
        ],          
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
