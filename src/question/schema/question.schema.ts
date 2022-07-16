import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from '../../shared/shared.types';

@Schema({
  timestamps: true,
})
export class Question {
  readonly _id: ObjectId;

  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  publicationDate: Date;

  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
