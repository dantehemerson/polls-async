import 'dotenv/config';
import { createWorker } from 'celery-node';
import { PollsTasks } from './tasks/polls-tasks.enum';
import { incrementCounter, incrementVote } from './tasks/polls.tasks';

const worker = createWorker(process.env.BROKER_URL, process.env.BACKEND_URL);

worker.register(PollsTasks.IncrementVote, incrementVote);
worker.register(PollsTasks.IncrementCounter, incrementCounter);

worker.start();
