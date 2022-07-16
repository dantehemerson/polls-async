import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChoiceProducer } from './choice.producer';
import { Choice, ChoiceSchema } from './schemas/choice.schema';
import { ChoiceService } from './choice.service';
import { ChoiceController } from './choice.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Choice.name, schema: ChoiceSchema }]),
  ],
  providers: [ChoiceProducer, ChoiceService],
  controllers: [ChoiceController],
})
export class ChoiceModule {}
