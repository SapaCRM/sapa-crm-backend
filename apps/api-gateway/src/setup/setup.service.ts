import { Inject, Injectable } from '@nestjs/common';
import { SetupCrmDto } from './dto/setup-crm.dto';
import { ValidateApiKeyDto } from './dto/validate-api-key.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SetupService {
  constructor(
    @Inject('SETUP_SERVICE') private readonly setupClient: ClientProxy,
  ) {
    this.setupClient.connect();
  }
  async checkIsSetup(apiKey: string) {
    try {
      const checkIsSetupResponse = await firstValueFrom(
        this.setupClient.send('check_is_setup', { apiKey }),
      );
      return checkIsSetupResponse;
    } catch (error) {
      console.log(error);
    }
  }

  async validateApiKey(validateApiKeyDto: ValidateApiKeyDto) {
    return;
  }

  async setupCrm(setupCrmDto: SetupCrmDto) {
    return;
  }
}
