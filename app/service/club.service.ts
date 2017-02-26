import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Club } from '../entity/club';

@Injectable()
export class ClubService {
	private server = `http://localhost:8080/`;
	private GETCLUBLIST = this.server + `club/all`;
	private GETCLUBDETAIL = this.server + `club/profile?id=`;

	constructor (private http: Http) {}

		/**
		*获取俱乐部列表
		*/
  	getClubs():Observable<Club[]>{
  		return this.http.get(this.GETCLUBLIST)
							.map(this.extractData)
							.catch(this.handleError);
  						// .catch((error: Response | any) => console.log(error));
  	}

		/**
		*获取俱乐部详情
		*/
		getClub(id: string):Observable<Club>{
			return this.http.get(this.GETCLUBDETAIL + id)
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
