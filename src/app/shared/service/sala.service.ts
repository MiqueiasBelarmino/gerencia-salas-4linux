import { Sala } from './../model/sala.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

import { ResponsePageable } from './../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  apiUrl = 'http://localhost/salas-api-4linux/public/api/salas';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getSalas(flag: string): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.apiUrl+''+(flag=='disponivel'?'?disponivel=1':''),this.httpOptions);
  }

  /**
   * postSala
   */
  public postSala(sala: Sala): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl,sala,this.httpOptions);
  }

}
