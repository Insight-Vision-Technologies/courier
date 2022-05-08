import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ITimeTable } from 'src/app/Models/itime-table';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-time-table-company',
  templateUrl: './time-table-company.component.html',
  styleUrls: ['./time-table-company.component.css'],
})
export class TimeTableCompanyComponent implements OnInit {
  timeTable: ITimeTable[] = [];
  timeTableList: ITimeTable []=[]
  constructor(private CompanyService: CompanyService,
    private toster: ToastrService,
    ) {}

  ngOnInit(): void {
    this.getInfo()
  }

  onSubmit(form: NgForm) {
    console.log(form.value);

    // this.timeTable[0].day = 'Monday';
    // this.timeTable[0].start = parseInt(form.value.monbeg);
    // this.timeTable[0].end = parseInt(form.value.monend);

    // this.timeTable[1].day = 'Tuesday';
    // this.timeTable[1].start = parseInt(form.value.tuebeg);
    // this.timeTable[1].end = parseInt(form.value.tueend);

    // this.timeTable[2].day = 'Wednesday';
    // this.timeTable[2].start = parseInt(form.value.wenbeg);
    // this.timeTable[2].end = parseInt(form.value.wenend);

    // this.timeTable[3].day = 'Thursday';
    // this.timeTable[3].start = parseInt(form.value.thurebeg);
    // this.timeTable[3].end = parseInt(form.value.thurend);

    // this.timeTable[4].day = 'Friday';
    // this.timeTable[4].start = parseInt(form.value.fribeg);
    // this.timeTable[4].end = parseInt(form.value.friend);

    // this.timeTable[5].day = 'Saturday';
    // this.timeTable[5].start = parseInt(form.value.sarbeg);
    // this.timeTable[5].end = parseInt(form.value.sarend);

    // this.timeTable[6].day = 'Sunday';
    // this.timeTable[6].start = parseInt(form.value.sunbeg);
    // this.timeTable[6].end = parseInt(form.value.sunend);

    console.log(this.timeTable);

    this.CompanyService.UpdateTimeCompany(this.timeTableList).subscribe(
      (response) => {
        this.toster.success('Item Updated successfully', 'succes', {
          timeOut: 2000,
          closeButton: true,
          progressBar: true,
        });
        this.getInfo()
      }
    );
  }

  getInfo() {
    this.CompanyService.GetTimeCompany().subscribe((response) => {


      if(response.returnObject.length>0){

        console.log(response.returnObject)
        this.timeTableList=response.returnObject
        console.log(this.timeTableList)

      }


    });
  }

  onCheckboxChange(e: any,xx:ITimeTable) {
    // console.log(e);
    // console.log(e.target);
    console.log('xxx',xx);
    var objIndex = this.timeTableList.findIndex((obj => obj.companyTimeTableID == xx.companyTimeTableID));
    this.timeTableList[objIndex].day =xx.day
    this.timeTableList[objIndex].start =xx.start
    this.timeTableList[objIndex].end =xx.end

    console.log(this.timeTableList)

    if (e.target.checked) {
    this.timeTableList[objIndex].isActive =true
    
    }
    else{
    this.timeTableList[objIndex].isActive =false
    }
    // if (e.target.checked) {
    //   console.log('checked');
    // } else {
    //   console.log('notchecked');
    // }
  }
}
