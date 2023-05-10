import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { SetupModule } from './setup/setup.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import ApiGatewayConfiguration from './config/api-gateway-configuration';
import * as Joi from 'joi';
import { RmqModule } from '@app/rmq';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [
    RmqModule,
    SetupModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ApiGatewayConfiguration],
      validationSchema: Joi.object({}),
    }),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
