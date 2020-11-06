import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  public user: { nombre: string, role: string };

  constructor( private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe( (params: { nombre: string, role: string }) => {
      console.log(params);
      this.user = params;
    });
  }

  ngOnInit(): void {
  }

}
