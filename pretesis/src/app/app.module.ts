import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/users/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ListarComidasComponent } from './pages/comida/listar-comidas/listar-comidas.component';
import { AgregarComidaComponent } from './pages/comida/agregar-comida/agregar-comida.component';
import { EditarComidaComponent } from './pages/comida/editar-comida/editar-comida.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ListarComidasComponent,
    AgregarComidaComponent,
    EditarComidaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
