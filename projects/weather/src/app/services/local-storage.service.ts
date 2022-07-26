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

  removeLocation(weather: Weather) {
    let storedLocations = this.getStoredLocations();
    storedLocations = storedLocations.filter(l => l.id !== weather.location.id);
    if (storedLocations.length) {
      localStorage.setItem('locations', JSON.stringify(storedLocations));
    } else {
      localStorage.removeItem('locations');
    }
  }
}
