import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { InvitationDto} from "./connections.invitation.dto"; 
import { HttpModule, HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

@Controller('') // connections - specified in router in app.module.ts
export class ConnectionsController {
  constructor(private readonly httpService: HttpService) {}

  @Get()
  getTest() {
    console.log("Connections test");
    return "test of connections";
  }

  @Post ('/')
  async getInit(@Body() payload: any ) {
      console.log("*** topic/connections");

      switch(payload?.state) {
        case 'init':
          console.log("Init");
          // code block
          break;
        case 'invitation':
          console.log("Invitation");
          // code block
          break;
        case 'request':
          console.log("request");
          // code block
          let reqResponse = 
            process.env.ADMIN_URL_ENDPOINT + 
            "/connections/" + 
            payload?.connection_id + 
            "/accept-request?my_endpoint=" + 
            encodeURIComponent(process.env.AGENT_URL_ENDPOINT);
          console.log(reqResponse);
          let headersRequest = { 
            "Authorization" : 'Bearer ' + process.env.WALLET_TOKEN,
            "X-API-KEY" : process.env.X_API_KEY,
            "accept" : "application/json"
          };
          console.log(headersRequest);
          this.httpService.post(reqResponse, '', {headers: headersRequest})
            .subscribe(
              response => console.log(response.data),
              error => console.log(error)
            );

          if(payload?.connection_protocol=='didexchange/1.0') {
            console.log(payload);
            // Send the credential offer

          }
          console.log("REQUEST DONE");
          break;
        case 'response':
          console.log("response");
          // code block
          break;
        case 'active':
          console.log("Active");
          // code block
          break;
        case 'error':
          console.log("Error");
          // code block
          break;
        case 'inactive':
          // code block
          break;
        default:
          // code block
      }
      return `Hello From Connections`;
  }

}
