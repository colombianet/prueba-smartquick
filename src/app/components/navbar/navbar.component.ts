import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserForm } from '../../models/usuario.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  @Input() user: { nombre: string, role: string };

  constructor( private router: ActivatedRoute ) {
    this.router.parent.params.subscribe( (params: { nombre: string, role: string }) => {
      this.user = params;
    });
   }

  ngOnInit(): void {
  }

}
