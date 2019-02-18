import { Injectable } from '@angular/core'; 
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationManager } from './authication-manager';

@Injectable()
export class AuthenticationGuard implements CanActivate, CanActivateChild {  
    
    constructor(
        private router: Router, 
        private authManager: AuthenticationManager) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {  
        if (this.authManager.isUserAuth()) {  
            return true;  
        } else {  
            this.router.navigate(['/login'], {  
                queryParams: {  
                    returnUrl: state.url  
                } 
            });  
            return false;
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {  
        return this.canActivate(childRoute, state);  
    }  
}  
    