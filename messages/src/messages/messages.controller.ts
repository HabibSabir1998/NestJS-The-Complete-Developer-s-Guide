import { MessagesService } from './messages.service';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    const messages = this.messagesService.findOne(id);

    if (!messages) {
      throw new NotFoundException('message not found');
    }

    return messages;
  }
}
