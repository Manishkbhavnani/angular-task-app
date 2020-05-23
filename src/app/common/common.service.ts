import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfiromPopupComponent } from './confirom-popup/confirom-popup.component';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private systemPreferences: any = {
  };
  constructor(private http: HttpClient ,  private router: Router , private modalService: NgbModal ) { }




public setPreference(key , data) {
  this.systemPreferences[key] = data;
}
public getPreference(key) {
 return  this.systemPreferences[key];
}


public confirmPopup(
  title: string,
  message: string,
  btnOkText: string = 'OK',
  btnCancelText: string = 'Cancel',
  dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
  const modalRef = this.modalService.open(ConfiromPopupComponent, { size: dialogSize });
  modalRef.componentInstance.title = title;
  modalRef.componentInstance.message = message;
  modalRef.componentInstance.btnOkText = btnOkText;
  modalRef.componentInstance.btnCancelText = btnCancelText;

  return modalRef.result;
}

public unreadNotification(data?:any){
  return this.http.post(environment.host + 'notifications/unreadNotifications',data,{observe:'response'});
}

public notificationCount(data?:any){
  return this.http.post(environment.host + 'notifications/notificationCount',data,{observe:'response'});
}

public upcomingSessionCount(data?:any){
  return this.http.post(environment.host + 'notifications/upcomingSessionCheck',data,{observe:'response'});
}
}
