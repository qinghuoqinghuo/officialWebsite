/**
 * 各种画echarts图表的方法都封装在这里
 * 注意：这里echarts没有采用按需引入的方式，只是为了方便学习
 */

import echarts from 'echarts'

const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $chart: {
      get() {
        return {
          //画一条简单的线
          line1: function (id) {
            let self = this
            self.chart = echarts.init(document.getElementById(id));
            self.chart.clear();
            const optionData = {
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
              }]
            };
            self.chart.setOption(optionData);
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
