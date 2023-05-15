import { NestFactory } from '@nestjs/core';
import { SetupServiceModule } from './setup-service.module';
import { RmqService } from '@app/rmq';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(SetupServiceModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('SETUP', true));
  await app.startAllMicroservices();
}
bootstrap();
