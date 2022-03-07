import { Module } from '@nestjs/common';
import { EndorseController } from './endorse.controller';
import { EndorseService } from './endorse.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [EndorseController],
  providers: [EndorseService]
})
export class EndorseModule {}
