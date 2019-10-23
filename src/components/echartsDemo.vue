<template>
  <div id="constellation_box">
    <Row>
      <Col span="24">
        <handsontable-components @data="getData"></handsontable-components>
        <div id="chart1"></div>
      </Col>
    </Row>
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
    #chart1 {
      width: 100%;
      height: 400px;
    }
  }
</style>
