import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationController } from './location/location.controller';
import { LocationService } from './location/location.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, LocationController],
  providers: [AppService, LocationService],
})
export class AppModule {}
