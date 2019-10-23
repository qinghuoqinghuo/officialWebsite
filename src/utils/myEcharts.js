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
          lineOrBar: function (id, data, type) { //id:容器ID,data:数据,type:line或bar
            let self = this;
            self.chart = echarts.init(document.getElementById(id));
            self.chart.showLoading();
            setTimeout(function () {
              self.chart.hideLoading();
            }, 600)
            self.chart.clear();
            let legendData = [];
            let xAxisData = [];
            let seriesData = [];
            if (data && type) {
              data.forEach((item, index) => {
                if (index == 0) {
                  xAxisData = data[0].slice(1).filter(j => {
                    return j != null
                  })
                } else {
                  if (item[0]) {
                    legendData.push(item[0])
                    seriesData.push({
                      name: item[0],
                      type: type,
                      data: item.slice(1).filter(k => {
                        return k != null
                      })
                    })
                  }
                }
              })
              debugger
            } else {
              legendData = ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'];
              xAxisData = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
              seriesData = [
                {
                  name: '邮件营销',
                  type: 'line',
                  data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                  name: '联盟广告',
                  type: 'line',
                  data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                  name: '视频广告',
                  type: 'line',
                  data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                  name: '直接访问',
                  type: 'line',
                  data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                  name: '搜索引擎',
                  type: 'line',
                  data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
              ];
            }
            let option = {
              title: {
                text: ''
              },
              tooltip: {
                trigger: 'axis'
              },
              legend: {
                data: legendData
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              toolbox: {
                feature: {
                  saveAsImage: {}
                }
              },
              xAxis: {
                type: 'category',
                // boundaryGap: false,
                data: xAxisData
              },
              yAxis: {
                type: 'value'
              },
              series: seriesData
            };
            if (type) {
              if (type == 'line') {
                option.xAxis.boundaryGap = false
              } else {
                option.xAxis.boundaryGap = true
              }

            }
            self.chart.setOption(option);
            window.onresize = function () {
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
