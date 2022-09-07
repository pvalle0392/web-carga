import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-detalles',
  templateUrl: './card-detalles.component.html',
  styleUrls: ['./card-detalles.component.scss']
})
export class CardDetallesComponent implements OnInit {

  constructor() { }
  @Input() item:any
  ngOnInit(): void {
  }

}
