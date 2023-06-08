import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comida } from '../models/comida';

@Injectable({
    providedIn: 'root'
  })

export class ComidaService {

    url = "http://localhost:4000/api/comidas/";


    constructor(private http: HttpClient) { 

    }

    getComidas(): Observable<any> {
        return this.http.get(this.url);
    }

    guardarComida(nombre:string, categoria:string, file:File): Observable<any> {
      const fd = new FormData();
      fd.append('nombre',nombre)
      fd.append('categoria',categoria)
      fd.append('imagen',file)
      return this.http.post(this.url,fd);
    }

    deleteProducto(id: string): Observable<any> {
      return this.http.delete(this.url + id);
    }

    viewComida(id?: string): Observable<any> {
      return this.http.get(this.url + id)
    }

    actualizarComida(id: string, comida: Comida): Observable<any> {
      return this.http.put(this.url + id, comida);
    }
}