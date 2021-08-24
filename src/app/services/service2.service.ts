import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Service2Service {

  API_URL = 'https://still-scrubland-02880.herokuapp.com'
  // API_URL = 'http://localhost:8080'

  constructor(
    public http: HttpClient
  ) {
  }

  register(data: any): Observable<any> {
    return this.http.post(
      `${this.API_URL}/register`,
      data
    )
  }

  login(data: any): Observable<any> {
    return this.http.post(
      `${this.API_URL}/login`,
      data
    )
  }

}
