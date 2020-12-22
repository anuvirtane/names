import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getAllObjects(): any {
    const objects = this.http.get('data/names.json');
    console.log("these are the objects" + objects);
    return objects;
  }
}
