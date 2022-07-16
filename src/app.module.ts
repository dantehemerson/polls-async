import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseOptions } from './options/mongoose.options';
import { QuestionModule } from './question/question.module';
import { ChoiceModule } from './choice/choice.module';
import { CeleryModule } from './celery/celery.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useClass: MongooseOptions,
    }),
    QuestionModule,
    ChoiceModule,
    CeleryModule,
  ],
})
export class AppModule {}
