import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesPrimeService } from 'src/app/services/Messages/messagesPrime.service';
import { CargaService } from '../../services/carga.service';

@Component({
  selector: 'app-confor-carga',
  templateUrl: './confor-carga.component.html',
  styleUrls: ['./confor-carga.component.scss']
})
export class ConforCargaComponent implements OnInit {

  constructor(
    private router:Router,
    private cargaSvc:CargaService,
    private fb:FormBuilder,
    private messageSvc:MessagesPrimeService
  ) { }
  formCarga=this.fb.group({
    placa:[''],
    placa2:[''],
    licencia:[''],
    lugarp:[''],
    acopio:[''],
    pallet:[''],
    formato:[''],
    tratamiento:[''],
    modulo:[''],
    variedad:[''],
    cantidad:[''],
    peso:[''],
  }) 
  arrayProceso=[]
  arrayModulo=[]
  arrayTratamiento=[]
  arrayVariedad=[]
  arrayFormato=[]
  usuario:any
  nombre:any
  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'))
    this.nombre=this.usuario.codigo
    this.reset()
  }
  foods:any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  details(){
    if(this.formCarga.value.placa == ''){
      return this.messageSvc.message_Primeng('error','Error !!','Ingrese placa para buscar')
    }
    this.router.navigate(['detalle-carga',this.formCarga.value.placa])
  }
  listarProceso(){
    this.cargaSvc.consultarLugar_proceso().subscribe(res=>{
      if(res.response.lenght != 0){
        this.arrayProceso=res.response
        this.formCarga.patchValue({
          lugarp:res.response[0].codigoproceso
        })
      }
    })

  }
  listarTratamiento(){
    this.cargaSvc.consultarTratamiento().subscribe(res=>{
      if(res.response.lenght != 0){
        this.arrayTratamiento=res.response
        this.formCarga.patchValue({
          tratamiento:res.response[0].codigotratamiento
        })
      }
    })

  }
  listarModulo(){
    this.cargaSvc.consultarModulo().subscribe(res=>{
      if(res.response.lenght != 0){
        this.arrayModulo=res.response
        this.formCarga.patchValue({
          modulo:res.response[0].codigomodulo
        })
      }
    })

  }
  listarVariedad(){
    this.cargaSvc.consultarVariedad().subscribe(res=>{
      if(res.response.lenght != 0){
        this.arrayVariedad=res.response
        this.formCarga.patchValue({
          variedad:res.response[0].codigovariedad
        })
      }
    })

  }
  listarFormato(){
    this.cargaSvc.consultarFormato().subscribe(res=>{
      if(res.response.lenght != 0){
        this.arrayFormato=res.response
        this.formCarga.patchValue({
          formato:res.response[0].codigoformato
        })
      }
    })
  }
  async enviar(){
    let result:any = await this.validarDatos()    
    if(result.error){
     return this.messageSvc.message_Primeng('error','Error !!!',result.message)
    }
    let peso:any = await this.buscarPeso(this.formCarga.value.formato)    
    this.formCarga.value.peso = ( peso * (parseFloat(this.formCarga.value.cantidad)))
    let req={
      "placa":this.formCarga.value.placa.toUpperCase(),
      "modelo":"",//interno
      "placa2":this.formCarga.value.placa2,//opcional
      "modelo2":"",//interno
      "usuario":this.usuario.codigo,
      "emptransporte":"",//interno
      "licencia":this.formCarga.value.licencia,//externo
      "chofer":"",//interno
      "lugarp":this.formCarga.value.lugarp,//externo
      "acopio":this.formCarga.value.acopio,//externo
      "pallet":"BO-"+this.formCarga.value.pallet,//BO-
      "formato":this.formCarga.value.formato,
      "peso":peso,
      "tratamiento":this.formCarga.value.tratamiento,
      "modulo":this.formCarga.value.modulo,
      "variedad":this.formCarga.value.variedad,
      "cantidad":parseFloat(this.formCarga.value.cantidad),
      "pesototal":this.formCarga.value.peso,
      }      
    this.cargaSvc.agregarRegistro(req).subscribe(data=>{      
      if(data.status == 'S'){
        this.messageSvc.message_Primeng('success','Exitoso !!','Se creo correctamente')
        this.reset_items();
      }
    })
  }
  errorMs={
    error:false,
    message:''
  }
  validarDatos(){
    this.errorMs.error = false
    this.errorMs.message = ''
    let promise = new Promise<any>((resolve, reject) =>{
      if(this.formCarga.value.placa==''){
        this.errorMs.error = true
        this.errorMs.message ='Ingrese Placa'
      }
      else if(this.formCarga.value.licencia == ''){
        this.errorMs.error = true
        this.errorMs.message ='Ingrese Licencia'
      }
      else if(this.formCarga.value.pallet == ''){
        this.errorMs.error = true
        this.errorMs.message ='Ingrese código pallet'
      }
      else if(this.formCarga.value.cantidad == ''){
        this.errorMs.error = true
        this.errorMs.message ='Ingrese Cantidad'
      }
      resolve(this.errorMs)
    })
    return promise
  }

  buscarPeso(dato){
    let promise = new Promise((resolve, reject) =>{
      this.arrayFormato.filter(forma=>{
        if(forma.codigoformato == dato){
          resolve(forma.peso)
        } 
      })
    })
    return promise
  }
  async Funcantidad(){
    let peso:any = 0
    peso = await this.buscarPeso(this.formCarga.value.formato)
    this.formCarga.patchValue({
      peso:(parseFloat(this.formCarga.value.cantidad=='' ? 0:this.formCarga.value.cantidad) * peso)
    }) 
  }
  reset(){
    this.listarProceso();
    this.listarTratamiento();
    this.listarModulo();
    this.listarVariedad();
    this.listarFormato();
    this.formCarga.patchValue({
      acopio:"1"
    })
  }
  reset_items(){
    // this.listarProceso();
    this.listarTratamiento();
    this.listarModulo();
    this.listarVariedad();
    this.listarFormato();
    this.formCarga.patchValue({
      cantidad:"",
      peso:""
    })
  }
}

