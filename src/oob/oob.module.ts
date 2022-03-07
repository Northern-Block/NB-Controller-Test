import { Module } from '@nestjs/common';
import { OobController } from './oob.controller';
import { OobService } from './oob.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [OobController],
  providers: [OobService]
})
export class OobModule {}
