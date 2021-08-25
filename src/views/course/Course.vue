<template>
  <div id="course">
    <top-img></top-img>
    <topbar></topbar>
    <navbar></navbar>
    <div id="courseMain">
      <div id="courNavbar">
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect">
          <el-menu-item index="1">党课学习</el-menu-item>
          <el-menu-item index="2">党考模拟</el-menu-item>
          <el-menu-item index="3">历史记录</el-menu-item>
          <el-menu-item index="4">我的收藏</el-menu-item>
        </el-menu>
      </div>
      <div id="coursePart">
        <div id="course-classes">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopImg from '../../components/common/TopImg/TopImg.vue'
import Topbar from '../topbar/Topbar.vue'
import Navbar from '../navbar/Navbar.vue'
export default {

  data () {
    return {
      activeIndex: '1'
    };
  },
  components: { TopImg, Topbar, Navbar },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}

</script>

<style>
body {
  background: #f4f5f7;
}
#course {
  min-width: 1440px;
}
#courseMain {
  width: 75%;
  margin: 0 auto;
}
#courNavbar {
  border: 1px solid #eee;
  border-radius: 4px;
  background: #fff;
}
#coursePart {
  width: 100%;
  height: 700px;
  margin-top: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  background: #fff;
}
</style>