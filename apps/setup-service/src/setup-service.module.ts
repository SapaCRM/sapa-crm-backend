import { Module } from '@nestjs/common';
import { SetupServiceController } from './setup-service.controller';
import { SetupServiceService } from './setup-service.service';
import { RmqModule } from '@app/rmq';
import { ConfigModule } from '@nestjs/config';
import setupConfiguration from './config/setup-configuration';
import * as Joi from 'joi';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    RmqModule,
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [setupConfiguration],
      validationSchema: Joi.object({
        sapa_crm: Joi.object({
          user_base_url: Joi.string().required(),
        }),
        rmq: Joi.object({
          url: Joi.string().required(),
          SETUP_QUEUE: Joi.string().required(),
        }),
      }),
    }),
  ],
  controllers: [SetupServiceController],
  providers: [SetupServiceService],
})
export class SetupServiceModule {}
