import { Injectable } from '@nestjs/common';
import { SetupCrmDto } from './dto/setup-crm.dto';
import { ValidateApiKeyDto } from './dto/validate-api-key.dto';

@Injectable()
export class SetupService {
  async checkIsSetup() {
    return;
  }

  async validateApiKey(validateApiKeyDto: ValidateApiKeyDto) {
    return;
  }

  async setupCrm(setupCrmDto: SetupCrmDto) {
    return;
  }
}
