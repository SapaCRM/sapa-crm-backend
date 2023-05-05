import { NestFactory } from '@nestjs/core';
import { TicketServiceModule } from './ticket-service.module';

async function bootstrap() {
  const app = await NestFactory.create(TicketServiceModule);
  await app.listen(3000);
}
bootstrap();
