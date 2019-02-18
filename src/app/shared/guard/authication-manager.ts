import { Injectable } from '@angular/core'; 

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
    