export class CreateLocationDto {
  readonly name: string;
  readonly phone: number;
  readonly website?: number;
  readonly description: string;
  readonly contactPerson: number;
  readonly coordinates: {
    lon: number;
    lat: number;
  };
}

export class UpdateLocationDto {
  readonly name?: string;
  readonly phone?: number;
  readonly website?: number;
  readonly description?: string;
  readonly contactPerson?: string;
  readonly coordinates?: {
    lon: number;
    lat: number;
  };
}

export class calculateDistanceDto {
  location1: number;
  location2: number;
}
