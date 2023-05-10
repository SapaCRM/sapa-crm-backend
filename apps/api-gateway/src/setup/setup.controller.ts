import { Body, Controller, Get, Post } from '@nestjs/common';
import { SetupService } from './setup.service';
import { ValidateApiKeyDto } from './dto/validate-api-key.dto';
import { SetupCrmDto } from './dto/setup-crm.dto';
import {
  ApiExtraModels,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { ResponseDto } from '../utils/response-dto';

@ApiTags('Company')
@ApiExtraModels(ResponseDto)
@Controller('setup')
export class SetupController {
  constructor(private readonly setupService: SetupService) {}

  @ApiResponse({
    status: 200,
    description: 'Setup successfull.',
    schema: {
      allOf: [
        { $ref: getSchemaPath(ResponseDto) },
        // {
        //   properties: {
        //     data: {
        //       $ref: getSchemaPath(Company),
        //     },
        //   },
        // },
      ],
    },
  })
  @Get()
  async checkIsSetup() {
    const data = await this.setupService.checkIsSetup();
    return {
      status: true,
      message: 'Company fetched successfully',
      data,
    };
  }

  @ApiResponse({
    status: 200,
    description: 'Setup successfull.',
    schema: {
      allOf: [
        { $ref: getSchemaPath(ResponseDto) },
        // {
        //   properties: {
        //     data: {
        //       $ref: getSchemaPath(Company),
        //     },
        //   },
        // },
      ],
    },
  })
  @Post('/validate')
  async validateApiKey(@Body() validateApiKeyDto: ValidateApiKeyDto) {
    const data = await this.setupService.validateApiKey(validateApiKeyDto);
    return {
      status: true,
      message: 'Api-Key validated successfully',
      data,
    };
  }

  @ApiResponse({
    status: 201,
    description: 'Setup successfull.',
    schema: {
      allOf: [
        { $ref: getSchemaPath(ResponseDto) },
        {
          properties: {
            data: {
              type: 'string',
            },
          },
        },
      ],
    },
  })
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
