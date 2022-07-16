import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from '../../shared/shared.types';

export type ChoiceDocument = Choice & Document;

@Schema({
  timestamps: true,
})
export class Choice {
  readonly _id: ObjectId;

  @Prop({ required: true })
  question: string;

  @Prop({ required: true })
  choiceText: string;

  @Prop({ required: true, default: 0 })
  votes: number;

  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export const ChoiceSchema = SchemaFactory.createForClass(Choice);
