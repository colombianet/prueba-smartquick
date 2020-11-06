import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { UserForm } from '../models/usuario.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public listado: UserForm[];

  constructor( private http: HttpClient ) { }

  getData(): Observable<UserForm[]> {
    return this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json')
      .pipe(map( (resp: UserForm[]) => {
        return this.listado = resp;
      }));
  }
}
