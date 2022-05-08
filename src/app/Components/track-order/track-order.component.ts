import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { UserService } from 'src/app/Services/user.service';
import { IorderUser, ISizeDimention } from 'src/app/Models/iorder-user';
import { AuthService } from 'src/app/Services/auth.service';
import { ICompOverInfo } from 'src/app/Models/icomp-over';
import { Router } from '@angular/router';
import { ITypeAll } from 'src/app/Models/itype-order';
import { OrderService } from 'src/app/Services/order.service';
import { IGuestOrder } from 'src/app/Models/iguest';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { IAddress } from 'src/app/Models/iaddress';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css'],
})
export class TrackOrderComponent implements OnInit {
  codec = new HttpUrlEncodingCodec();
  logged: boolean = false;
  compID: number = 0;
  compOrNot: boolean = false;
  btnpayment: boolean = false;
  bgColor: string = '#ec4155';
  public showWebcam = false;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string = '';
  status: any = 0;
  paymentStatus: any = 0;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null as any;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<
    boolean | string
  >();
  formData: FormData = new FormData();
  orderDetail: IorderUser = {
    orderId: 0,
    senderName: '',
    orderNumber: '',
    reciverName: '',
    reciverPhone: '',
    reciverEmail: '',
    reciverAddress: '',
    reciverCity: '',
    orderCost: 0,
    description: '',
    time: '',
    type: '',
    from: '',
    to: '',
    amount: 0,
    width: 0,
    height: 0,
    length: 0,
    status: 0,
    paymentStatus: 0,
    paymentBy: '',
    userID: '',
    createdOn: new Date(),
    priceCost: 0,
    companyName: '',
    userName: '',
    user: {
      email: '',
      addressDetails: '',
      name: '',
      phone: '',
      city: '',
      country: '',
    },
  };
  addressUser: IAddress[] = [];

  dimntionOrder: ISizeDimention = {
    width: 0,
    height: 0,
    length: 0,
  };
  GuestOrder: IGuestOrder = {
    name: '',
    email: '',
    addressDetails: '',
    phone: '',
    city: '',
    country: '',
    orderId: 0,
    senderName: '',
    orderNumber: '',
    reciverName: '',
    reciverPhone: '',
    reciverEmail: '',
    reciverAddress: '',
    reciverCity: '',
    time: '',
    type: '',
    from: '',
    to: '',
    amount: 0,
    status: 0,
    paymentStatus: 0,
    paymentBy: '',
    createdOn: new Date(),
    orderCost: 0,
    companyName: '',
    userName: '',
    guestID: 0,
  };
  imageName: string = 'create_order_img.jpg';
  imageFormat: string = 'image/jpeg';
  constructor(
    private UserService: UserService,
    private authService: AuthService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.logged = this.router.getCurrentNavigation()?.extras.state?.key;

    var compIDD = localStorage.getItem('compId');

    if (compIDD) this.compID = parseInt(compIDD);

    console.log(this.compID)

    // if(this.compID!=0){
    //   console.log('is company')
    // }

    // else{
    //   console.log('not comapny')
    // }
  }

  ngOnInit(): void {
    this.getType();
    ///// true == guset , flase==user
    if (localStorage.getItem('logg')) this.logged = true;
    if(!this.logged){
      if(this.compID!=0){
      this.logged=true
    }

    else{
      console.log('not comapny')
    }
    }

    if (this.compID == 0) {
      WebcamUtil.getAvailableVideoInputs().then(
        (mediaDevices: MediaDeviceInfo[]) => {
          this.multipleWebcamsAvailable =
            mediaDevices && mediaDevices.length > 1;
        }
      );

      this.checkOrder();
    }
  }
  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    const arr = this.webcamImage.imageAsDataUrl.split(',');
    //const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const file: File = new File([u8arr], this.imageName, {
      type: this.imageFormat,
    });
    console.log(file);
    this.formData.append('File', file, file.name);
    //this.formData.append("File",this.webcamImage);
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }
  onItemChange(valu: Event) {
    const filterValue = (valu.target as HTMLInputElement).value;
    console.log(' Value is : ', filterValue);

    if (filterValue == 'Sender') this.btnpayment = true;
    else this.btnpayment = false;
  }

  ss: ICompOverInfo = {
    from: 'string;',
    to: 'string;',
    orderId: '',
    deliveryTime: 'string;',
    type: '',
    size: 0,
    width: 0,
    height: 0,
    length: 0,
    orderCost: 0,
  };

  async onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(form.value.paymentBy);

    // var to = localStorage.getItem('to');

    // console.log(this.orderDetail);
    console.log(this.logged);
    if (!this.logged) {
      console.log('user');
      // if(this.compID==0){
      var from = localStorage.getItem('from');

      if (from) this.orderDetail.from = from;
      this.formData.append('from', from!);
      this.formData.append('amount', form.value.amount);
      this.formData.append('reciverAddress', form.value.reciverAddress);
      this.formData.append('senderName', form.value.senderName);
      this.formData.append('reciverEmail', form.value.reciverEmail);
      this.formData.append('reciverPhone', form.value.reciverPhone);
      this.formData.append('reciverName', form.value.reciverName);
      this.formData.append('time', form.value.time);
      this.formData.append('to', form.value.to);
      // this.formData.append("createdOn", '');
      this.formData.append('reciverCity', form.value.reciverCity);
      this.formData.append('type', form.value.type);

      this.formData.append('status', this.status);
      this.formData.append('paymentBy', form.value.paymentBy);
      this.formData.append('addressID', form.value.addressID);
      var width = this.dimntionOrder.width.toString();
      var height = this.dimntionOrder.height.toString();
      var length = this.dimntionOrder.length.toString();
      var orderCost = this.orderDetail.orderCost.toString();
      this.formData.append('paymentStatus', this.paymentStatus);
      this.formData.append('userID', this.authService.UserModel.UserId);
      this.formData.append('width', width);
      this.formData.append('height', height);
      this.formData.append('length', length);
      this.formData.append('description', this.orderDetail.description);
      this.formData.append('orderCost', orderCost);
      this.formData.append('totalCost', '0');
      this.formData.append('orderId', '0');
      this.formData.append('orderNumber', '0');
      this.formData.append('CompanyName', '');
      this.formData.append('UserID', '');
      this.formData.append('UserName', '');

      this.orderDetail.amount = form.value.amount;
      this.orderDetail.reciverAddress = form.value.reciverAddress;
      this.orderDetail.senderName = form.value.senderName;
      this.orderDetail.reciverEmail = form.value.reciverEmail;
      this.orderDetail.reciverPhone = form.value.reciverPhone;
      this.orderDetail.reciverName = form.value.reciverName;
      this.orderDetail.time = form.value.time;
      this.orderDetail.to = form.value.reciverCity;
      this.orderDetail.reciverCity = form.value.reciverCity;
      this.orderDetail.type = form.value.type;
      this.orderDetail.status = form.value.status;
      this.orderDetail.paymentBy = form.value.paymentBy;
      this.orderDetail.width = this.dimntionOrder.width;
      this.orderDetail.height = this.dimntionOrder.height;
      this.orderDetail.length = this.dimntionOrder.length;

      this.orderDetail.paymentStatus = form.value.paymentStatus;
      this.orderDetail.userID = this.authService.UserModel.UserId;
      console.log('before Create');

      await this.orderService.addOrder(this.formData).subscribe(
        (response) => {
          console.log('response');
          console.log(response.orderNumber);

          // localStorage.removeItem('from');
          // localStorage.removeItem('to');
          // localStorage.removeItem('deliveryTime');
          // localStorage.removeItem('type');
          // localStorage.removeItem('amount');
          // localStorage.removeItem('width');
          // localStorage.removeItem('length');
          // localStorage.removeItem('height');
          // localStorage.removeItem('orderCost');
          // localStorage.removeItem('orderId');

          // localStorage.setItem('from', response.from);
          // localStorage.setItem('orderId', response.orderId);
          // localStorage.setItem('to', response.to);
          // localStorage.setItem('deliveryTime', response.deliveryTime);
          // localStorage.setItem('type', response.type);
          // localStorage.setItem('amount', response.size.toString());
          // localStorage.setItem('width', response.width.toString());
          // localStorage.setItem('length', response.length.toString());
          // localStorage.setItem('height', response.height.toString());
          // localStorage.setItem('orderCost', response.orderCost.toString());


          if (this.orderDetail.paymentBy == '0') {
            this.router.navigateByUrl('/ChoosePrice/'+response.orderNumber);
          } else {
            this.router.navigateByUrl('/');
          }
        },
        (err) => {
          console.log(err);
          console.log(err.value);
          console.log(err.text);
          console.log('sdrtyuioiuytrewqert');
        }
      );
    }

    // else{

    //   this.logged=true
    // console.log('loff'+this.logged)

    // }
    // }
    else {
      console.log('guest');
      this.formData.append('from', from!);
      this.formData.append('amount', form.value.amount);
      this.formData.append('reciverAddress', form.value.reciverAddress);
      this.formData.append('senderName', form.value.senderName);
      this.formData.append('reciverEmail', form.value.reciverEmail);
      this.formData.append('reciverPhone', form.value.reciverPhone);
      this.formData.append('reciverName', form.value.reciverName);
      this.formData.append('time', form.value.time);
      this.formData.append('to', form.value.to);
      // this.formData.append("createdOn", '');
      this.formData.append('reciverCity', form.value.reciverCity);
      this.formData.append('type', form.value.type);

      this.formData.append('status', this.status);
      this.formData.append('paymentBy', form.value.paymentBy);
      this.formData.append('addressID', form.value.addressID);
      var width = this.dimntionOrder.width.toString();
      var height = this.dimntionOrder.height.toString();
      var length = this.dimntionOrder.length.toString();
      var orderCost = this.orderDetail.orderCost.toString();
      this.formData.append('paymentStatus', this.paymentStatus);
      this.formData.append('userID', this.authService.UserModel.UserId);
      this.formData.append('width', width);
      this.formData.append('height', height);
      this.formData.append('length', length);
      this.formData.append('description', this.orderDetail.description);
      this.formData.append('orderCost', orderCost);
      this.formData.append('totalCost', '0');
      this.formData.append('orderId', '0');
      this.formData.append('orderNumber', '0');
      this.formData.append('CompanyName', '');
      this.formData.append('UserID', '');
      this.formData.append('UserName', '');
      this.formData.append('name', form.value.name);
      this.formData.append('email', form.value.email);
      this.formData.append('phone', form.value.phone);
      this.formData.append('city', form.value.city);
      console.log(this.compID)
      if (this.compID != 0) {
        this.formData.append('companyId', this.compID.toString());
      }
      this.GuestOrder.name = form.value.name;
      this.GuestOrder.email = form.value.email;
      this.GuestOrder.phone = form.value.phone;
      this.GuestOrder.city = form.value.city;
      var from = localStorage.getItem('from');
      // var orderID = localStorage.getItem('orderId');
      // console.log(localStorage.getItem('to'));
      // console.log(from);
      console.log('guest');
      console.log(form.value);

      this.GuestOrder.from = form.value.city;
      console.log('city' + this.GuestOrder.from);
      console.log('city' + form.value.name);
      console.log('city' + form.value.reciverEmail);
      this.GuestOrder.name = form.value.name;
      this.GuestOrder.email = form.value.email;
      this.GuestOrder.phone = form.value.phone;
      this.GuestOrder.city = form.value.city;
      // this.GuestOrder.country = form.value.country;
      this.GuestOrder.addressDetails = form.value.addressDetails;

      this.GuestOrder.amount = form.value.amount;
      this.GuestOrder.reciverAddress = form.value.reciverAddress;
      this.GuestOrder.senderName = form.value.senderName;
      this.GuestOrder.reciverEmail = form.value.reciverEmail;
      this.GuestOrder.reciverPhone = form.value.reciverPhone;
      this.GuestOrder.reciverName = form.value.reciverName;
      this.GuestOrder.time = form.value.time;
      this.GuestOrder.to = form.value.reciverCity;
      this.GuestOrder.reciverCity = form.value.reciverCity;
      this.GuestOrder.type = form.value.type;
      this.GuestOrder.status = form.value.status;
      this.GuestOrder.paymentBy = form.value.paymentBy;
      this.GuestOrder.width = this.dimntionOrder.width;
      this.GuestOrder.height = this.dimntionOrder.height;
      this.GuestOrder.length = this.dimntionOrder.length;
      // if(form.value.paymentBy == '0')
      this.GuestOrder.paymentStatus = form.value.paymentStatus;

      console.log('Guest ' + this.GuestOrder);

      await this.orderService
        .CreateOrderGuestWithPercent(this.formData)
        .subscribe(
          (response) => {
            console.log('response');

            // localStorage.removeItem('from');
            // localStorage.removeItem('to');
            // localStorage.removeItem('deliveryTime');
            // localStorage.removeItem('type');
            // localStorage.removeItem('amount');
            // localStorage.removeItem('width');
            // localStorage.removeItem('length');
            // localStorage.removeItem('height');
            // localStorage.removeItem('orderCost');

            // localStorage.setItem('from', response.from);
            // localStorage.setItem('orderId', response.orderId);
            // localStorage.setItem('to', response.to);
            // localStorage.setItem('deliveryTime', response.deliveryTime);
            // localStorage.setItem('type', response.type);
            // localStorage.setItem('amount', response.size.toString());
            // localStorage.setItem('width', response.width.toString());
            // localStorage.setItem('length', response.length.toString());
            // localStorage.setItem('height', response.height.toString());
            // localStorage.setItem('orderCost', response.order.toString());
            // localStorage.setItem('from',JSON.stringify(response))
            //  var dd =localStorage.getItem('from')
            // if(dd)
            // dd = JSON.parse(dd);
            // this.ss=dd
            // console.log(dd)

            if (this.GuestOrder.paymentBy == '0') {
              this.router.navigateByUrl('/ChoosePrice/'+response.orderNumber);
            } else {
              this.router.navigateByUrl('/');
            }
          },
          (err) => {
            console.log(err);
            console.log('sdrtyuioiuytrewqert');
          }
        );
    }
  }

  types: ITypeAll[] = [];
  getType() {
    this.UserService.getalltype().subscribe(
      (response) => {
        // console.log(response);

        this.types = response.returnObject;
        // console.log(this.types);
      },
      (err) => {
        console.log(err);
        console.log('sdrtyuioiuytrewqert');
      }
    );
  }

  CountSize() {
    // console.log(this.dimntionOrder)
    var dimention =
      (this.dimntionOrder.height *
        this.dimntionOrder.length *
        this.dimntionOrder.width) /
      50;
    // console.log(dimention)
    var dimentionPrice = 20 + 1 * (50 / 100) * dimention;
    // console.log(dimentionPrice)

    var sizePrice = 20 + 1 * (50 / 100) * this.orderDetail.amount;
    // console.log(sizePrice)

    if (sizePrice > dimentionPrice) {
      // console.log("the biggest is size = "+sizePrice)
    } else {
      // console.log("the biggest is dimension = "+dimentionPrice)
    }
  }

  checkOrder() {
    const isAuthorized = this.authService.token;
    // console.log(isAuthorized);
    if (isAuthorized != null) {
      this.getAddress();
    }
  }
  getAddress() {
    this.UserService.getAddressByUserID().subscribe(
      (response) => {
        // console.log(response.returnObject);
        this.addressUser = response.returnObject;
      },
      (err) => {
        console.log('catch err ' + err);
      }
    );
  }
}
