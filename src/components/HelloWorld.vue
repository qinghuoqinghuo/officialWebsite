<template>
  <div id="indexNew">
    <div class="logo-box">
      <div class="logo"></div>
      <div class="logo-text">北京卓越讯通科技有限公司</div>
    </div>
    <!--<div id="SOHUCS" sid="prod_3cb929b64e401a60f0bebcff401a6d6d"></div>-->
    <iframe class="weather-box" width="700" scrolling="no" height="70" frameborder="0" allowtransparency="true"
            src="//i.tianqi.com/index.php?c=code&id=2&color=%23FFFFFF&bgc=%23&icon=1&py=chaoyang&num=3&site=12"></iframe>
    <!--<iframe class="weather-box" width="700" scrolling="no" height="70" frameborder="0"-->
            <!--allowtransparency="true"-->
            <!--src="//i.tianqi.com/index.php?c=code&id=2&color=%23FFFFFF&bgc=%23&icon=3&py=chaoyang&num=3&site=12"></iframe>-->
    <!--<iframe width="420" scrolling="no" height="60" style="position:fixed;left:30%;top:3%;z-index: 999;" frameborder="0"-->
    <!--allowtransparency="true"-->
    <!--src="//i.tianqi.com/index.php?c=code&id=12&color=%23FFFFFF&bgc=%23&icon=1&num=5&site=12"></iframe>-->
    <ul id="menu">
      <li :data-menuanchor="returnPageId(index)" :class="{active:item.active===true}" v-for="(item,index) in menuData"
          @click="selectMenu(item)">
        <a :href="returnId(index)">{{item.name}}</a>
      </li>
    </ul>
    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section">
        <el-row>
          <el-col :span="18" :offset="3">
            <el-col :span="24">
              <p class="h3-text no-m-b animated bounceInLeft m-t-30" align="left">TOPCOM</p>
            </el-col>
            <el-col :span="24">
              <p class="h5-text no-m-tb m-b-30 animated bounceInRight" align="left">中国领先的大数据技术与应用服务商</p>
            </el-col>
            <el-col :span="8" class="xm-24">
              <div class="btn-box animated bounceInUp"><span>安全生产</span></div>
            </el-col>
            <el-col :span="8" class="xm-24">
              <div class="btn-box animated bounceInUp"><span>风险预警</span></div>
            </el-col>
            <el-col :span="8" class="xm-24">
              <div class="btn-box animated bounceInUp"><span>舆情大数据</span></div>
            </el-col>
          </el-col>
        </el-row>
      </div>
      <div class="section">
        <p class="h5-text no-m-tb animated bounceInLeft xm-hide" align="center">领先优势</p>
        <p class="h11-text no-m-b animated bounceInLeft no-m-t xm-hide" align="center">leading edge</p>
        <p class="h7-text no-m-b animated bounceInLeft no-m-t m-b-30 normal-family xm-hide" align="center">
          开放数据资源,提升社会公治</p>
        <el-row :gutter="60">
          <el-col :span="18" :offset="3" class="xm-24">
            <el-col :span="8" class="xm-24">
              <div class="p-logo p2-logo1 xm-hide"></div>
              <div class="h7-text m-b-30 xm-hide">核心团队</div>
              <div class="h11-text h11-text-1" align="left">
                核心研发团队由海外留学博士和国家大数据发展专家咨询委员会委员等多名顶级大数据专家组成，并且与国内外多家科研机构进行广泛深入的技术合作
              </div>
            </el-col>
            <el-col :span="8" class="xm-24">
              <div class="p-logo p2-logo2 xm-hide"></div>
              <div class="h7-text m-b-30 xm-hide">公司实力</div>
              <div class="h11-text" align="left">荣获国家高新技术企业，2016年被列为十三五国家重点研发计划单位，
                2017年被国家发改委列为38个国家大数据重大工程之一的“国家安全生产监管监察大数据平台”建设单位。
              </div>
            </el-col>
            <el-col :span="8" class="xm-24">
              <div class="p-logo p2-logo3 xm-hide"></div>
              <div class="h7-text m-b-30 xm-hide">技术优势</div>
              <div class="h11-text" align="left">
                致力于大数据和人工智能AI完整解决方案，拥有完全自主知识产权的大数据平台、NLP语义分析引擎、智能搜索引擎、图计算引擎，深度结合大数据、自然语言分析NLP和人工智能技术，提供数据应用分析服务。
              </div>
            </el-col>
          </el-col>
        </el-row>

        <!--<div class="slide">-->
        <!--<h3>关于1</h3>-->
        <!--</div>-->
        <!--<div class="slide">-->
        <!--<h3>关于2</h3>-->
        <!--</div>-->
        <!--<div class="slide">-->
        <!--<h3>关于3</h3>-->
        <!--</div>-->
      </div>
      <div class="section">
        <p class="h5-text no-m-tb animated bounceInLeft xm-hide" align="center">合作伙伴</p>
        <p class="h11-text no-m-b animated bounceInLeft no-m-t xm-hide" align="center">cooperative partner</p>
        <p class="h7-text no-m-b animated bounceInLeft no-m-t m-b-30 normal-family xm-hide" align="center">
          开放数据资源,提升社会公治</p>
        <el-row :gutter="60">
          <el-col :span="18" :offset="3" class="xm-24">
            <el-col :span="6" class="xm-12">
              <div class="p-logo p3-logo1 border-radius"></div>
              <div class="h7-text m-b-30">联通</div>
              <div class="h11-text" align="left">核心研发团队由海外留学博士和国家大数据发展专家咨询委员会委员等多名顶级大数据专家组成，并且与国内外多家科研机构进行广泛深入的技术合作
              </div>
            </el-col>
            <el-col :span="6" class="xm-12">
              <div class="p-logo p3-logo2 border-radius"></div>
              <div class="h7-text m-b-30">电信</div>
              <div class="h11-text" align="left">荣获国家高新技术企业，2016年被列为十三五国家重点研发计划单位，
                2017年被国家发改委列为38个国家大数据重大工程之一的“国家安全生产监管监察大数据平台”建设单位。
              </div>
            </el-col>
            <el-col :span="6" class="xm-12">
              <div class="p-logo p3-logo3 border-radius"></div>
              <div class="h7-text m-b-30">华三</div>
              <div class="h11-text" align="left">
                致力于大数据和人工智能AI完整解决方案，拥有完全自主知识产权的大数据平台、NLP语义分析引擎、智能搜索引擎、图计算引擎，深度结合大数据、自然语言分析NLP和人工智能技术，提供数据应用分析服务。
              </div>
            </el-col>
            <el-col :span="6" class="xm-12">
              <div class="p-logo p3-logo4 border-radius"></div>
              <div class="h7-text m-b-30">光力</div>
              <div class="h11-text" align="left">
                致力于大数据和人工智能AI完整解决方案，拥有完全自主知识产权的大数据平台、NLP语义分析引擎、智能搜索引擎、图计算引擎，深度结合大数据、自然语言分析NLP和人工智能技术，提供数据应用分析服务。
              </div>
            </el-col>
          </el-col>
        </el-row>
      </div>
      <div class="section">
        <p class="h5-text no-m-tb animated bounceInLeft xm-hide" align="center">联系我们</p>
        <p class="h11-text no-m-b animated bounceInLeft no-m-t xm-hide" align="center">contact us</p>
        <p class="h7-text no-m-b animated bounceInLeft no-m-t m-b-30 normal-family xm-hide" align="center">
          开放数据资源,提升社会公治</p>
        <el-row :gutter="30">
          <el-col :span="14" :offset="5" class="xm-24">
            <el-col :span="16" class="xm-24">
              <p class="h7-text" align="left">010-64391415</p>
              <p class="h7-text" align="left">contacts@bjtopcom.com</p>
              <p class="h7-text" align="left">北京朝阳区望京科技园E座3楼309A</p>
            </el-col>
            <el-col :span="8" class="xm-24">
              <div class="erweima"></div>
              <!--<p class="h7-text" align="center">官方微信</p>-->
            </el-col>
          </el-col>
        </el-row>
      </div>
      <div class="section">
        <p class="h5-text no-m-tb animated bounceInLeft xm-hide" align="center">加入我们</p>
        <p class="h11-text no-m-b animated bounceInLeft no-m-t xm-hide" align="center">join us</p>
        <el-row :gutter="30">
          <el-col :span="18" :offset="3" class="xm-24">
            <el-col :span="6" class="xm-24 sm-12">
              <div class="p6-list p6-list-1">
                <div class="p6-logo xm-hide">产品</div>
                <p class="p6-title">产品经理</p>
                <p class="p6-content">负责大数据平台PC端/webApp移动端产品规划以及产品功能设计</p>
              </div>
            </el-col>
            <el-col :span="6" class="xm-24 sm-12">
              <div class="p6-list">
                <div class="p6-logo xm-hide">销售</div>
                <p class="p6-title">区域销售经理</p>
                <p class="p6-content">负责区域内大数据应用产品的销售和管理</p>
              </div>
            </el-col>
            <el-col :span="6" class="xm-24 sm-12">
              <div class="p6-list ">
                <div class="p6-logo xm-hide">前端</div>
                <p class="p6-title">WEB前端开发工程师</p>
                <p class="p6-content">负责公司Web前端系统设计、开发与实现</p>
              </div>
            </el-col>
            <el-col :span="6" class="xm-24 sm-12">
              <div class="p6-list">
                <div class="p6-logo xm-hide">后端</div>
                <p class="p6-title">后端开发工程师</p>
                <p class="p6-content">负责/参与网站项目或系统模块的研发工作，包括需求分析、设计、编码、测设等环节</p>
              </div>
            </el-col>
          </el-col>
        </el-row>
        <div id="foot">
          &copy;版权归北京卓越讯通科技公司所有
        </div>
      </div>
    </full-page>

  </div>

</template>

<script>

  export default {
    components: {},
    computed: {},
    mounted() {
      let self = this
      self.addSection()
      self.$router.push('/#page1')
      // console.log(getActiveSection())
    },
    data: function () {
      let self = this
      return {
        menuData: [{
          name: '首页',
          active: true
        }, {
          name: '优势',
          active: false
        }, {
          name: '伙伴',
          active: false
        }, {
          name: '联系',
          active: false
        }, {
          name: '加入',
          active: false
        }],
        options: {
          licenseKey: null,
          afterLoad: function (origin, destination, direction) {
          },
          onLeave: function (origin, destination, direction) {
            self.menuData[origin.index].active = false
            self.menuData[destination.index].active = true
            // self.$router.push('/indexNew#page' + parseInt(destination.index + 1))
          },
          // afterRender: this.addSection,
          afterResize: function (width, height) {
          },
          afterResponsive: function (isResponsive) {
          },
          afterSlideLoad: function (section, origin, destination, direction) {
          },
          onSlideLeave: function (section, origin, destination, direction) {
          },
          // navigation: true, // 右侧导航点显示
          anchors: [],
          // menu: '#menu',
          // sectionSelector: '#menu',
          sectionsColor: []
          // sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
        }
      }
    },
    methods: {
      /**
       * 点击导航
       * */
      selectMenu(item) {
        let self = this
        self.menuData.forEach(k => {
          k.active = false
        })
        item.active = true
      },
      /**
       * 返回页面id
       * */
      returnPageId: function (index) {
        return 'page' + parseInt(index + 1)
      },
      /**
       * 返回锚点
       * */
      returnId: function (index) {
        return '#page' + parseInt(index + 1)
      },
      /**
       *
       * */
      afterLoad: function (origin, destination, direction) {
      },
      /**
       * 提前获取导航个数
       * */
      addSection: function (e) {
        let self = this
        self.options.anchors = []
        self.menuData.forEach((item, index) => {
          self.options.anchors.push('page' + parseInt(index + 1))
        })
        // var newSectionNumber = document.querySelectorAll('.fp-section').length + 1

        // creating the section div
        // var section = document.createElement('div')
        // section.className = 'section'
        // section.innerHTML = `<h3>Section ${newSectionNumber}</h3>`

        // adding section
        // document.querySelector('#fullpage').appendChild(section)

        // creating the section menu element
        // var sectionMenuItem = document.createElement('li')
        // sectionMenuItem.setAttribute('data-menuanchor', 'page' + newSectionNumber)
        // sectionMenuItem.innerHTML = `<a href="#page${newSectionNumber}">Section${newSectionNumber}</a>`

        // adding anchor for the section
        // this.options.anchors.push(`page${newSectionNumber}`)

        // we have to call `update` manually as DOM changes won't fire updates
        // requires the use of the attribute ref="fullpage" on the
        // component element, in this case, <full-page>
        // ideally, use an ID element for that element too
        // this.$refs.fullpage.build()
      },

      removeSection: function () {
        var sections = document.querySelector('#fullpage').querySelectorAll('.fp-section')
        var lastSection = sections[sections.length - 1]

        // removing the last section
        lastSection.parentNode.removeChild(lastSection)

        // removing the last anchor
        this.options.anchors.pop()

        // removing the last item on the sections menu
        var sectionsMenuItems = document.querySelectorAll('#menu li')
        var lastItem = sectionsMenuItems[sectionsMenuItems.length - 1]
        lastItem.parentNode.removeChild(lastItem)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  #indexNew {
    .section {
      position: relative;
      text-align: center;
    }

    .weather-box {
      position: fixed;
      left: 30%;
      top: 3%;
      z-index: 999;
    }

    .h3-text {
      font-size: 5em;
      font-family: 'SYZTc';
      color: #fff;
      font-weight: 900;
    }

    .h5-text {
      font-size: 3em;
      font-family: "ZZGFWY";
      color: #fff;
      font-weight: 900;
    }

    .h7-text {
      font-size: 2em;
      font-family: "ZZGFWY";
      color: #fff;
      font-weight: 700;
    }

    .h11-text {
      font-size: 1.25em;
      line-height: 2em;
      font-family: "ZZGFWY";
      color: #fff;
      font-weight: 500;
    }

    .no-m-tb {
      margin-top: 0;
      margin-bottom: 0;
    }

    .no-m-t {
      margin-top: 0;
    }

    .no-m-b {
      margin-bottom: 0;
    }

    .m-t-15 {
      margin-top: 1em;
    }

    .m-t-30 {
      margin-top: 2em;
    }

    .m-b-30 {
      margin-bottom: 2em;
    }

    .btn-box {
      color: #fff;
      font-size: 2em;
      font-weight: 600;

      span {
        display: inline-block;
        background: rgba(125, 189, 227, 1);
        padding: 0.25em 0.75em;
        border-radius: 0.5em;
        box-shadow: 0 -2px 5px #fff, 0 2px 5px #000;
        text-shadow: 2px 2px 5px #000;
      }
    }

    .p1-logo {
      width: 25.3125em;
      height: 4.5em;
      background: url('../../static/img/p1-logo.png');
      background-size: cover;
    }

    .p1-logo-text {
      width: 47.8125em;
      height: 2.875em;
      background: url('../../static/img/p1-logo-text.png');
      background-size: cover;
    }

    #menu {
      position: fixed;
      top: 13px;
      right: 20px;
      z-index: 70;
      -webkit-font-smoothing: antialiased;
      -moz-font-smoothing: antialiased;
      letter-spacing: 1px;
      font-size: 1.1em;
    }

    #menu li {
      display: inline-block;
      margin: 10px 0px;
      position: relative;
    }

    #menu a {
      color: #fff;
      padding: 0 1.1em 1.1em 1.1em;
      text-decoration: none;
    }

    #menu li.active a:after {
      content: '';
      margin: 0 1.1em 0 1.1em;
      height: 2px;
      background: #fff;
      display: block;
      position: absolute;
      bottom: -6px;
      left: 0;
      right: 0;
      display: block;
    }

    .section:nth-of-type(1) {
      background: url('../../static/img/1.png') center no-repeat;
      background-size: cover;
    }

    .section:nth-of-type(2) {
      background: url('../../static/img/2.png') center no-repeat;
      background-size: cover;
    }

    .section:nth-of-type(3) {
      background: url('../../static/img/3.png') center no-repeat;
      background-size: cover;
    }

    .section:nth-of-type(4) {
      background: url('../../static/img/4.png') center no-repeat;
      background-size: cover;
    }

    .section:nth-of-type(5) {
      background: url('../../static/img/5.png') center no-repeat;
      background-size: cover;
    }

    .section:nth-of-type(6) {
      background: url('../../static/img/6.png') center no-repeat;
      background-size: cover;
    }

    #foot {
      width: 100%;
      height: 5em;
      line-height: 5em;
      color: #fff;
      position: fixed;
      background: url('../../static/img/foot.png') center no-repeat;
      background-size: cover;
      bottom: 0;
      left: 0;
      z-index: 999;
    }

    .logo-box {
      position: fixed;
      top: 35px;
      left: 200px;
      z-index: 70;
    }

    .logo {
      display: inline-block;
      float: left;
      width: 65px;
      height: 2.5em;
      background: url('../../static/img/logo.png') center no-repeat;
      background-size: cover;
    }

    .logo-text {
      display: inline-block;
      float: left;
      padding: 0 0 0 0.5rem;
      height: 2.5rem;
      font-size: 1.5em;
      line-height: 2.5rem;
      color: #fff;
    }


    .p2-logo1 {
      background: url('../../static/img/p2-logo2.png') center no-repeat;
    }

    .p2-logo2 {
      background: url('../../static/img/p2-logo1.png') center no-repeat;
    }

    .p2-logo3 {
      background: url('../../static/img/p2-logo3.png') center no-repeat;
    }

    .p3-logo1 {
      background: url('../../static/img/p3-logo1.png') center no-repeat;
    }

    .p3-logo2 {
      background: url('../../static/img/p3-logo2.png') center no-repeat;
    }

    .p3-logo3 {
      background: url('../../static/img/p3-logo3.png') center no-repeat;
    }

    .p3-logo4 {
      background: url('../../static/img/p3-logo4.png') center no-repeat;
    }

    .erweima {
      background: url('../../static/img/erweima.png') center no-repeat;
      width: 10em;
      height: 10em;
      background-size: cover;
      margin: 1.7em auto;
    }

    .p6-list {
      background: rgba(73, 105, 156, 0.6);
      padding: 2em 1em 1em 1em;
      min-height: 24em;
      border-top: 10px solid rgba(114, 195, 246, 0.6)
    }

    .p6-logo {
      width: 4em;
      height: 4em;
      line-height: 4em;
      border-radius: 50%;
      margin: 1em auto;
      background: #fff;
      color: #0D85BC;
      font-size: 2em;
    }

    .p6-title {
      font-size: 1.3em;
      color: #fff;
    }

    .p6-content {
      font-size: 1em;
      line-height: 2em;
      color: #fff;
      text-align: left;
    }

    .p-logo {
      margin: 2em auto;
      width: 5em;
      height: 5em;
      background-size: cover;
    }

    .border-radius {
      border-radius: 50%;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
    }

    .normal-family {
      font-family: "Microsoft YaHei";
      font-weight: 500;
    }

    @media screen and (max-width: 1017px) {
      /*.logo-box {*/
      /*display: none;*/
      /*}*/
      .logo-box {
        left: 30px;
      }
      .sm-12 {
        width: 50%;
      }
      .p6-list {
        padding: 0.5em;
        min-height: 16em;
        margin-bottom: 1em;
      }
      .p6-logo {
        width: 3em;
        height: 3em;
        line-height: 3em;
        font-size: 1.6em;
      }
    }
    @media screen and (max-width: 851px) {
      #menu {
        top: 63px;
      }
      .xm-hide {
        display: none;
      }
      .xm-24 {
        width: 100%;
        margin: 10px 0;
      }
      .xm-12 {
        width: 50%;
        margin: 10px 0;
      }
      .p6-list {
        padding: 0.5em;
        min-height: 5em;
        margin-bottom: 0;
      }
      .p6-list-1 {
        margin-top: 4em;
      }
      .p6-title {
        margin-top: 0;
        margin-bottom: 0.5em;
      }
      .h11-text-1 {
        margin-top: 5em;
      }
    }
  }
</style>
