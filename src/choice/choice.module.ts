import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Choice, ChoiceSchema } from './schemas/choice.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Choice.name, schema: ChoiceSchema }]),
  ],
})
export class ChoiceModule {}
