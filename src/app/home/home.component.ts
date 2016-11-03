import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';
import util from '../common/util.js';
import constant from '../common/constant.js';

var echarts = require('echarts');
require('echarts/map/js/china.js');

function randomData() {
  return Math.round(Math.random()*1000);
}

var option = {
  title: {
    text: 'iphone销量',
    subtext: '纯属虚构',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data:['iphone3','iphone4','iphone5']
  },
  visualMap: {
    min: 0,
    max: 2500,
    left: 'left',
    top: 'bottom',
    text: ['高','低'],           // 文本，默认为数值文本
    calculable: true
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      dataView: {readOnly: false},
      restore: {},
      saveAsImage: {}
    }
  },
  series: [
    {
      name: 'iphone3',
      type: 'map',
      mapType: 'china',
      roam: false,
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      },
      data:[
        {name: '北京',value: randomData() },
        {name: '天津',value: randomData() },
        {name: '上海',value: randomData() },
        {name: '重庆',value: randomData() },
        {name: '河北',value: randomData() },
        {name: '河南',value: randomData() },
        {name: '云南',value: randomData() },
        {name: '辽宁',value: randomData() },
        {name: '黑龙江',value: randomData() },
        {name: '湖南',value: randomData() },
        {name: '安徽',value: randomData() },
        {name: '山东',value: randomData() },
        {name: '新疆',value: randomData() },
        {name: '江苏',value: randomData() },
        {name: '浙江',value: randomData() },
        {name: '江西',value: randomData() },
        {name: '湖北',value: randomData() },
        {name: '广西',value: randomData() },
        {name: '甘肃',value: randomData() },
        {name: '山西',value: randomData() },
        {name: '内蒙古',value: randomData() },
        {name: '陕西',value: randomData() },
        {name: '吉林',value: randomData() },
        {name: '福建',value: randomData() },
        {name: '贵州',value: randomData() },
        {name: '广东',value: randomData() },
        {name: '青海',value: randomData() },
        {name: '西藏',value: randomData() },
        {name: '四川',value: randomData() },
        {name: '宁夏',value: randomData() },
        {name: '海南',value: randomData() },
        {name: '台湾',value: randomData() },
        {name: '香港',value: randomData() },
        {name: '澳门',value: randomData() }
      ]
    },
    {
      name: 'iphone4',
      type: 'map',
      mapType: 'china',
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      },
      data:[
        {name: '北京',value: randomData() },
        {name: '天津',value: randomData() },
        {name: '上海',value: randomData() },
        {name: '重庆',value: randomData() },
        {name: '河北',value: randomData() },
        {name: '安徽',value: randomData() },
        {name: '新疆',value: randomData() },
        {name: '浙江',value: randomData() },
        {name: '江西',value: randomData() },
        {name: '山西',value: randomData() },
        {name: '内蒙古',value: randomData() },
        {name: '吉林',value: randomData() },
        {name: '福建',value: randomData() },
        {name: '广东',value: randomData() },
        {name: '西藏',value: randomData() },
        {name: '四川',value: randomData() },
        {name: '宁夏',value: randomData() },
        {name: '香港',value: randomData() },
        {name: '澳门',value: randomData() }
      ]
    },
    {
      name: 'iphone5',
      type: 'map',
      mapType: 'china',
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      },
      data:[
        {name: '北京',value: randomData() },
        {name: '天津',value: randomData() },
        {name: '上海',value: randomData() },
        {name: '广东',value: randomData() },
        {name: '台湾',value: randomData() },
        {name: '香港',value: randomData() },
        {name: '澳门',value: randomData() }
      ]
    }
  ]
};
function  initChart(){
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('main'));
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent {
  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    util.sayHello();
    util.createMeg("项目名称："+constant.PROJECT_NAME);
    console.log("产品描述："+constant.APP_DESCRIPTION);

    initChart();
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
