<template>
  <div id="constellation_box">
     <Row>
       <Col span="24">
         <Col span="8" v-for="(item,index) in constellationData" :key="index" class = "constellation-list" >
           <p @click="renderConstellationDetails(item.name)">
             <span>

             </span>
           </p>
           <p>{{item.name}}</p>
           <p>{{item.date}}</p>
         </Col>
       </Col>
     </Row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        constellationData:[{
          name: '白羊座',
          date: '3.21-4.19'
        },{
          name: '金牛座',
          date: '4.20-5.20'
        },{
          name: '双子座',
          date: '5.21-6.21'
        },{
          name: '巨蟹座',
          date: '6.22-7.22'
        },{
          name: '狮子座',
          date: '7.23-8.22'
        },{
          name: '处女座',
          date: '8.23-9.22'
        },{
          name: '天秤座',
          date: '9.23-10.23'
        },{
          name: '天蝎座',
          date: '10.24-11.22'
        },{
          name: '射手座',
          date: '11.23-12.21'
        },{
          name: '摩羯座',
          date: '12.22-1.19'
        },{
          name: '水瓶座',
          date: '1.20-2.18'
        },{
          name: '双鱼座',
          date: '2.19-3.20'
        }]
      }
    },
    methods: {
      renderConstellationDetails(name){
        debugger
        let self = this
        self.$router.push({path: '/constellationDetails?name=' + encodeURI(name)})
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  #constellation_box {
    text-align: center;
    background:linear-gradient(bottom,#C8EFD4,#EDD3ED);
    .constellation-list {
      &:hover {
        cursor: pointer;
        p:nth-of-type(1) {
          span {
            transition: all .3s;
            transform: scale(1.2) rotate(360deg);
          }
        }
      }
      p:nth-of-type(1) {
        height: 15vh;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          display: inline-block;
          width:10vh;
          height:10vh;
        }
      }
      p:nth-of-type(2) {
        height: 5vh;
        color:#B37FEB;
        font: italic 900 3vh/5vh '黑体';
        background: linear-gradient(bottom,#7989FE,#C780FE);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      p:nth-of-type(3) {
        height: 5vh;
        font:italic 900 2.5vh/5vh '黑体';
        background: linear-gradient(top,#7989FE,#C780FE);
        -webkit-background-clip: text;
        -webkit-text-fill-color:transparent;
      }
    }
    .constellation-list:nth-of-type(1) {
      p:nth-of-type(1) {
        span {
          background: url("../assets/img/0.png") no-repeat;
          background-size: cover;
        }
      }
    }
    .constellation-list:nth-of-type(2) {
      p:nth-of-type(1) {
        span {
          background: url("../assets/img/1.png") no-repeat;
          background-size: cover;
        }
      }
    }
    .constellation-list:nth-of-type(3) {
      p:nth-of-type(1) {
        span {
          background: url("../assets/img/2.png") no-repeat;
          background-size: cover;
        }
      }
    }
    .constellation-list:nth-of-type(4) {
      p:nth-of-type(1) {
        span {
          background: url("../assets/img/3.png") no-repeat;
          background-size: cover;
        }
      }
    }
    .constellation-list:nth-of-type(5) {
      p:nth-of-type(1) {
        span {
          background: url("../assets/img/4.png") no-repeat;
          background-size: cover;
        }
      }
    }
    .constellation-list:nth-of-type(6) {
      p:nth-of-type(1) {
        span {
          background: url("../assets/img/5.png") no-repeat;
          background-size: cover;
        }
      }
    }
    .constellation-list:nth-of-type(7) {
      p:nth-of-type(1) {
        span {
          background: url("../assets/img/6.png") no-repeat;
          background-size: cover;
        }
      }
    }
    .constellation-list:nth-of-type(8) {
      p:nth-of-type(1) {
        span {
          background: url("../assets/img/7.png") no-repeat;
          background-size: cover;
        }
      }
    }
    .constellation-list:nth-of-type(9) {
      p:nth-of-type(1) {
        span {
          background: url("../assets/img/8.png") no-repeat;
          background-size: cover;
        }
      }
    }
    .constellation-list:nth-of-type(10) {
      p:nth-of-type(1) {
        span {
          background: url("../assets/img/9.png") no-repeat;
          background-size: cover;
        }
      }
    }
    .constellation-list:nth-of-type(11) {
      p:nth-of-type(1) {
        span {
          background: url("../assets/img/10.png") no-repeat;
          background-size: cover;
        }
      }
    }
    .constellation-list:nth-of-type(12) {
      p:nth-of-type(1) {
        span {
          background: url("../assets/img/11.png") no-repeat;
          background-size: cover;
        }
      }
    }
  }
</style>
