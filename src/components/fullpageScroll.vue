<template>
  <div id="indexNew">
    <div class="logo-box">
      <div class="logo"></div>
      <div class="logo-text">北京卓越讯通科技有限公司</div>
    </div>
    <!--<img src="data:image/png;base64,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" alt="">-->
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
        <css3-caidai></css3-caidai>
        <div class="childBox">
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
      </div>
      <div class="section">
        <css3-toumingsidai></css3-toumingsidai>
        <div class="childBox">
          <p class="h5-text no-m-tb animated bounceInLeft xm-hide" align="center">领先优势</p>
          <p class="h11-text no-m-b animated bounceInLeft no-m-t xm-hide" align="center">leading edge</p>
          <p class="h7-text no-m-b animated bounceInLeft no-m-t m-b-30 normal-family xm-hide" align="center">
            开放数据资源,提升社会公治</p>
          <el-row :gutter="60">
            <el-col :span="18" :offset="3" class="xm-24">
              <el-col :span="8" class="xm-24">
                <div class="p-logo p2-logo1 xm-hide"></div>
                <div class="h7-text m-b-30 xm-hide">核心团队</div>
                <div class="h11-text h11-text-box" align="left">
                  核心研发团队由海外留学博士和国家大数据发展专家咨询委员会委员等多名顶级大数据专家组成，并且与国内外多家科研机构进行广泛深入的技术合作
                </div>
              </el-col>
              <el-col :span="8" class="xm-24">
                <div class="p-logo p2-logo2 xm-hide"></div>
                <div class="h7-text m-b-30 xm-hide">公司实力</div>
                <div class="h11-text h11-text-box" align="left">荣获国家高新技术企业，2016年被列为十三五国家重点研发计划单位，
                  2017年被国家发改委列为38个国家大数据重大工程之一的“国家安全生产监管监察大数据平台”建设单位。
                </div>
              </el-col>
              <el-col :span="8" class="xm-24">
                <div class="p-logo p2-logo3 xm-hide"></div>
                <div class="h7-text m-b-30 xm-hide">技术优势</div>
                <div class="h11-text h11-text-box" align="left">
                  致力于大数据和人工智能AI完整解决方案，拥有完全自主知识产权的大数据平台、NLP语义分析引擎、智能搜索引擎、图计算引擎，深度结合大数据、自然语言分析NLP和人工智能技术，提供数据应用分析服务。
                </div>
              </el-col>
            </el-col>
          </el-row>
        </div>
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
        <css3-lingkuai></css3-lingkuai>
        <div class="childBox">
          <p class="h5-text no-m-tb animated bounceInLeft xm-hide" align="center">合作伙伴</p>
          <p class="h11-text no-m-b animated bounceInLeft no-m-t xm-hide" align="center">cooperative partner</p>
          <p class="h7-text no-m-b animated bounceInLeft no-m-t m-b-30 normal-family xm-hide" align="center">
            开放数据资源,提升社会公治</p>
          <el-row>
            <el-col :span="18" :offset="3" class="xm-24">
              <el-col :span="6" class="xm-12">
                <div class="unit-box">
                  <div class="p-logo p3-logo1 border-radius"></div>
                  <div class="h7-text m-b-30">联通</div>
                  <div class="h11-text h11-text-box" align="left">
                    核心研发团队由海外留学博士和国家大数据发展专家咨询委员会委员等多名顶级大数据专家组成，并且与国内外多家科研机构进行广泛深入的技术合作
                  </div>
                </div>
              </el-col>
              <el-col :span="6" class="xm-12">
                <div class="unit-box">
                  <div class="p-logo p3-logo2 border-radius"></div>
                  <div class="h7-text m-b-30">电信</div>
                  <div class="h11-text h11-text-box" align="left">荣获国家高新技术企业，2016年被列为十三五国家重点研发计划单位，
                    2017年被国家发改委列为38个国家大数据重大工程之一的“国家安全生产监管监察大数据平台”建设单位。
                  </div>
                </div>

              </el-col>
              <el-col :span="6" class="xm-12">
                <div class="unit-box">
                  <div class="p-logo p3-logo3 border-radius"></div>
                  <div class="h7-text m-b-30">华三</div>
                  <div class="h11-text h11-text-box" align="left">
                    致力于大数据和人工智能AI完整解决方案，拥有完全自主知识产权的大数据平台、NLP语义分析引擎、智能搜索引擎、图计算引擎，深度结合大数据、自然语言分析NLP和人工智能技术，提供数据应用分析服务。
                  </div>
                </div>
              </el-col>
              <el-col :span="6" class="xm-12">
                <div class="unit-box">
                  <div class="p-logo p3-logo4 border-radius"></div>
                  <div class="h7-text m-b-30">光力</div>
                  <div class="h11-text h11-text-box" align="left">
                    致力于大数据和人工智能AI完整解决方案，拥有完全自主知识产权的大数据平台、NLP语义分析引擎、智能搜索引擎、图计算引擎，深度结合大数据、自然语言分析NLP和人工智能技术，提供数据应用分析服务。
                  </div>
                </div>
              </el-col>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="section">
        <css3-lingkuai2></css3-lingkuai2>
        <div class="childBox">
          <p class="h5-text no-m-tb animated bounceInLeft xm-hide" align="center">联系我们</p>
          <p class="h11-text no-m-b animated bounceInLeft no-m-t xm-hide" align="center">contact us</p>
          <p class="h7-text no-m-b animated bounceInLeft no-m-t m-b-30 normal-family xm-hide" align="center">
            开放数据资源,提升社会公治</p>
          <el-row>
            <el-col :span="24" class="xm-24">
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
      </div>
      <div class="section">
        <css3-tanxingshengbo></css3-tanxingshengbo>
        <div class="childBox">
          <p class="h5-text no-m-tb animated bounceInLeft xm-hide" align="center">加入我们</p>
          <p class="h11-text no-m-b animated bounceInLeft no-m-t xm-hide" align="center">join us</p>
          <el-row :gutter="60">
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
        </div>
        <div id="foot">
          &copy;版权归北京卓越讯通科技公司所有
        </div>
      </div>
    </full-page>

  </div>

</template>

<script>
  import CSS3_CAIDAI from '@/components/CSS3/caidai'
  import CSS3_TOUMINGSIDAI from '@/components/CSS3/toumingsidai'
  import CSS3_LINGKUAI from '@/components/CSS3/lingkuai'
  import CSS3_LINGKUAI2 from '@/components/CSS3/lingkuai'
  import CSS3_TANXINGSHENGBO from '@/components/CSS3/tanxingshengbo'

  export default {
    components: {
      'css3-caidai': CSS3_CAIDAI,
      'css3-lingkuai': CSS3_LINGKUAI,
      'css3-lingkuai2': CSS3_LINGKUAI2,
      'css3-toumingsidai': CSS3_TOUMINGSIDAI,
      'css3-tanxingshengbo': CSS3_TANXINGSHENGBO
    },
    computed: {},
    mounted() {
      let self = this
      self.addSection()
      // self.$router.push('/#page1')
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
  html {
    font-size: 62.5%;
  }

  #indexNew {
    .section {
      position: relative;
      text-align: center;
    }

    .childBox {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }

    .weather-box {
      position: fixed;
      left: 30%;
      top: 3%;
      z-index: 999;
    }

    .h3-text {
      font-size: 5rem;
      font-family: 'SYZTc';
      color: #fff;
      font-weight: 900;
    }

    .h5-text {
      font-size: 3rem;
      font-family: "ZZGFWY";
      color: #fff;
      font-weight: 900;
    }

    .h7-text {
      font-size: 2rem;
      font-family: "ZZGFWY";
      color: #fff;
      font-weight: 700;
    }

    .h11-text {
      font-size: 1.25rem;
      line-height: 2rem;
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
      margin-top: 1rem;
    }

    .m-t-30 {
      margin-top: 2rem;
    }

    .m-b-30 {
      margin-bottom: 2rem;
    }

    .btn-box {
      color: #fff;
      font-size: 2rem;
      font-weight: 600;

      span {
        display: inline-block;
        background: rgba(125, 189, 227, 1);
        padding: 0.25em 0.75rem;
        border-radius: 0.5rem;
        box-shadow: 0 -2px 5px #fff, 0 2px 5px #000;
        text-shadow: 2px 2px 5px #000;
      }
    }

    .p1-logo {
      width: 25.3125rem;
      height: 4.5rem;
      background: url('../../static/img/p1-logo.png');
      background-size: cover;
    }

    .p1-logo-text {
      width: 47.8125rem;
      height: 2.875rem;
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
      font-size: 1.1rem;
    }

    #menu li {
      display: inline-block;
      margin: 10px 0px;
      position: relative;
    }

    #menu a {
      color: #fff;
      padding: 0 1.1em 1.1em 1.1rem;
      text-decoration: none;
    }

    #menu li.active a:after {
      content: '';
      margin: 0 1.1em 0 1.1rem;
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
      /*background: url('../../static/img/1.png') center no-repeat;*/
      background-size: cover;
    }

    .section:nth-of-type(2) {
      /*background: url('../../static/img/2.png') center no-repeat;*/
      background-size: cover;
    }

    .section:nth-of-type(3) {
      /*background: url('../../static/img/3.png') center no-repeat;*/
      background-size: cover;
    }

    .section:nth-of-type(4) {
      background: url('../../static/img/4.png') center no-repeat;
      background-size: cover;
    }

    .section:nth-of-type(5) {
      /*background: url('../../static/img/5.png') center no-repeat;*/
      background-size: cover;
    }

    .section:nth-of-type(6) {
      /*background: url('../../static/img/6.png') center no-repeat;*/
      background-size: cover;
    }

    #foot {
      width: 100%;
      height: 5rem;
      line-height: 5rem;
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
      height: 2.5rem;
      background: url('../../static/img/logo.png') center no-repeat;
      background-size: cover;
    }

    .logo-text {
      display: inline-block;
      float: left;
      padding: 0 0 0 0.5rem;
      height: 2.5rem;
      font-size: 1.5rem;
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
      width: 10rem;
      height: 10rem;
      background-size: cover;
      margin: 1.7em auto;
    }

    .p6-list {
      background: rgba(73, 105, 156, 0.6);
      padding: 2em 1em 1em 1rem;
      min-height: 24rem;
      border-top: 10px solid rgba(114, 195, 246, 0.6)
    }

    .p6-logo {
      width: 4rem;
      height: 4rem;
      line-height: 4rem;
      border-radius: 50%;
      margin: 1em auto;
      background: #fff;
      color: #0D85BC;
      font-size: 2rem;
    }

    .p6-title {
      font-size: 1.3rem;
      color: #fff;
    }

    .p6-content {
      font-size: 1rem;
      line-height: 2rem;
      color: #fff;
      text-align: left;
    }

    .p-logo {
      margin: 2em auto;
      width: 5rem;
      height: 5rem;
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

    .unit-box {
      margin: 3rem;
    }

    @media screen and (max-width: 1017px) {
      /*.logo-box {*/
      /*display: none;*/
      /*}*/
      .weather-box {
        display: none;
      }
      .logo-box {
        left: 30px;
      }
      .sm-12 {
        width: 50%;
      }
      .p6-list {
        padding: 0.5rem;
        min-height: 16rem;
        margin-bottom: 1rem;
      }
      .p6-logo {
        width: 3rem;
        height: 3rem;
        line-height: 3rem;
        font-size: 1.6rem;
      }
      .unit-box {
        margin: 1rem;
      }
    }
    @media screen and (max-width: 851px) {
      .m-b-30 {
        margin-bottom: 0;
      }
      .weather-box {
        display: none;
      }
      #menu {
        position: absolute;
        background: rgba(0, 0, 0, 0.3);
        top: 55px;
        right: 10px;
        z-index: 90;
        padding-left: 0;
      }
      #menu li {
        display: block;
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
        padding: 0.5rem;
        min-height: 5rem;
        margin-bottom: 0;
      }
      .p6-list-1 {
        margin-top: 4rem;
      }
      .p6-title {
        margin-top: 0;
        margin-bottom: 0.5rem;
      }
      .h11-text-box {
        height: 8rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
      }
      .p-logo {
        margin: 0.1rem auto;
      }
      .unit-box {
        margin: 0.5rem;
      }
    }
  }
</style>
