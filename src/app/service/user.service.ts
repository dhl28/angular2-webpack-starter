import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private usersUrl = '/api/users';  // URL to web api

  constructor(private http: Http) { }

  list(): Promise<any>{
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    if(error.status===500){
      var toastr = require('toastr');
      let msg = '调用远程服务获取数据失败';
      var opts = {
        "positionClass": "toast-top-right",
        "timeOut": "5000",
        "closeButton": true,
      }
      toastr.error(msg,'系统提示',opts);
    }
    return Promise.reject(error.message || error);
  }

}
