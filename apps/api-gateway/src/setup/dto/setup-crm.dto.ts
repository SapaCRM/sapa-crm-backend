import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';
import { DatabaseOptions } from '../../utils/constants';

export class SetupCrmDto {
  //company details
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  companyName: string;

  @ApiProperty()
  @IsEmail()
  companyEmail: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  apiKey: string;

  //admin details
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  adminUserName: string;

  @ApiProperty()
  @IsEmail()
  adminEmail: string;

  @ApiProperty()
  @IsString()
  adminPassword: string;

  //database settings
  @ApiProperty()
  @IsString()
  @IsEnum(DatabaseOptions)
  type: DatabaseOptions;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  host: string;

  @ApiProperty()
  @IsNumber()
  port: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  database: string;
}
