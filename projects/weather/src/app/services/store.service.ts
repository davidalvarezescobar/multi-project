import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private readonly _locations: BehaviorSubject<any[]>;
  locations$: Observable<any[]>;

  get locations() {
    return this._locations.getValue();
  }
  
  constructor() {
    const initialState = localStorage.getItem('locations') || '[]';
    this._locations = new BehaviorSubject<any>(JSON.parse(initialState));
    this.locations$ = this._locations.asObservable();
  }

  setLocation(newLocation: any): void {
    const updatedLocations = [...this.locations, newLocation];
    this._locations.next(updatedLocations);
    localStorage.setItem('locations', JSON.stringify(updatedLocations));
  }
}
