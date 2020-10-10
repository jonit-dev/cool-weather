import { ILocation } from './geo.types';

export interface IPlaces {
  places: IPlaceData[];
}

export interface IPlaceData {
  name: string;
  location: ILocation;
  address: string;
  photoReference: string;
}
