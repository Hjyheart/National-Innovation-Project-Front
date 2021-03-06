import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import {ApiService} from "./api.service";

// import { Session } from '../entity/session';

@Injectable()
export class LoginService{

  loginState: boolean;

  constructor(
    private http: Http,
    private api: ApiService
  ){
    if (localStorage.getItem('currentUser')){
      this.loginState = true;
    }else{
      this.loginState = false;
    }
  }

  login(id: string, password: string):Observable<boolean>{
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.api.LOGIN, 'ID=' + id + '&PASSWORD=' + password, options)
      .map(res => {
        if (res.json() === true) {
          localStorage.setItem('currentUser', id);
          this.loginState = true;
          return res.json();
        }
      })
      .catch(this.handleError);

  }

  loginOut(){
      localStorage.removeItem('currentUser');
      this.loginState = false;
  }

  private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
