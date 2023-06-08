import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/users/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ListarComidasComponent } from './pages/comida/listar-comidas/listar-comidas.component';
import { AgregarComidaComponent } from './pages/comida/agregar-comida/agregar-comida.component';
import { EditarComidaComponent } from './pages/comida/editar-comida/editar-comida.component';

const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'lista-comidas', component:ListarComidasComponent},
  { path: 'editar-comida/:id', component:EditarComidaComponent},
  { path:'agregar-comida', component:AgregarComidaComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
