import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

constructor(
  private http:HttpClient
) { }
  urlCarga=environment.urlWebCarga_admin
  consultarRegistro(fecha):Observable<any>{
    return this.http.get(this.urlCarga+environment.webCarga.listarregistro2+'/'+fecha)
  }
  consultarGuias(fecha):Observable<any>{
    return this.http.get(this.urlCarga+environment.webCarga.listarguias+'/'+fecha)
  }
  consultarDetalleGuias(fecha):Observable<any>{
    return this.http.get(this.urlCarga+environment.webCarga.listarregistroguia+'/'+fecha)
  }
  consultarDetalleXplaca(placa):Observable<any>{
    return this.http.get(this.urlCarga+environment.webCarga.listarregistroplaca+'/'+placa)
  }
  generarGuia(placa,presinto):Observable<any>{
    return this.http.get(this.urlCarga+environment.webCarga.generarguia+'/'+placa+"/"+presinto)
  }
}
