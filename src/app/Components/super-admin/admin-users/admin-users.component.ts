import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IUserInfo } from 'src/app/Models/iuser-info';
import { AdminService } from 'src/app/Services/admin.service';
import { AdminuserorderinfoComponent } from '../adminuserorderinfo/adminuserorderinfo.component';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css'],
})
export class AdminUsersComponent implements OnInit {
  userList: IUserInfo[] = [];
  constructor(public dialog: MatDialog, private AdminService: AdminService,
    private toster: ToastrService,
    ) {}

  ngOnInit(): void {
    this.getInfo();
  }

  Viewdetaill(userID: string) {
    console.log(userID);
    const dialogRef = this.dialog.open(AdminuserorderinfoComponent, {
      width: '1000px',
      disableClose: true,
      data: {
        iddd: userID,
      },
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      console.log('gggggg');
    });
  }

  getInfo() {
    this.AdminService.GetUsersInfo().subscribe(
      (response) => {
        if (response.returnObject.length != 0) {
          console.log(response.returnObject);

          this.userList = response.returnObject;
        } else {
          console.log('no data');
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deactive(id: string) {
    console.log(id);
    this.AdminService.DeactiveUser(id).subscribe(
      (response) => {
        
          this.toster.success('User Deactive successfully', 'succes', {
            timeOut: 2000,
            closeButton: true,
            progressBar: true,
          });
          this.getInfo()
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
