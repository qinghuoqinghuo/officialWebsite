import Vue from 'vue'
import Vuex from 'vuex'
import {HotTable} from '@handsontable/vue';
import Handsontable from 'handsontable';

Vue.use(Vuex)

const state = {//handsontable列表数据
  setting: {
    // language:'zh-CN',
    licenseKey: 'non-commercial-and-evaluation',//隐藏版权文字
    // data: Handsontable.helper.createSpreadsheetData(10, 26),//列表初始化数据
    data: [
      ['', '河北','广东', '北京', '重庆', '四川', '天津'],
      ["2014", 400, 390, 30, 300, 220, 180],
      ["2015", 330, 300, 120, 250, 280, 140],
      ["2016", 200, 320, 160, 280, 200, 300],
      ["2017", 550, 420, 330, 430, 360, 330],
      ["2018", 670, 450, 410, 370, 290, 410],
      ["2019", 480, 560, 356, 419, 310, 345],
    ],
    startRows: 3,//初始化行数,无data属性时生效(该值小于minRows时,以minRows为准)
    startCols: 10,//初始化列数,无data属性时生效(该值小于minCols时,以minCols为准)
    minRows: 5,//最少行数(当初始化数据小于该值时,以该值为准)
    minCols: 16,//最少列数(当初始化数据小于该值时,以该值为准)
    minSpareCols: 1,//列的最小留白数
    minSpareRows: 1,//行的最小留白数
    colHeaders: true,//是否展示列表头,默认是A,B,C等字母,可以['列1','列2']进行自定义展示
    rowHeaders: true,//是否展示行表头,默认是1,2,3等数据,可以['行1','行2']进行自定义展示
    // colWidths: 49,//列宽度
    dropdownMenu: true,//表头展示下拉菜单,可以自定义展示
    // dropdownMenu: {
    //   items: {
    //     'row_above': {
    //       name: '上面插入一行'
    //     },
    //     'row_below': {
    //       name: '下面插入一行'
    //     },
    //     'col_left':{
    //       name: '左侧插入一列'
    //     },
    //     'col_right':{
    //       name: '右侧插入一列'
    //     },
    //     'remove_row':{
    //       name: '移除本行'
    //     },
    //     'remove_col':{
    //       name: '移除本列'
    //     },
    //     'alignment':{
    //       name: '对齐方式'
    //     },
    //     'make_read_only':{
    //       name:'只读'
    //     },
    //     // 'borders':{
    //     //   name: '边框'
    //     // },
    //     'copy':{
    //       name: '复制'
    //     },
    //     'cut':{
    //       name: '剪切'
    //     },
    //     'separator': Handsontable.plugins.ContextMenu.SEPARATOR,
    //     'clear_custom': {
    //       name: '清空所有单元格数据',
    //       callback: function () {
    //         this.clear()
    //       }
    //     }
    //   }
    // },
    className: 'htCenter',//单元格文字对齐方式(htLeft,htRight,htCenter)
    currentRowClassName: 'my-selectRow', //给选中行添加自定义class类名
    currentColClassName: 'my-selectCol', //给选中列添加自定义class类名
    autoWrapRow: true, //文字是否自动换行(当没有设置colWidths时生效)
    // fixedRowsTop: 1,//列表内容从上面开始,固定定位的行数(不包含行表头)
    // fixedColumnsLeft: 1,//列表内容从左面开始,固定定位的列数(不包含列表头)
    fillHandle: true,//是否开启拖拽复制操作(true,false,'horizontal'水平复制,'vertical'垂直复制)
    //autoRowSize: true,
    //autoColumnSize: true,
    // highlightedRows:[],
    contextMenu: {// 单元格右击展示菜单
      items: {
        'row_above': {
          name: '上面插入一行'
        },
        'row_below': {
          name: '下面插入一行'
        },
        'col_left': {
          name: '左侧插入一列'
        },
        'col_right': {
          name: '右侧插入一列'
        },
        'remove_row': {
          name: '移除本行'
        },
        'remove_col': {
          name: '移除本列'
        },
        'alignment': {
          name: '对齐方式'
        },
        'make_read_only': {
          name: '只读'
        },
        // 'borders':{
        //   name: '边框'
        // },
        'copy': {
          name: '复制'
        },
        'cut': {
          name: '剪切'
        },
        'separator': Handsontable.plugins.ContextMenu.SEPARATOR,
        'clear_custom': {
          name: '清空所有单元格数据',
          callback: function () {
            this.clear()
          }
        }
      }
    }
  }
}
export default new Vuex.Store({
  state
})
