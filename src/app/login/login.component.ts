import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthenticationManager } from '../shared/guard/authication-manager';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    @Inject('authManager') private authManager: AuthenticationManager,
    private router: Router) { }

  username: string;
  password: string;
  loading: boolean = false;
  showSpinner: boolean = false;

  ngOnInit() {

  }

  login() : void {
    this.showSpinner = true;
    if(this.username == 'admin' && this.password == 'admin'){
     this.authManager.login(this.username);
     this.router.navigate(["/"]);
    }else {
      alert("Invalid credentials");
    }
  }

}
