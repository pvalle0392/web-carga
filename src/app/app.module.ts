import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialExampleModule } from './material.module';
import { LoginComponent } from './pages/login/login.component';
import { ConforCargaComponent } from './pages/confor-carga/confor-carga.component';
import { DetalleCargaComponent } from './pages/detalle-carga/detalle-carga.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CardDetallesComponent } from './components/card-detalles/card-detalles.component';
import {ToastModule} from 'primeng/toast';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { HeaderComponent } from './components/header/header.component';
import { TbGuiasComponent } from './components/tablas/tb-guias/tb-guias.component';
import { TbDetalleGuiaComponent } from './components/tablas/tb-detalle-guia/tb-detalle-guia.component';
import { TbGuiasGeneradasComponent } from './components/tablas/tb-guias-generadas/tb-guias-generadas.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConforCargaComponent,
    DetalleCargaComponent,
    AdminComponent,
    CardDetallesComponent,
    HeaderComponent,
    TbGuiasComponent,
    TbDetalleGuiaComponent,
    TbGuiasGeneradasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialExampleModule,
    BrowserAnimationsModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
