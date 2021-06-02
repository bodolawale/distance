import { IsNumber } from 'class-validator';
export class CalculateDistanceDto {
  @IsNumber()
  location1: number;
  @IsNumber()
  location2: number;
}
