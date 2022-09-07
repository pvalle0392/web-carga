import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargaService {

  constructor(
    private http:HttpClient

  ) { }
  urlCarga=environment.urlWebCarga
  consultarFormato():Observable<any>{
    return this.http.get(this.urlCarga+environment.webCarga.consultar_formato)
  }
  consultarAcopio():Observable<any>{
    return this.http.get(this.urlCarga+environment.webCarga.consultar_acopio)
  }
  agregarRegistro(json:any):Observable<any>{
    return this.http.post(this.urlCarga+environment.webCarga.agregar_registro,json)
  }
  consultarUsuario(usuario):Observable<any>{
    return this.http.get(this.urlCarga+environment.webCarga.consultar_usuario+'/'+usuario)
  }
  consultarLugar_proceso():Observable<any>{
    return this.http.get(this.urlCarga+environment.webCarga.consultar_lugar_proceso)
  }
  consultarTratamiento():Observable<any>{
    return this.http.get(this.urlCarga+environment.webCarga.consultar_tratamiento)
  }
  consultarVariedad():Observable<any>{
    return this.http.get(this.urlCarga+environment.webCarga.consultar_variedad)
  }
  consultarModulo():Observable<any>{
    return this.http.get(this.urlCarga+environment.webCarga.consultar_modulo)
  }

  consultarRegistro( usuario: any, placa: any):Observable<any>{
    return this.http.get(this.urlCarga+environment.webCarga.consultar_registro + '/' + usuario + '/' + placa)
  }

}
