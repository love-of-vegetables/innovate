<template>
  <div id="newsWrapper">
    <div id="newsTop">
      <div id="newsiocn">
        <p>专栏</p>
        <p>专题</p>
      </div>
      <div><a href="" id="newMainTitle">习近平在西藏考察时强调：全面贯彻新时代党的治藏方略</a></div>
      <div><a href="" id="newSubTitle">在庆祝西藏和平解放70周年之际，中共中央总书记、国家主席、中央军委主席习近平来到西藏，祝贺西藏和平解放70周年，...</a></div>
    </div>
    <div id="mbWrapper">
      <div id="newsLeft">
        <el-carousel height="500px" style="width:800px">
          <el-carousel-item v-for="item in imgs"
                            :key="item.id">
            <img :src="item.src" style="height:500px">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div id="newsRight">
        <div id="newsType">
          <div :class="{actived: index1}" @mouseover="isActive1"><a href="javascript:void(0);">时政要闻</a></div>
          <div :class="{actived: index2}" @mouseover="isActive2"><a href="javascript:void(0);">党建动态</a></div>
          <div :class="{actived: index3}" @mouseover="isActive3"><a href="javascript:void(0);">热点关注</a></div>
        </div>
        <!-- <div v-for=""></div> -->
        <ul class="newsList" :class="{active: index1}">
          <li><a href="">习近平亲切会见中国共产党成立100周年庆祝活动筹办工作各方面代表</a></li>
          <li><a href="">习近平：在庆祝中国共产党成立一百周年大会上的讲话</a></li>
          <li><a href="">中共中央国务院关于加强基层治理体系和治理能力现代化建设的意见</a></li>
          <li><a href="">中办通知：认真学习贯彻习近平总书记重要讲话精神</a></li>
          <li><a href="">陈希出席中央党校2021年春季学期毕业典礼</a></li>
          <li><a href="">中共山东省委十一届十三次全体会议举行</a></li>
          <li><a href="">山东省委常委会召开会议</a></li>
          <li><a href="">省委组织部机关献歌中国共产党百年华诞</a></li>
        </ul>
        <ul class="newsList" :class="{active: index2}">
          <li><a href="">习近平：在庆祝中国共产党成立一百周年大会上的讲话</a></li>
          <li><a href="">习近平亲切会见中国共产党成立100周年庆祝活动筹办工作各方面代表</a></li>
          <li><a href="">中共中央国务院关于加强基层治理体系和治理能力现代化建设的意见</a></li>
          <li><a href="">中办通知：认真学习贯彻习近平总书记重要讲话精神</a></li>
          <li><a href="">陈希出席中央党校2021年春季学期毕业典礼</a></li>
          <li><a href="">中共山东省委十一届十三次全体会议举行</a></li>
          <li><a href="">山东省委常委会召开会议</a></li>
          <li><a href="">省委组织部机关献歌中国共产党百年华诞</a></li>
        </ul>
        <ul class="newsList" :class="{active: index3}">
          <li><a href="">中共中央国务院关于加强基层治理体系和治理能力现代化建设的意见</a></li>
          <li><a href="">习近平：在庆祝中国共产党成立一百周年大会上的讲话</a></li>
          <li><a href="">习近平亲切会见中国共产党成立100周年庆祝活动筹办工作各方面代表</a></li>
          <li><a href="">中办通知：认真学习贯彻习近平总书记重要讲话精神</a></li>
          <li><a href="">陈希出席中央党校2021年春季学期毕业典礼</a></li>
          <li><a href="">中共山东省委十一届十三次全体会议举行</a></li>
          <li><a href="">山东省委常委会召开会议</a></li>
          <li><a href="">省委组织部机关献歌中国共产党百年华诞</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Newsbar',
  data () {
    return {
      imgs: [
        {
          id: '0',
          src: require('@/assets/imgs/text-imgs/news1.jpg')
        },
        {
          id: '1',
          src: require('@/assets/imgs/text-imgs/news2.jpg')
        },
        {
          id: '2',
          src: require('@/assets/imgs/text-imgs/new3.jpg')
        },
        {
          id: '3',
          src: require('@/assets/imgs/text-imgs/new4.jpg')
        }
      ],
      index1: true,
      index2: false,
      index3: false
    }
  },
  methods: {
    isActive1() {
      this.index1 = true
      this.index2 = false
      this.index3 = false
    },
    isActive2() {
      this.index2 = true
      this.index1 = false
      this.index3 = false
    },
    isActive3() {
      this.index3 = true
      this.index1 = false
      this.index2 = false
    },
    leaveDiv1() {
      this.index1 = false
    },
    leaveDiv2() {
      this.index2 = false
    },
    leaveDiv3() {
      this.index3 = false
    }
  }
}
</script>
<style>
#newsWrapper {
  width: 75vw;
  height: 1000px;
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: #F2F6FC;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

}
#newsTop {
  display: flex;
  position: relative;
  width: 100%;
  height: 150px;
  margin: 0 auto;
  background: #F2F6FC;
}
#newsiocn {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50px;
  margin: auto 0;
  width: 80px;
  height: 70px;
  border: 1px red solid;
  border-radius: 6px;
  text-indent: 5px;
  text-align: center;
  letter-spacing: 8px;
  padding-top: 6px;
  font-size: 26px;
  color: #fff;
  background: crimson;
}
#newMainTitle {
  position: absolute;
  left: 160px;
  top: 42px;
  width: 80%;
  color: crimson;
  z-index: 1;
  font-size: 30px;
  text-align: center;
}
#newSubTitle {
  position: absolute;
  width: 80%;
  top: 75px;
  left: 160px;
  padding: 0 150px;
  text-align: center;
  font-size: 15px; 
  color: #909399;
}
#mbWrapper {
  display: flex;
  width: 100%;
  height: 500px;
}
#newsLeft {
  width: 500px;
  height: 100%;
}
#newsType {
  display: flex;
  position: absolute;
  left: 835px;
}
#newsType div {
  box-sizing: border-box;
  width: 180px;
  line-height: 50px;
  background: #DCDFE6;
  margin-right: 6px;
  font-size: 20px;
  text-align: center;
}
#newsType div a{
  display: block;
  width: 100%;
  height: 50px;
  color: #909399;
}
.newsList {
  display: none;
  position: absolute;
  top: 220px;
  left: 835px;
  list-style-type: none;
}
.newsList li {
  position: relative;
  margin-bottom: 10px;
  border-bottom: 1px #C0C4CC dotted;
}
.newsList li a{
  display: inline-block;
  width: 535px;
  height: 40px;
  line-height: 40px;
  text-indent: 20px;
  font-size: 18px;
  color: #909399;
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
}
.newsList li::before {
    position: absolute;
    height: 50px;
    width: 5px;
    top: 15px;
    display: inline-block;
    content: "●"; /* '\25CF' */
    color: #C0C4CC;
    font-size: 6px;
}
.newsList li a:hover {
  color: crimson;
}
#newsRight #newsType .actived{
  border-top: 2px crimson solid;
  background: #FFFFFF;
}
.active {
  display: block;
}
</style>