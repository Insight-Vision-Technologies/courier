import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MrslGuard implements CanActivate {

  constructor(private authService: MsalService,private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this.authService.instance.getActiveAccount() == null) {
        console.log('not logged in!')
        this.authService.loginPopup()
        .subscribe((response: AuthenticationResult) => {
          this.authService.instance.setActiveAccount(response.account);
        });

        return false;
      }
  
      return true;
    }
  
  }