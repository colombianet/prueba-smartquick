import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../services/data.service';
import { UserForm } from '../../models/usuario.model';

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

  constructor( private data: DataService ) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
   }

  ngOnInit(): void {
    this.data.getData().subscribe( (resp: any) => {
      this.atleta = resp;
    });
  }

}
