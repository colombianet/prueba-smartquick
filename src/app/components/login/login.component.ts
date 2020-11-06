import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { UserForm } from '../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  public formSubmitted = false;
  public year: number;
  public data = [
    {
        role: 'Administrador',
        id: '1',
        user: 'Jhon Due',
        email: 'admin@smartquick.com',
        pass: '12345'
    },
    {
      role: 'Coordinador',
      id: '2',
      user: 'Santiago Vergara',
      email: 'coordinacion@smartquick.com',
      pass: '12345'
    }
  ];
  public logged = false;
  public userLogged: any;

  public loginForm = this.fb.group({
    email: ['',  [ Validators.required, Validators.email ] ],
    pass: ['', Validators.required ]
  });

  constructor( private fb: FormBuilder, private router: Router ) {
    this.year = new Date().getFullYear();
   }

  ngOnInit(): void {
  }

  login(): void {

    this.formSubmitted = true;

    if ( this.loginForm.invalid ) {
      return;
    }


    this.data.forEach( user => {
      if ( user.email === this.loginForm.value.email && user.pass === this.loginForm.value.pass ) {
        this.logged = true;
        this.userLogged = user;
      }
    });

    if ( this.logged ) {
      if ( this.userLogged.role === 'Coordinador' ) {
        this.router.navigate(['/dashboardCoord', this.userLogged.user, this.userLogged.role]);
      } else {
        this.router.navigate(['/dashboardAdmin', this.userLogged.user, this.userLogged.role]);
      }
    } else {
      Swal.fire('Error', 'Password o usuario inválido', 'error');
    }

  }

  validarCampo( campo: string ): boolean {

    if ( this.loginForm.get( campo ).invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }

  }

}
