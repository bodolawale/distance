import { CreateLocationDto } from './create-location.dto';
import { OmitType } from '@nestjs/mapped-types';

export class UpdateLocationDto extends OmitType(CreateLocationDto, [
  'name',
] as const) {}
