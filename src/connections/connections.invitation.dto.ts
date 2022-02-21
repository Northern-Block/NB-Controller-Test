import { ApiProperty } from '@nestjs/swagger';

export class InvitationDto{
    @ApiProperty()
    invitation_key: string;

    @ApiProperty()
    rfc23_state: string;

    @ApiProperty()
    created_at: string;

    @ApiProperty()
    accept: string;

    @ApiProperty()
    connection_protocol: string;

    @ApiProperty()
    connection_id: string;

    @ApiProperty()
    invitation_mode: string;

    @ApiProperty()
    state: string;

    @ApiProperty()
    routing_state: string;

    @ApiProperty()
    their_role: string;

    @ApiProperty()
    updated_at: string;

  }

//    @ApiProperty({ type: [String] })
//    recipient_keys: string[];


