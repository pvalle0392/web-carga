import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers:[DatePipe]
})
export class AdminComponent implements OnInit {

  constructor(
    private adminSvc:AdminService,
    private datepipe:DatePipe
  ) { }
  dataSource = new MatTableDataSource<any>();
  dataSource2 = new MatTableDataSource<any>();
  dataSource_sub = new MatTableDataSource<any>();
  ngOnInit(): void {
    this.listarRegistro()
    this.listarGuias()
  }
  json=[
    {id:1,nr_pallet:1111}
  ]
  fecha=new Date();
  listarRegistro(){
    this.dataSource.data=[]
    let fecha= this.datepipe.transform(this.fecha,'YYYY-MM-dd')
    this.adminSvc.consultarRegistro(fecha).subscribe(data=>{
      if(data.response=="No se encontró registros"){

      }else{
        if(data.response.length>0){
          data.response.forEach(element => {
            element.placa=element._id
          });
          this.dataSource.data = data.response
        }
      }
    })
  }
  fecha2=new Date();
  listarGuias(){
    this.dataSource2.data=[]
    let fecha2= this.datepipe.transform(this.fecha2,'YYYY-MM-dd')
    this.adminSvc.consultarGuias(fecha2).subscribe(data=>{
      if(data.respose=='No se encontró registros'){

      }else{
        if(data.response.length>0){
          data.response.forEach(element => {
            element.placa=element._id
          })
          this.dataSource2.data = data.response
        }
      }
    })
  }
}
