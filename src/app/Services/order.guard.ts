import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserOrNOComponent } from '../Components/user-or-no/user-or-no.component';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router,
    public dialog: MatDialog,
    ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isAuthorized = this.authService.token
    console.log(isAuthorized);
    if (isAuthorized == null) {
      console.log(route.data.role);
      console.log(isAuthorized);

      const dialogRef = this.dialog.open(UserOrNOComponent, {
      width: '500px',
        disableClose: true,
        // margin: '0 auto'
        // disableClose: true,
        // hasBackdrop: true,
      });

      dialogRef.afterClosed().subscribe((result) => {

        // console.log(`Dialog result: ${result}`);
      });

      return false;
      // this.router.navigateByUrl('/UserLog')
    }
    return true;
  }
}
