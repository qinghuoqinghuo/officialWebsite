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
            let color = ['rgba(23, 255, 243', 'rgba(119,61,190']
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
                  // x轴数据--数组第一条,只截取不为null的数值
                  xAxisData = data[0].slice(1).filter(j => {
                    return j != null
                  })
                } else {
                  // 排除第一列为null的数据
                  if (item[0]) {
                    // 获取图例数组
                    legendData.push(item[0])
                    // 获取series数组
                    seriesData.push({
                      name: item[0],
                      type: type,
                      smooth: true,
                      barMaxWidth: '20px',
                      // areaStyle: {normal: {}},
                      data: item.slice(1).filter(k => {
                        return k != null
                      })
                    })
                  }
                }
              })
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
              backgroundColor: '#0d235e',
              // color: ['#B90C1F','#3D3D3F','#FADD75','#FF897B','#66C7FE'],
              color: ['#FE4365', '#FC9D9A', '#47D8BE', '#C8C8A9', '#83AF9B'],
              // color: [{
              //   type: 'linear',
              //   colorStops: [
              //     {
              //       offset: 0,
              //       color: '#FE4365' // 0% 处的颜色
              //     },
              //     {
              //       offset: 0.25,
              //       color: '#FC9D9A' // 40% 处的颜色
              //     }, {
              //       offset: 0.5,
              //       color: '#47D8BE' // 100% 处的颜色
              //     },{
              //       offset: 0.75,
              //       color: '#C8C8A9'
              //     },{
              //       offset: 1,
              //       color: '#83AF9B'
              //     }
              //   ],
              //   globalCoord: false // 缺省为 false
              // },],
              title: {
                text: ''
              },
              tooltip: {
                trigger: 'axis'
              },
              legend: {
                data: legendData,
                x: 'center',
                y: '5%',
                textStyle: {
                  fontSize: 12,
                  color: 'rgb(0,253,255,0.6)'
                },
                itemWidth: 20,
                itemHeight: 10,
                itemGap: 35
              },
              grid: {
                left: '5%',
                right: '5%',
                bottom: '10%',
                top: '15%',
                containLabel: true
              },
              toolbox: {
                feature: {
                  saveAsImage: {}
                }
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: xAxisData,
                axisLabel: {
                  textStyle: {
                    color: 'rgb(0,253,255,0.6)'
                  }
                },
                axisLine: {
                  lineStyle: {
                    color: 'rgb(0,253,255,0.6)'
                  }
                }
              },
              yAxis: {
                type: 'value',
                axisLabel: {
                  textStyle: {
                    color: 'rgb(0,253,255,0.6)'
                  }
                },
                splitLine: {
                  lineStyle: {
                    type: 'dashed',
                    color: 'rgb(23,255,243,0.3)'
                  }
                },
                axisLine: {
                  lineStyle: {
                    color: 'rgb(0,253,255,0.6)'
                  }
                },
                areaStyle: {
                  show:true
                },
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
