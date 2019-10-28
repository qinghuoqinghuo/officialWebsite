<template>
  <div id="constellation_box">
    <div class="handsontable-box">
      <handsontable-components></handsontable-components>
    </div>
    <div class="handsontable-box-btn">
      <Button type="success" @click="changeEcharts('line')">生成折线图</Button>
      <Button type="success" @click="changeEcharts('bar')">生成柱状图</Button>
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
        self.$chart.lineOrBar('chart1', self.$store.state.setting.data, type)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  #constellation_box {
    width: 100%;
    height: 100%;

    .handsontable-box {
      width: 100%;
      height: 35%;
      overflow: auto;
    }

    .handsontable-box-btn {
      height: 5%;
      width: 100%;
    }

    .echarts-box {
      width: 100%;
      height: 60%;

      #chart1 {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
