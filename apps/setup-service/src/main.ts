import { NestFactory } from '@nestjs/core';
import { SetupServiceModule } from './setup-service.module';

async function bootstrap() {
  const app = await NestFactory.create(SetupServiceModule);
  await app.listen(3000);
}
bootstrap();
