import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Comida } from 'src/app/models/comida';
import { ComidaService } from 'src/app/services/comida.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-comida',
  templateUrl: './agregar-comida.component.html',
  styleUrls: ['./agregar-comida.component.css']
})
export class AgregarComidaComponent {

  comidaForm: FormGroup;
  file!: File;

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  constructor(private fb: FormBuilder,
      private router: Router,
      private _comidaService: ComidaService){
    this.comidaForm = this.fb.group({
      nombre:  ['', Validators.required],
      categoria: ['', Validators.required],
      imagen:['', Validators.required]
    })
  }

  

  agregarProducto(){

    const COMIDA: Comida = {
      nombre: this.comidaForm.get('nombre')?.value,
      categoria: this.comidaForm.get('categoria')?.value,
      file: this.file,
    }

    console.log(COMIDA)

    Swal.fire({
      title: 'Creacion de Producto',
      text: "¿Desea crear el producto?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        
        this._comidaService.guardarComida(
          this.comidaForm.get('nombre')?.value,
          this.comidaForm.get('categoria')?.value,
          this.file,
        ).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/lista-comidas'])
        }) 
      }
    })

    
  }

}
