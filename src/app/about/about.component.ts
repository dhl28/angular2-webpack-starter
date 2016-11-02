import {Component, OnChanges, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
import {User} from './user'
import any = jasmine.any;
console.log('`About` component loaded asynchronously');
declare var $:any;
@Component({
  selector: 'about',
  styles: [`
  `],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnChanges {
  localState: any;
  @Input() user: User = {name: 'neo',birthDay:new Date()} as User;
  labelList = [{id:'1',name:'音乐'},{id:'2',name:'电影'},{id:'3',name:'足球'}];
  checkboxes = {};
  /**
   * @type {boolean}
   */
  private showDatePicker:boolean = false;

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('hello `About` component');

  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  getUserInfo(){
    let hobby = [];
    for(let k in this.checkboxes){
      if(this.checkboxes[k]){
        hobby.push(k);
      }
    }
    if(hobby.length > 0){
      this.user.hobby = hobby;
    }else{
      delete this.user.hobby;
    }

    let userInfo = $.extend({},this.user,true);

    return JSON ? JSON.stringify(userInfo, null, 2) : 'your browser doesnt support JSON so cant pretty print';
  }

}
