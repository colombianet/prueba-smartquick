import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserForm } from '../../models/usuario.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  public user: UserForm[];

  constructor( private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe( (params: UserForm[]) => {
      this.user = params;
    });
  }

  ngOnInit(): void {
  }

}
