import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationService {
  async findAll(): Promise<any> {
    return 'Hello';
  }

  async getOneLocation(id: number): Promise<any> {
    return id;
  }

  async addLocation(locationDTO): Promise<any> {
    return 'created location';
  }

  async calculateDistance(locationDTO): Promise<any> {
    return 'created location';
  }

  async editLocation(id: number, locationDTO): Promise<any> {
    return 'Location edited';
  }

  async deleteLocation(id: number) {
    return 'Location deleted';
  }
}
