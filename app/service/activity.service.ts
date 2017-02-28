/**
 * Created by hongjiayong on 2017/2/27.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {ApiService} from "./api.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Activity} from "../entity/activity";

@Injectable()
export class ActivityService{

  constructor(
    private http: Http,
    private api: ApiService
  ){}

  /**
   * 获取所有活动
   * @returns {Observable<R>}
   */
  getActivities():Observable<Activity[]>{
      return this.http.get(this.api.GETACTIVITIES)
        .map(this.extractData)
        .catch(this.handleError);
  }

  getActivity(id: string):Observable<Activity>{
    return this.http.get(this.api.GETACTIVITY + id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log(res.json());
    return res.json() || { };
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
