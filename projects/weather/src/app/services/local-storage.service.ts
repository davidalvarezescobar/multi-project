import { Injectable } from '@angular/core';
import { Weather, Location } from './models';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getStoredLocations() {
    return JSON.parse(localStorage.getItem('locations')) as Array<Location>;
  }

  addLocation(newWeather: Weather) {
    const storedLocations = this.getStoredLocations() || [];
    storedLocations.push(newWeather.location);
    localStorage.setItem('locations', JSON.stringify(storedLocations));
  }
}
