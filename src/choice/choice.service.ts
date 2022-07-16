import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChoiceProducer } from './choice.producer';
import { CreateChoiceDto } from './dto/create-choice.dto';
import { Choice, ChoiceDocument } from './schemas/choice.schema';

@Injectable()
export class ChoiceService {
  constructor(
    @InjectModel(Choice.name)
    private readonly choiceModel: Model<ChoiceDocument>,
    private readonly choiceProducer: ChoiceProducer,
  ) {}

  async create(choiceData: CreateChoiceDto) {
    return this.choiceModel.create(choiceData);
  }

  async vote(choiceId: string) {
    const [resultCounter, resultVote] = await Promise.all([
      this.choiceProducer.incrementCounter(choiceId),
      await this.choiceProducer.incrementVote(choiceId),
    ]);

    console.log('Tasks Created with ids: ', {
      counterTaskId: resultCounter.taskId,
      counterVoteId: resultVote.taskId,
    });

    return {
      ok: true,
    };
  }
}
