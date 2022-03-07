import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';

@Controller('oob')
export class OobController {

    @Post ('/')
    async getInit(@Body() payload: any ) {
        console.log("*** topic/oob_invitation");
        console.log(payload);
  
        return 'Hello From Out-of-band';
    }
  
}
