import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { CalculateDistanceDto } from './dto/calculate-distance.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationService {
  async findAll(): Promise<any> {
    return 'Hello';
  }

  async getOneLocation(id: number): Promise<any> {
    return id;
  }

  async addLocation(locationDTO: CreateLocationDto): Promise<any> {
    return 'created location';
  }

  async calculateDistance(locationDTO: CalculateDistanceDto): Promise<any> {
    return 'created location';
  }

  async editLocation(id: number, locationDTO: UpdateLocationDto): Promise<any> {
    return 'Location edited';
  }

  async deleteLocation(id: number) {
    return 'Location deleted';
  }
}
