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
    return this.locationService.findAll();
  }

  @Get('/:id')
  async getOneLocation(@Param('id') id: number): Promise<any> {
    return this.locationService.getOneLocation(id);
  }

  @Post()
  async addLocation(@Body() locationDTO): Promise<any> {
    return this.locationService.addLocation(locationDTO);
  }

  @Post('/distance')
  async calculateDistance(@Body() locationDTO): Promise<any> {
    return this.locationService.calculateDistance(locationDTO);
  }

  @Patch('/:id')
  async editLocation(
    @Param('id') id: number,
    @Body() locationDTO,
  ): Promise<any> {
    return this.locationService.editLocation(id, locationDTO);
  }

  @Delete('/:id')
  async deleteLocation(@Param('id') id: number) {
    return this.locationService.deleteLocation(id);
  }
}
