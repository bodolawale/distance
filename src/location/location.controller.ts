import { FindOneParams as SingleIdParams } from './dto/params.dto';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { CalculateDistanceDto } from './dto/calculate-distance.dto';
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  async findAll(): Promise<any> {
    return this.locationService.findAll();
  }

  @Get('/:id')
  async getOneLocation(@Param() params: SingleIdParams): Promise<any> {
    return this.locationService.getOneLocation(params.id);
  }

  @Post()
  async addLocation(@Body() locationDTO: CreateLocationDto): Promise<any> {
    return this.locationService.addLocation(locationDTO);
  }

  @Post('/distance')
  async calculateDistance(
    @Body() locationDTO: CalculateDistanceDto,
  ): Promise<any> {
    return this.locationService.calculateDistance(locationDTO);
  }

  @Patch('/:id')
  async editLocation(
    @Param() params: SingleIdParams,
    @Body() locationDTO: UpdateLocationDto,
  ): Promise<any> {
    return this.locationService.editLocation(params.id, locationDTO);
  }

  @Delete('/:id')
  async deleteLocation(@Param() params: SingleIdParams) {
    return this.locationService.deleteLocation(params.id);
  }
}
