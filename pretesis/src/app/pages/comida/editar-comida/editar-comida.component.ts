import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comida } from 'src/app/models/comida';
import { ComidaService } from 'src/app/services/comida.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-comida',
  templateUrl: './editar-comida.component.html',
  styleUrls: ['./editar-comida.component.css']
})
export class EditarComidaComponent implements OnInit {
    
  comidaForm: FormGroup;
  id: string | null; 

  constructor(private fb: FormBuilder,
      private aRouter: ActivatedRoute,
      private router: Router,
      private _comidaService: ComidaService){
    this.comidaForm = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
})
this.id = aRouter.snapshot.paramMap.get('id');
}
  ngOnInit(): void {
    
      this.validarId()

  }

validarId(){

  if(this.id !== null){
    this._comidaService.viewComida(this.id).subscribe(data => {
      this.comidaForm.setValue({
        nombre: data.nombre,
        categoria: data.categoria
      })
    })
  }

}

editarProducto(){
  
  const COMIDA: Comida = {
    nombre: this.comidaForm.get('nombre')?.value,
    categoria: this.comidaForm.get('categoria')?.value,
    file: this.comidaForm.get('imagen')?.value,

  }

  Swal.fire({
        title: 'Actualizacion de Producto',
        text: "¿Desea actualizar el producto?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          if(this.id !== null){
            this._comidaService.actualizarComida(this.id, COMIDA).subscribe(data => {
                console.log(COMIDA);
                this.router.navigate(['/lista-comidas']) 
            })
          }
        }
      })
  
         
}
}
