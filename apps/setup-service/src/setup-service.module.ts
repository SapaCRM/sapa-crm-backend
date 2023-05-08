import { Module } from '@nestjs/common';
import { SetupServiceController } from './setup-service.controller';
import { SetupServiceService } from './setup-service.service';
import { RmqModule } from '@app/rmq';
import { ConfigModule } from '@nestjs/config';
import setupConfiguration from './config/setup-configuration';
import * as Joi from 'joi';

@Module({
  imports: [
    RmqModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [setupConfiguration],
      validationSchema: Joi.object({}),
    }),
  ],
  controllers: [SetupServiceController],
  providers: [SetupServiceService],
})
export class SetupServiceModule {}
