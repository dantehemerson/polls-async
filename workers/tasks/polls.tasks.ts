import { Choice, ChoiceSchema } from '../../src/choice/schemas/choice.schema';
import { createMongoClient } from '../../src/shared/factories/mongo.connection';
import { ObjectId } from '../../src/shared/shared.types';

export async function incrementVote(choiceId: ObjectId) {
  const mongo = await createMongoClient(process.env.DB_URI);

  const choiceModel = mongo.model(Choice.name, ChoiceSchema);

  const data = await choiceModel.updateOne(
    { _id: choiceId },
    { $inc: { votes: 1 } },
  );

  return {
    data,
    endDate: new Date().toISOString(),
  };
}

export function incrementCounter(choiceId: ObjectId) {}
