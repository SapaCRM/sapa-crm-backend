import { Controller, Get } from '@nestjs/common';
import { SetupServiceService } from './setup-service.service';

@Controller()
export class SetupServiceController {
  constructor(private readonly setupServiceService: SetupServiceService) {}

  @Get()
  getHello(): string {
    return this.setupServiceService.getHello();
  }
}
