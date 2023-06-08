import { Component, OnInit } from '@angular/core';
import { Comida } from 'src/app/models/comida';
import { ComidaService } from 'src/app/services/comida.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-comidas',
  templateUrl: './listar-comidas.component.html',
  styleUrls: ['./listar-comidas.component.css']
})
export class ListarComidasComponent implements OnInit{

  listComidas: Comida[] = [];
  elementos: number = 0;
  

  constructor(private _comidaService: ComidaService) {

  }

  ngOnInit(): void {
    
    this.obtenerComidas();

  }

  obtenerComidas(){
    this._comidaService.getComidas().subscribe(data => {
      console.log(data);
      this.listComidas = data;
      this.elementos = this.listComidas.length;
    })
  }

  eliminarComida(idComida: any){

      Swal.fire({
        title: 'Eliminacion de Producto',
        text: "¿Desea eliminar el producto?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this._comidaService.deleteProducto(idComida).subscribe(data => {
          
          this.obtenerComidas();
          this.elementos = this.listComidas.length;
          Swal.fire(
            'Se eliminó de manera correcta',
            '',
            'success'
          )
          })
        }
      })
    
  }
  

}
