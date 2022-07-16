import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChoiceProducer } from './choice.producer';
import { Choice, ChoiceSchema } from './schemas/choice.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Choice.name, schema: ChoiceSchema }]),
  ],
  providers: [ChoiceProducer],
})
export class ChoiceModule {}
