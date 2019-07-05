<template>
  <div id="constellationDetails">
    <Tabs>
      <TabPane label="今日运势" icon="logo-apple">
        <div>
          <p><span>星座名称：</span>{{constellationDetailsDataToday.name}}</p>
          <p><span>贵人星座：</span>{{constellationDetailsDataToday.QFriend}}</p>
          <p><span>幸运颜色：</span>{{constellationDetailsDataToday.color}}</p>
          <p><span>幸运数字：</span>{{constellationDetailsDataToday.number}}</p>
          <p><span>日期：</span>{{constellationDetailsDataToday.datetime}}</p>
          <p><span>健康运势：</span>
            <Rate disabled allow-half v-model="constellationDetailsDataToday.health"/>
          </p>
          <p><span>爱情运势：</span>
            <Rate disabled allow-half v-model="constellationDetailsDataToday.love"/>
          </p>
          <p><span>财运运势：</span>
            <Rate disabled allow-half v-model="constellationDetailsDataToday.money"/>
          </p>
          <p><span>工作运势：</span>
            <Rate disabled allow-half v-model="constellationDetailsDataToday.work"/>
          </p>
          <p><span>综合运势：</span>
            <Rate disabled allow-half v-model="constellationDetailsDataToday.all"/>
          </p>
          <p><span>概述：</span>{{constellationDetailsDataToday.summary}}</p>
        </div>
      </TabPane>
      <TabPane label="明日运势" icon="logo-windows">
        <div>
          <p><span>星座名称：</span>{{constellationDetailsDataTomorrow.name}}</p>
          <p><span>贵人星座：</span>{{constellationDetailsDataTomorrow.QFriend}}</p>
          <p><span>幸运颜色：</span>{{constellationDetailsDataTomorrow.color}}</p>
          <p><span>幸运数字：</span>{{constellationDetailsDataTomorrow.number}}</p>
          <p><span>日期：</span>{{constellationDetailsDataTomorrow.datetime}}</p>
          <p><span>健康运势：</span>
            <Rate disabled allow-half v-model="constellationDetailsDataTomorrow.health"/>
          </p>
          <p><span>爱情运势：</span>
            <Rate disabled allow-half v-model="constellationDetailsDataTomorrow.love"/>
          </p>
          <p><span>财运运势：</span>
            <Rate disabled allow-half v-model="constellationDetailsDataTomorrow.money"/>
          </p>
          <p><span>工作运势：</span>
            <Rate disabled allow-half v-model="constellationDetailsDataTomorrow.work"/>
          </p>
          <p><span>综合运势：</span>
            <Rate disabled allow-half v-model="constellationDetailsDataTomorrow.all"/>
          </p>
          <p><span>概述：</span>{{constellationDetailsDataTomorrow.summary}}</p>
        </div>
      </TabPane>
      <TabPane label="本周运势" icon="logo-tux">
        <div>
          <p><span>星座名称：</span>{{constellationDetailsDataWeek.name}}</p>
          <p><span>日期：</span>{{constellationDetailsDataWeek.date}}</p>
          <p>{{constellationDetailsDataWeek.health}}</p>
          <p>{{constellationDetailsDataWeek.love}}</p>
          <p>{{constellationDetailsDataWeek.job}}</p>
          <p>{{constellationDetailsDataWeek.money}}</p>
          <p>{{constellationDetailsDataWeek.work}}</p>
        </div>
      </TabPane>
      <TabPane label="本月运势" icon="logo-tux">
        <div>
          <p><span>星座名称：</span>{{constellationDetailsDataMonth.name}}</p>
          <p><span>日期：</span>{{constellationDetailsDataMonth.date}}</p>
          <p><span>月份：</span>{{constellationDetailsDataMonth.month}}</p>
          <p><span>健康运势：</span>
            {{constellationDetailsDataMonth.health}}
          </p>
          <p><span>爱情运势：</span>
            {{constellationDetailsDataMonth.love}}
          </p>
          <p><span>财运运势：</span>
            {{constellationDetailsDataMonth.money}}
          </p>
          <p><span>工作运势：</span>
            {{constellationDetailsDataMonth.work}}
          </p>
          <p><span>综合运势：</span>
            {{constellationDetailsDataMonth.all}}
          </p>
        </div>
      </TabPane>
      <TabPane label="本年运势" icon="logo-tux">
        <div>
          <p><span>星座名称：</span>{{constellationDetailsDataYear.name}}</p>
          <p><span>日期：</span>{{constellationDetailsDataYear.date}}</p>
          <p><span>年份：</span>{{constellationDetailsDataYear.year}}</p>
          <p><span>爱情运势：</span>
            {{constellationDetailsDataYear.love}}
          </p>
          <p><span>财运运势：</span>
            {{constellationDetailsDataYear.finance}}
          </p>
          <p><span>工作运势：</span>
            {{constellationDetailsDataYear.finance}}
          </p>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import {getConstellationDetail} from "@/api/constellation"

  export default {
    data() {
      return {
        constellationDetailsDataToday: {
          summary: '',
          QFriend: '',
          all: 0,
          color: '',
          datetime: '',
          health: 0,
          love: 0,
          money: 0,
          name: '',
          number: 0,
          work: 0
        },
        constellationDetailsDataTomorrow: {
          summary: '',
          QFriend: '',
          all: 0,
          color: '',
          datetime: '',
          health: 0,
          love: 0,
          money: 0,
          name: '',
          number: 0,
          work: 0
        },
        constellationDetailsDataWeek: {
          name: '',
          date: '',
          health: '',
          love: '',
          money: '',
          job: '',
          work: ''
        },
        constellationDetailsDataMonth: {
          name: '',
          date: '',
          all: '',
          happyMagic: '',
          health: '',
          love: '',
          money: '',
          month: '',
          work: ''
        },
        constellationDetailsDataYear: {
          name: '',
          date: '',
          happyMagic: '',
          love: '',
          mima: {},
          career: '',
          finance: '',
          year: ''
        }
      }
    },
    mounted() {
      let self = this
      self.renderConstellationDetailsToday()
      self.renderConstellationDetailsTomorrow()
      self.renderConstellationDetailsWeek()
      self.renderConstellationDetailsMonth()
      self.renderConstellationDetailsYear()
    },
    methods: {
      /**
       * 渲染今日运势
       * */
      renderConstellationDetailsToday() {
        let self = this
        let searchName = decodeURI(location.search.split('=')[1])
        let params = {
          consName: searchName,
          type: 'today',
          key: 'a473f58582dca294aa986d502a08fe17'
        }
        getConstellationDetail(params).then(data => {
          data.data.love = parseInt(data.data.love) * 5 / 100
          data.data.all = parseInt(data.data.all) * 5 / 100
          data.data.health = parseInt(data.data.health) * 5 / 100
          data.data.work = parseInt(data.data.work) * 5 / 100
          data.data.money = parseInt(data.data.money) * 5 / 100
          self.constellationDetailsDataToday = data.data
        })
      },
      /**
       * 渲染明日运势
       * */
      renderConstellationDetailsTomorrow() {
        let self = this
        let searchName = decodeURI(location.search.split('=')[1])
        let params = {
          consName: searchName,
          type: 'tomorrow',
          key: 'a473f58582dca294aa986d502a08fe17'
        }
        getConstellationDetail(params).then(data => {
          data.data.love = parseInt(data.data.love) * 5 / 100
          data.data.all = parseInt(data.data.all) * 5 / 100
          data.data.health = parseInt(data.data.health) * 5 / 100
          data.data.work = parseInt(data.data.work) * 5 / 100
          data.data.money = parseInt(data.data.money) * 5 / 100
          self.constellationDetailsDataTomorrow = data.data
        })
      },
      /**
       * 渲染本周运势
       * */
      renderConstellationDetailsWeek() {
        let self = this
        let searchName = decodeURI(location.search.split('=')[1])
        let params = {
          consName: searchName,
          type: 'week',
          key: 'a473f58582dca294aa986d502a08fe17'
        }
        getConstellationDetail(params).then(data => {
          self.constellationDetailsDataWeek = data.data
        })
      },
      /**
       * 渲染本月运势
       * */
      renderConstellationDetailsMonth() {
        let self = this
        let searchName = decodeURI(location.search.split('=')[1])
        let params = {
          consName: searchName,
          type: 'month',
          key: 'a473f58582dca294aa986d502a08fe17'
        }
        getConstellationDetail(params).then(data => {
          self.constellationDetailsDataMonth = data.data
        })
      },
      /**
       * 渲染本年运势
       * */
      renderConstellationDetailsYear() {
        let self = this
        let searchName = decodeURI(location.search.split('=')[1])
        let params = {
          consName: searchName,
          type: 'year',
          key: 'a473f58582dca294aa986d502a08fe17'
        }
        getConstellationDetail(params).then(data => {
          self.constellationDetailsDataYear = data.data
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
