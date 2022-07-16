import 'dotenv/config';

import celery from 'celery-node';
import { PollsTasks } from './tasks/polls-tasks.enum';
import { incrementCounter, incrementVote } from './tasks/polls.tasks';

const worker = celery.createWorker(
  process.env.BROKER_URL,
  process.env.CELERY_RESULT_BACKEND,
);

worker.register(PollsTasks.IncrementVote, incrementVote);
worker.register(PollsTasks.IncrementCounter, incrementCounter);

worker.start();
