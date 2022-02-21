import { Module } from '@nestjs/common';
import { ConnectionsController } from './connections.controller';
import { ConnectionsService } from './connections.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ConnectionsController],
  providers: [ConnectionsService]
})
export class ConnectionsModule {}
