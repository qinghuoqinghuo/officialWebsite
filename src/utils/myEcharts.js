/**
 * 各种画echarts图表的方法都封装在这里
 * 注意：这里echarts没有采用按需引入的方式，只是为了方便学习
 */

import echarts from 'echarts'
import $ from 'jquery'

const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $chart: {
      get() {
        return {
          //画一条简单的线
          line1: function (id) {
            let self = this;
            self.chart = echarts.init(document.getElementById(id));
            self.chart.showLoading();
            setTimeout(function(){
              self.chart.hideLoading();
            },1000)
            self.chart.clear();
            let base = +new Date(2014, 9, 3);
            let oneDay = 24 * 3600 * 1000;
            let date = [];
            let data = [Math.random() * 150];
            let now = new Date(base);

            function addData(shift) {
              now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
              date.push(now);
              data.push((Math.random() - 0.4) * 10 + data[data.length - 1]);
              if (shift) {
                date.shift();
                data.shift();
              }
              now = new Date(+new Date(now) + oneDay);
            }

            for (var i = 1; i < 100; i++) {
              addData();
            }

            let option = {
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date
              },
              yAxis: {
                boundaryGap: [0, '50%'],
                type: 'value'
              },
              series: [
                {
                  name:'成交',
                  type:'line',
                  smooth:true,
                  symbol: 'none',
                  stack: 'a',
                  areaStyle: {
                    normal: {}
                  },
                  data: data
                }
              ]
            };

            setInterval(function () {
              addData(true);
              self.chart.setOption({
                xAxis: {
                  data: date
                },
                series: [{
                  name:'成交',
                  data: data
                }]
              });
            }, 500);
            self.chart.setOption(option);
            window.onresize = function() {
              self.chart.resize();
            }
          }
        }
      }
    }
  })
}

export default {
  install
}
