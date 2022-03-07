import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

@Controller('')
export class EndorseController {
    constructor(private readonly httpService: HttpService) {}

    @Get('/')
    getTest() {
      console.log("Endorsement test");
      return "test of endorsement";
    }

    @Post ('/')
    async getInit(@Body() payload: any ) {
        console.log("*** topic/endorse_transaction");
        console.log(payload);
        return "OK";
    }
}
