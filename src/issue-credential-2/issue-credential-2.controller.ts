import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

@Controller('')
export class IssueCredential2Controller {
    constructor(private readonly httpService: HttpService) {}

    @Get('/')
    getTest() {
      console.log("Issue Credential 2.0 test");
      return "test of issue credential 2.0";
    }

    @Post ('/')
    async getInit(@Body() payload: any ) {
        console.log("*** topic/issue-credential2");
        console.log(payload);
        return "OK";
    }    
}
