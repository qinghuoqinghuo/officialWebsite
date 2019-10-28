<template>
  <div id="constellation_box">
    <div class ="handsontable-box">
      <handsontable-components @data="getData"></handsontable-components>
    </div>
    <div class="handsontable-box-btn">
      <Button type="success" @click="getTableDataLine()">生成折线图</Button>
      <Button type="success" @click="getTableDataBar()">生成柱状图</Button>
    </div>
    <div class="echarts-box">
      <div id="chart1"></div>
    </div>
  </div>
</template>
<script>
  import  HandsonTable from '@/components/handsontable'
  export default {
    data() {
      return {}
    },
    components: {
      'handsontable-components':HandsonTable
    },
    mounted() {
      let self = this
      self.$chart.lineOrBar('chart1');
    },
    methods: {
      getData(data){
        let self = this
        switch (data.action) {
          case 'handsontableData'://handsontable列表
             let echartsData = data.data
            let type = data.type
             self.$chart.lineOrBar('chart1',echartsData,type)
            break;
        }
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  #constellation_box {
    width:100%;
    height:100%;
    .handsontable-box {
      width:100%;
      height:30%;
      overflow: auto;
    }
    .handsontable-box-btn {
      height:10%;
      width:100%;
    }
    .echarts-box {
      width:100%;
      height:60%;
      #chart1 {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
