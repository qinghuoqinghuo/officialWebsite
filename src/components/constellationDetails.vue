<template>
  <div id="constellationDetails">
    <div v-html="constellationDetails"></div>
  </div>
</template>
<script>
  import {getConstellationDetail} from "@/api/constellation"

  export default {
    data() {
      return {
        constellationDetails: ''
      }
    },
    mounted() {
      let self = this
      self.renderConstellationDetails()
    },
    methods: {
      renderConstellationDetails() {
        let params = {
          consName: '金牛座',
          type: 'today',
          key: 'a473f58582dca294aa986d502a08fe17'
        }
        getConstellationDetail(params).then(data => {
          debugger
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
