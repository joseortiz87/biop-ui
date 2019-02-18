import { Component, OnInit,Inject } from '@angular/core';
import { AuthenticationManager } from '../shared/guard/authication-manager';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  isAuthenticated = false;  

  constructor(@Inject('authManager') private authManager: AuthenticationManager) {
    this.isAuthenticated = this.authManager.isUserAuth();
  }

  ngOnInit() {
    if (this.isAuthenticated) {
      console.log("Login out...");
      this.authManager.logout();  
    }
  }
}
