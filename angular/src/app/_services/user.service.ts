import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { GlobalService } from '../global-service.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private globalService:GlobalService) { }

  public getPublicContent(): Observable<any> {
    return this.http.get("http://localhost:8080/api/test/" + 'all', { responseType: 'text' });
  }

  public onGetAllPangolains(){
    return this.http.get(this.globalService.getUrlBasePangoalin());
  }

  public onGetPangolainById(p:any){
    return this.http.get(this.globalService.getUrlBasePangoalin()+"read/"+p);
  }

  public onGetPangolainById_(p:any){
    return this.http.get(this.globalService.getUrlBasePangoalin()+"read/"+p);
  }

  public onCreatePangolain(p:any){
    return this.http.post(this.globalService.getUrlBasePangoalin()+"create", p);
  }

  public onUpdatePangolain(p:any){
    return this.http.put(this.globalService.getUrlBasePangoalin()+"update/"+p.id, p);
  }

  public onUpdatePangolain_(p:any){
    return this.http.put(this.globalService.getUrlBasePangoalin()+"update/"+p._id, p);
  }

  public onRemovePangolain(p: any){
    return this.http.delete(this.globalService.getUrlBasePangoalin()+"delete/"+p._id);
  }



  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
