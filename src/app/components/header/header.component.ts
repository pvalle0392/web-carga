import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }
  usuario:any
  nombre :any
  mostrar:any
  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'))
    this.nombre = this.usuario.codigo
    if(this.router.url.includes('/detalle-carga')){
      this.mostrar = true
    }else{
      this.mostrar = false
    }
  }
  cancelar(){
    this.router.navigate(['/carga'])
  }
  admin(){
    this.router.navigate(['/admin'])
  }
}
