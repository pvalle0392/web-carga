import {AfterViewInit, Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-tb-guias-generadas',
  templateUrl: './tb-guias-generadas.component.html',
  styleUrls: ['./tb-guias-generadas.component.scss']
})
export class TbGuiasGeneradasComponent implements OnInit {

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
  @Input() dataSource = new MatTableDataSource<any>();
  constructor(
  ){}
  ngOnInit(): void {
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
