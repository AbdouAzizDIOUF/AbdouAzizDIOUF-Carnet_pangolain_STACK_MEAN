import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private urlbase = "http://localhost:8090/api/";
  public headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor() { }

  public getUrlBasePangoalin()
  {
    return this.urlbase;
  }


}
