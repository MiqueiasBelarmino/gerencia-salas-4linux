import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  apiUrl = 'http://localhost/salas-api-4linux/public/api/agendamentos';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  /**
   * postSala
   */
  public postAgendamento(agendamento: any): Observable<any> {
    let data = {
      sala_id:  agendamento.sala_id,
      data_inicio: agendamento.data_inicio.format('YYYY-MM-DD HH:mm'),
      data_termino: agendamento.data_inicio.format('YYYY-MM-DD HH:mm')
    }
    return this.httpClient.post<any>(this.apiUrl,data,this.httpOptions);
  }

}
