import { Body, Controller, Get, Post } from '@nestjs/common';
import { SetupService } from './setup.service';
import { ValidateApiKeyDto } from './dto/validate-api-key.dto';
import { SetupCrmDto } from './dto/setup-crm.dto';

@Controller('setup')
export class SetupController {
  constructor(private readonly setupService: SetupService) {}

  @Get()
  async checkIsSetup() {
    const data = await this.setupService.checkIsSetup();
    return {
      status: true,
      message: 'Company fetched successfully',
      data,
    };
  }

  @Post('/validate')
  async validateApiKey(@Body() validateApiKeyDto: ValidateApiKeyDto) {
    const data = await this.setupService.validateApiKey(validateApiKeyDto);
    return {
      status: true,
      message: 'Api-Key validated successfully',
      data,
    };
  }

  @Post()
  async setupCrm(@Body() setupCrmDto: SetupCrmDto) {
    const data = await this.setupService.setupCrm(setupCrmDto);
    return {
      status: true,
      message: 'Setup successfull',
      data,
    };
  }
}
