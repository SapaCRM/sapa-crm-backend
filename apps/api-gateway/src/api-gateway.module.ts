import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { SetupModule } from './setup/setup.module';

@Module({
  imports: [SetupModule],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
