import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient  , private router: Router  ) { }

  taskAdd(data?: any): Observable<HttpResponse<any>> {
    return this.http.post(environment.host + 'task/add', data,
      {observe: 'response'});
  }


  taskEdit(data?: any): Observable<HttpResponse<any>> {
    return this.http.post(environment.host + 'task/update', data,
      {observe: 'response'});
  }
  taskDelete(data?: any): Observable<HttpResponse<any>> {
    return this.http.post(environment.host + 'task/delete', data,
      {observe: 'response'});
  }


  taskList(data?: any): Observable<HttpResponse<any>> {
    return this.http.post(environment.host + 'task/list', data,
      {observe: 'response'});
  }


}
