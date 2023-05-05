import { NestFactory } from '@nestjs/core';
import { MessagingServiceModule } from './messaging-service.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagingServiceModule);
  await app.listen(3000);
}
bootstrap();
