import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,

} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router,
    private toster: ToastrService,) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isAuthorized = this.authService.UserModel.Role.includes(
      route.data.role
    );
    console.log(isAuthorized);
    console.log(this.authService.UserModel.Role);
    console.log(route.data.role);
    if (!isAuthorized) {
      console.log(route.data.role);
      console.log(isAuthorized);
      this.toster.warning('You Are Not Allow TO This Page', 'warning', {
        timeOut: 2000,
        closeButton: true,
        progressBar: true,
      });
      this.router.navigateByUrl('/'), { queryParams: { returnUrl: state.url } };
    }
    return isAuthorized;
  }
}
