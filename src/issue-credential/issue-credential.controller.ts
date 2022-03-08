import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

@Controller('')
export class IssueCredentialController {
    constructor(private readonly httpService: HttpService) {}

    @Get('/')
    getTest() {
      console.log("Issue Credential test");
      return "test of issue credential";
    }

    @Post ('/')
    async getInit(@Body() payload: any ) {
        console.log("*** topic/issue-credential");
        console.log(payload);
        // check if issue cred
        if(payload?.cred_ex_id) {
            // call /issue-credential-2.0/records/CRED_EX_ID/issue
            let offer = {
                "comment": "Issue the credential"
            }
            ///issue-credential-2.0/records/{cred_ex_id}/issue
            let request = 
                process.env.ADMIN_URL_ENDPOINT + 
                "/issue-credential-2.0/records/"+
                payload?.cred_ex_id+
                "/issue";

            console.log(request);
            let headerRequest = { 
              "Authorization" : 'Bearer ' + process.env.WALLET_TOKEN,
              "X-API-KEY" : process.env.X_API_KEY,
              "accept" : "application/json"
            };
            console.log(headerRequest);
            this.httpService.post(request, '', {headers: headerRequest})
            .subscribe(
              response => console.log(response.data),
              error => console.log(error)
            );
        }        
        return "OK";
    }


}
