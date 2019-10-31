<template>
  <div id="constellation_box">
    <div class="handsontable-box">
      <handsontable-components></handsontable-components>
    </div>
    <div class="handsontable-box-btn">
      <div class="strokeBorder">
        <Button type="success" @click="changeEcharts('line')">生成折线图</Button>
      </div>
      <div class="strokeBorder">
        <Button type="success" @click="changeEcharts('bar')">生成柱状图</Button>
      </div>
      <div class="strokeBorder">
        <Button type="success" @click="changeEcharts('pie')">生成饼状图</Button>
      </div>
    </div>
    <div class="echarts-box">
      <div id="chart1"></div>
    </div>
  </div>
</template>
<script>
  import HandsonTable from '@/components/handsontable'

  export default {
    data() {
      return {}
    },
    components: {
      'handsontable-components': HandsonTable
    },
    mounted() {
      let self = this
      self.$chart.lineOrBar('chart1')
    },
    methods: {
      /**
       * 切换echarts图
       * */
      changeEcharts(type) {
        let self = this
        if (type == 'line' || type == 'bar') {
          self.$chart.lineOrBar('chart1', self.$store.state.setting.data, type)
        }else if(type=='pie') {
          self.$chart.pie('chart1', self.$store.state.setting.data, type)
        }
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  #constellation_box {
    width: 100%;
    height: 100%;

    .strokeBorder {
      display: inline-block;
      padding: 3px;
      background: url('../assets/img/1.svg') center center no-repeat;
      background-size: 100%;
    }

    .handsontable-box {
      width: 100%;
      height: 35%;
      overflow: auto;
    }

    .handsontable-box-btn {
      height: 8%;
      width: 100%;
    }

    .echarts-box {
      width: 100%;
      height: 57%;

      #chart1 {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
