import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiCreatedResponse, ApiBadRequestResponse, ApiNotFoundResponse, ApiOperation } from '@nestjs/swagger';
import { CreateMessageDto } from './dtos/create-message.dto';

@ApiTags('messages')
@Controller('messages')
export class MessagesController {
    @ApiOkResponse()
    @Get()
    listMessages() {
        return 'Messages';
    }

    @ApiOperation({summary: 'Create a message'})
    @ApiCreatedResponse()
    @ApiBadRequestResponse({description: 'Check the input\'s format'})
    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        console.log(body);
    }

    @ApiOkResponse()
    @ApiNotFoundResponse()
    @Get('/:id')
    getMessage(@Param('id') id: string) {
        console.log(id);
    }
}
