import {AfterViewInit, Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-tb-detalle-guia',
  templateUrl: './tb-detalle-guia.component.html',
  styleUrls: ['./tb-detalle-guia.component.scss']
})
export class TbDetalleGuiaComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = [
    "pallet",
    "modulo",
    "cantidad",
    "material",
    "peso",
    "tratamiento",
    "variedad",
    "formato",
    "usuario",
  ];
  @Input() dataSource_sub = new MatTableDataSource<any>();
  @Input() placa:any
  constructor(
    private adminSvc:AdminService
  ){}
  ngOnInit(): void {
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource_sub.paginator = this.paginator;
  }
  expandir(e){
    // this.placa.emit(e.placa)
    this.adminSvc.consultarDetalleXplaca(e.placa).subscribe(res=>{
      this.dataSource_sub.data = res.response.sort((a,b)=>a.placa>b.placa)
    })
  }
}
