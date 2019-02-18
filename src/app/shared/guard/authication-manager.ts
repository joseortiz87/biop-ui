import { Injectable } from '@angular/core'; 
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Adal4Service } from 'adal-angular4';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationManager {  
    
    constructor() { }
 
    login (username){
        localStorage.setItem("username",username);
    }

    logout(){
        localStorage.clear();
    }

    getUser() : string{
        return localStorage.getItem("username");
    }

    isUserAuth() : boolean{
        const user = localStorage.getItem("username");
        return user && user.length>0 ? true : false;
    }

}  
    