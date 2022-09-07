import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';
import { MessagesPrimeService } from 'src/app/services/Messages/messagesPrime.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tb-guias',
  templateUrl: './tb-guias.component.html',
  styleUrls: ['./tb-guias.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  providers:[DatePipe]
})
export class TbGuiasComponent implements OnInit {
  @Input() dataSource = new MatTableDataSource<any>();
  dataSource_sub = new MatTableDataSource<any>();
  columnsToDisplay = ['placa','peso'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: any | null;
  constructor(
    private adminSvc:AdminService,
    private messageSvc:MessagesPrimeService,
    private datepipe:DatePipe
  ) { }

  ngOnInit(): void {
    // this.dataSource_sub

  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
  placa:any;
  resumen=[]
  expandir(e){
    this.placa = e.placa
    this.adminSvc.consultarDetalleXplaca(e.placa).subscribe(res=>{
      console.log(res.response);

      if(res.response =='No se encontró registros'){

      }else{

        this.dataSource_sub.data = res.response
        let arrayTem =[]
        for (let i = 0; i <res.response.length; i++) {

          if(
            arrayTem.filter(ex=>
              ex.tratamiento == res.response[i].tratamiento &&
              ex.modulo == res.response[i].modulo &&
              ex.variedad == res.response[i].variedad).length == 0
              // console.log("===>",arrayT)
          ){
            arrayTem.push(res.response[i])
          }else{
          }

        }
        this.resumen = res.response
      }
    })
  }
  presinto:any =""
  generar(element){
    if(this.presinto == ""){
      this.messageSvc.message_Primeng('error','Error !!','Presinto es requerido')
    }else{
      this.adminSvc.generarGuia(element._id, this.presinto).subscribe(res=>{
        if(res.type =='S'){
          this.messageSvc.message_Primeng('success','Exitoso !!',res.message)
          this.listarRegistro()
        }
      })
    }
  }
  fecha=new Date();
  listarRegistro(){
    this.dataSource.data=[]
    let fecha= this.datepipe.transform(this.fecha,'YYYY-MM-dd')
    this.adminSvc.consultarRegistro(fecha).subscribe(data=>{
      console.log(data.response)
      if(data.response.length>0){
        data.response.forEach(element => {
          element.placa=element._id
        });
        this.dataSource.data = data.response
      }
    })
  }

}

