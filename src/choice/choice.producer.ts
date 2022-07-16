import { Inject, Injectable } from '@nestjs/common';
import CeleryTask from 'celery-node/dist/app/task';
import { PollsTasks } from '../../workers/tasks/polls-tasks.enum';

@Injectable()
export class ChoiceProducer {
  constructor(
    @Inject(PollsTasks.IncrementVote)
    private readonly incrementVoteTask: CeleryTask,
    @Inject(PollsTasks.IncrementCounter)
    private readonly incrementCounterTask: CeleryTask,
  ) {}

  async incrementVote(choiceId: string) {
    return this.incrementCounterTask.applyAsync([choiceId]);
  }

  async incrementCounter(choiceId: string) {
    return this.incrementVoteTask.applyAsync([choiceId]);
  }
}
