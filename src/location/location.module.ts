import { Module } from '@nestjs/common';
import { Location, Coordinate } from './location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Location, Coordinate])],
  providers: [LocationService],
  controllers: [LocationController],
})
export class LocationModule {}
