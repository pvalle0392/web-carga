import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConforCargaComponent } from './pages/confor-carga/confor-carga.component';
import { LoginComponent } from './pages/login/login.component';
import { DetalleCargaComponent } from './pages/detalle-carga/detalle-carga.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent,canActivate:[] },
  { path: '**', component: LoginComponent,canActivate:[] },
  { path: '', component: LoginComponent,canActivate:[] },
  { path: 'carga', component: ConforCargaComponent,canActivate:[] },
  { path: 'detalle-carga', component: DetalleCargaComponent,canActivate:[] },
  { path: 'detalle-carga/:placa', component: DetalleCargaComponent,canActivate:[] },
  { path: 'admin', component: AdminComponent,canActivate:[] },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
