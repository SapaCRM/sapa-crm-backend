import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ValidateApiKeyDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  apiKey: string;
}
