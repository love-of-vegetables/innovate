<template>
  <el-scrollbar id="appScroll"
                height="1000px">
    <div id="app">
      <top-img></top-img>
      <div id="top">
        <topbar></topbar>
      </div>
      <div id="mid">
        <navbar></navbar>
      </div>
      <div id="bottom">
        <newsbar></newsbar>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
import TopImg from '../../components/common/TopImg/TopImg.vue'
import Topbar from '../topbar/Topbar.vue'
import Navbar from '../navbar/Navbar.vue'
import Newsbar from '../newsbar/Newsbar.vue'
export default {
  components: {
    Navbar,
    Newsbar,
    TopImg,
    Topbar,
    Newsbar
  }
  
,
    Navbar}
</script>

<style>
::-webkit-scrollbar {
  display: none;
}

#top {
  margin-bottom: 10px;
}
</style>