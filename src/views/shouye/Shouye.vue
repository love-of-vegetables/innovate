<template>
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
</template>

<script>
import TopImg from '@/components/common/TopImg/TopImg.vue'
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
  width: 12px;
  height: 12px;
}
::-webkit-scrollbar-track {
  background: rgb(239, 239, 239);
  border-radius: 2px;
}
::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #888;
}
::-webkit-scrollbar-corner {
  background: #179a16;
}


#top {
  margin-bottom: 10px;
}
</style>