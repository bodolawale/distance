import { LocationService } from './location.service';
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
    return 'Hello';
  }

  @Get('/:id')
  async getOneLocation(@Param('id') id: number): Promise<any> {
    return id;
  }

  @Post()
  async addLocation(@Body() locationDTO): Promise<any> {
    return 'created location';
  }

  @Post('/distance')
  async calculateDistance(@Body() locationDTO): Promise<any> {
    return 'created location';
  }

  @Patch('/:id')
  async editLocation(
    @Param('id') id: number,
    @Body() locationDTO,
  ): Promise<any> {
    return 'Location edited';
  }

  @Delete('/:id')
  async deleteLocation(@Param('id') id: number) {
    return 'Location deleted';
  }
}
