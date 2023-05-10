import { Controller, Get } from '@nestjs/common';
import { SetupServiceService } from './setup-service.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class SetupServiceController {
  constructor(private readonly setupServiceService: SetupServiceService) {}

  @MessagePattern('check_is_setup')
  public async checkIsSetup(@Payload() data: any) {
    console.log('first');
    console.log(data);
  }
}
