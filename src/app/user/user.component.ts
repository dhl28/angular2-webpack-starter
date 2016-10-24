import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BsTableComponent} from '../common/bs-table.component';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`User` component loaded asynchronously');
//bootstrap-table options
var columns = [{
  title: '用户名',
  field: 'name'

}, {
  title: '显示名',
  field: 'showName'

}, {
  title: '邮箱',
  field: 'email'

}, {
  title: '业务管理员',
  field: 'businessManager'

}, {
  title: '修改时间',
  field: 'modifyTime'
}, {
  field: 'pk',
  title: '操作',
  formatter: operationFormatter,
}];


// cell formatter -操作栏
function operationFormatter(value, row, index) {
  var html = '<div>' +
    '<a class="fa fa-edit btn-cell" title="编辑"></a>' +
    '<a class="fa fa-trash btn-cell" title="删除"></a>' +
    '</div>'
  return html;
}
function getCellClass(oprationType, row) {
  var res;
  var editClass = "iconfont cell-operation cell-edit";
  var delClass = "iconfont cell-operation cell-del";
  if (row.isPreset == 1) {
    editClass += " ae-disabled";
    delClass += " ae-disabled";
  }
  switch (oprationType) {
    case 'edit':
      res = editClass;
      break;
    case 'del':
      res = delClass;
      break;
    default:
      res = "iconfont";
  }
  return res;
}

const bsOpts = {
  columns: columns,
  striped: true,
  data: [],
  pageSize: 10,
  pagination: true,
  sortable: false,
  sidePagination: "client"
}
@Component({
  selector: 'user',
  styles: [``],
  template: `
    <h3>用户列表</h3>
    <table #bsT1 class="bs-table" [bsOpts]="bsOpts"></table>
  `
})
export class UserComponent implements AfterViewInit {
  @ViewChild(BsTableComponent)
  private bsT1: BsTableComponent;

  localState: any;
  bsOpts = bsOpts;

  constructor(public route: ActivatedRoute) {

  }

  ngOnInit() {

    console.log('hello `User` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')

  }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    // setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
    this.asyncDataWithWebpack()

  }

  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    setTimeout(() => {

      System.import('../../assets/mock-data/mock-data.json')
        .then(json => {
          console.log('async mockData', json);
          this.bsT1.loadData(json);
        });

    }, 2000);
  }

}
