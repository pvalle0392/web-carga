import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesPrimeService } from 'src/app/services/Messages/messagesPrime.service';
import { CargaService } from '../../services/carga.service';

@Component({
  selector: 'app-detalle-carga',
  templateUrl: './detalle-carga.component.html',
  styleUrls: ['./detalle-carga.component.scss']
})
export class DetalleCargaComponent implements OnInit {

  constructor(
    private cargaSvc:CargaService,
    private router:Router,
    private active:ActivatedRoute,
    private messageSvc:MessagesPrimeService
  ) { }
  placa=""
  usuario:any
  async ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'))
    let result:any = await this.listado()
    this.active.params.subscribe(params => {
      
      this.placa = params.placa
      
      this.listarCarga(this.usuario.codigo,this.placa);
    })
  }


  detalles=[]

  async listado(){
    let promise = new Promise((resolve,reject)=>{
      resolve("Hola Mundo")
    })
    return promise
  }
  listarCarga(usuario, placa){
    this.cargaSvc.consultarRegistro(usuario,placa.toUpperCase()).subscribe(res=>{
      
      if(res.status == "W"){
        this.messageSvc.message_Primeng('error','Error !!',res.response)
      }else{
        this.detalles=res.response
      }
    })
  }
  guardar(){
    let req={
      id:'sss',
      carga:'1'
    }
    this.cargaSvc.agregarRegistro(req).subscribe(res=>{
      if(!res.error){
        
        // this.listarCarga()
      }else{
        alert("Error")
      }
    })
  }
  cancelar(){
    this.router.navigate(['carga']);
  }
}
