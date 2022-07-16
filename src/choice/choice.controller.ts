import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { ChoiceService } from './choice.service';
import { CreateChoiceDto } from './dto/create-choice.dto';

@Controller('choice')
export class ChoiceController {
  constructor(private readonly choiceService: ChoiceService) {}

  @Post()
  create(@Body() choiceData: CreateChoiceDto) {
    return this.choiceService.create(choiceData);
  }

  @Put('/:choiceId/vote')
  async vote(@Param('choiceId') choiceId: string) {
    return this.choiceService.vote(choiceId);
  }
}
