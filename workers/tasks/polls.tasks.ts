import { createRedisClient } from '../../src/shared/factories/redis.client';
import { Choice, ChoiceSchema } from '../../src/choice/schemas/choice.schema';
import { createMongoClient } from '../../src/shared/factories/mongo.connection';
import { ObjectId } from '../../src/shared/shared.types';
import { delay } from '../../src/shared/helpers/time.helper';

export async function incrementVote(choiceId: ObjectId) {
  const mongo = await createMongoClient(process.env.DB_URI);

  const choiceModel = mongo.model(Choice.name, ChoiceSchema);

  /** SIMULATION: Longer time in database disk operations */
  await delay(10000);

  const data = await choiceModel.updateOne(
    { _id: choiceId },
    { $inc: { votes: 1 } },
  );

  return {
    data,
    endDate: new Date().toISOString(),
  };
}

/**
 * Save in memory
 */
export async function incrementCounter(choiceId: ObjectId) {
  const redis = await createRedisClient(process.env.BACKEND_URL);

  const key = `choice:${choiceId}`;

  const data = await redis.incr(key);

  return {
    data,
    endDate: new Date().toISOString(),
  };
}
