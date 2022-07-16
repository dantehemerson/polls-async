import { ObjectId } from '../../src/shared/shared.types';

export async function incrementVote(choiceId: ObjectId) {
  const delayTime = 5000;

  await new Promise((resolve) => {
    setTimeout(resolve, delayTime);
  });

  return {
    delayTime,
    endDate: new Date().toISOString(),
  };
  console.log('Processing increment vote for ', choiceId);
}

export function incrementCounter(choiceId: ObjectId) {}
