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
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly phone: string;

  @IsNotEmpty()
  @IsUrl()
  readonly website?: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsEmail()
  readonly contactPerson: string;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => CoordinateDto)
  readonly coordinates: CoordinateDto;
}
