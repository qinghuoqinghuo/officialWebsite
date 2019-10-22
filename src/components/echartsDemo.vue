<template>
  <div id="constellation_box">
    <Row>
      <Col span="24">
        <handsontable-components></handsontable-components>
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
      this.$chart.line1('chart1');
    },
    methods: {
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  #constellation_box {
    #chart1 {
      width: 100%;
      height: 500px;
    }
  }
</style>
