import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import celery from 'celery-node';
import CeleryClient from 'celery-node/dist/app/client';
import { PollsTasks } from '../../workers/tasks/polls-tasks.enum';
import { CELERY_CLIENT } from './celery.constants';

@Global()
@Module({
  providers: [
    {
      provide: CELERY_CLIENT,
      useFactory: (configService: ConfigService) => {
        const brokerUrl = configService.get('BROKER_URL');
        const backendUrl = configService.get('CELERY_RESULT_BACKEND');

        return celery.createClient(brokerUrl, backendUrl);
      },
    },
    {
      provide: PollsTasks.IncrementCounter,
      useFactory: (celeryClient: CeleryClient) => {
        return celeryClient.createTask(PollsTasks.IncrementCounter);
      },
      inject: [CELERY_CLIENT],
    },
    {
      provide: PollsTasks.IncrementVote,
      useFactory: (celeryClient: CeleryClient) => {
        return celeryClient.createTask(PollsTasks.IncrementVote);
      },
      inject: [CELERY_CLIENT],
    },
  ],
})
export class CeleryModule {}
