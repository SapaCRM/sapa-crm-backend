import { Module } from '@nestjs/common';
import { SetupServiceController } from './setup-service.controller';
import { SetupServiceService } from './setup-service.service';

@Module({
  imports: [],
  controllers: [SetupServiceController],
  providers: [SetupServiceService],
})
export class SetupServiceModule {}
