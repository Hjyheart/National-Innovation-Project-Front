/**
 * Created by hongjiayong on 2017/2/27.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class ApiService{
  server = `http://localhost:8080/`;

  GETCLUBLIST = this.server + `club/all`;
  GETCLUBDETAIL = this.server + `club/profile?id=`;

  LOGIN = this.server + `login/check`;

  GETACTIVITIES = this.server + `act/all`;
  GETACTIVITY = this.server + `act/profile?id=`;
}