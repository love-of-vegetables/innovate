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
                 @select="handleSelect"
                 router="true">
          <el-menu-item index="/course/courseStu"
                        @click="toCourseStu">视频学习</el-menu-item>
          <el-menu-item index="/course/test"
                        @click="toTest">课后练习</el-menu-item>
          <el-menu-item index="/course/record"
                        @click="toRecord">模拟试卷</el-menu-item>
        </el-menu>
      </div>
      <router-view></router-view>
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
      activeIndex: this.$route.fullPath
    };
  },
  components: { TopImg, Topbar, Navbar },
  methods: {
    handleSelect (key, keyPath) {
      this.activeIndex = key
    },
    // 党课学习路由跳转
    toCourseStu () {
      this.$router.push({ name: 'Course' })
    },
    toTest () {
      this.$router.push({ name: 'Test' })
    },
    toRecord () {
      this.$router.push({ name: 'Record' })
    },
  },
  watch: {
    $route(val, oldVal) {
      this.activeIndex = val.fullPath
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
.card-header p {
  font-size: 25px;
}
</style>