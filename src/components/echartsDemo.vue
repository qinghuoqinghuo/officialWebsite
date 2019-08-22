<template>
  <div id="constellation_box">
    <Row>
      <Col span="24">
        <div id="chart1"></div>
        <div id="chart1"></div>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
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
      width: 500px;
      height: 500px;
    }
  }
</style>
