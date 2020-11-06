import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: [
  ]
})
export class CategoriesComponent implements OnInit {

  public medallasOro = 0;
  public medallasPlata = 0;
  public medallasBronce = 0;
  public loading = false;

  constructor( private data: DataService ) { }

  ngOnInit(): void {
    this.data.getData().subscribe( (data: any) => {
      this.loading = true;
      data.forEach(item => {
        this.medallasOro += item.gold;
        this.medallasPlata += item.silver;
        this.medallasBronce += item.bronze;
      });
      this.loading = false;
    });
  }

  mostrarModal( categoria: string ): void {
    Swal.fire({
      title: `Descripción categoría ${ categoria }`,
      text: 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }

}
