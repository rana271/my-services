import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private _http: HttpClient) { }
  get(): Observable<any> {
    return this._http.get('https://conduit.productionready.io/api/profiles/eric')
    .pipe(map((response: any) => <any>response));
      // .do(data => console.log("All: " + JSON.stringify(data)))
    
  }

}
