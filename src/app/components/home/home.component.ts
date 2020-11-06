import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public atleta: any[] = [];
  public loading = true;

  @Input() user: { nombre: string, role: string };

  constructor( private data: DataService ) { }

  ngOnInit(): void {
    if ( this.data.listado !== undefined || this.data.listado !== null ) {
      this.atleta = this.data.listado;
    } else {
      this.data.getData().subscribe( (resp: any) => {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 3000);
        this.atleta = resp;
        this.data.listado = resp;
      });
    }
  }

}
