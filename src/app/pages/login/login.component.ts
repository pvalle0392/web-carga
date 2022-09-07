import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CargaService} from 'src/app/services/carga.service'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private cargaSvc:CargaService
  ) { }
  hide = true;
  ngOnInit(): void {
  }
  signIn(){
    this.cargaSvc.consultarUsuario('PVALLE').subscribe(data=>{
      localStorage.setItem('usuario',JSON.stringify(data.response[0]))
      this.router.navigate(['/carga']);
    })
  } 
}
