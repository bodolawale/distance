import { CoordinateDto } from './coordinate.dto';
import {
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateLocationDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsUrl()
  website?: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEmail()
  contactPerson: string;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => CoordinateDto)
  coordinate: CoordinateDto;
}
