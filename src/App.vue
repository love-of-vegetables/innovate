<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <!-- <router-view/> -->
  <div id="app">
    <div id="appimg">
          <img src="@/assets/imgs/shouye.png" alt="">
    </div>
    <div id="top">
      <Topbar></Topbar>
    </div>
    <div id="mid">
      <Navbar></Navbar>
    </div>
    <div id="bottom">
      <Newsbar></Newsbar>
    </div>
  </div>
</template>
<script>
import Topbar from '@/views/topbar/Topbar'
import Navbar from '@/views/navbar/Navbar'
import Newsbar from '@/views/newsbar/Newsbar'
export default {
  name: 'App',
  components: {
    Topbar,
    Navbar,
    Newsbar
  }
}
</script>
<style>
#appimg {
  position: relative;
  width: 100%;
  height: 193px;
  background: red;
}
#appimg img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
#top {
  margin-bottom: 10px;
}
#mid {
  margin-bottom: 30px;
}
</style>