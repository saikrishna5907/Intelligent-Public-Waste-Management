export class Sensor {
  $key: string;
  capacity: number;
  hardware_id: string;
  location: {latitude: number, longitude: number};
  location_precinct: string;
  tags: string[];
}
