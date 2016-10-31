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
    var toastr = require('toastr');
    var opts = {
      "positionClass": "toast-top-right",
      "timeOut": "500000",
      "closeButton": true,
    }
    var msg = "获取数据失败";
    if(error.status===500){
      msg = '调用远程服务获取数据失败';
    }else if(error.status===404){
      msg = '404:未找到以下接口：'+ error.url;
    }
    toastr.error(msg,'系统提示',opts);
    return Promise.reject(error.message || error);
  }

}
