<template>
  <div id="top">
    <div id="homeIcon" @click="backHome">
      <Home></Home>
      </div>
    <div id="topbarSearch"><Search></Search></div>
    <div id="topbarCenter"><PersonCenter></PersonCenter></div>
  </div>
</template>

<script>
import Search from '@/components/common/search/Search'
import PersonCenter from '@/components/common/personCenter/PersonCenter'
import Home from '@/components/common/home'
export default {
  name: 'Topbar',
  components: {
    Search,
    PersonCenter,
    Home
  },
  methods: {
    backHome() {
      this.$router.push('/home')
    }
  },
}
</script>

<style>
#top {
  font-size: 	18px;
  width: 100%;
  min-width: 1440px;
  height: 60px;
  border-bottom: rgb(243, 234, 234) 1px solid;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
  display: flex;
  justify-content: space-between; 
  line-height: 60px;
  padding-bottom: 25px;
  background: #fff;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  
}
#topbarSearch {
  margin-left: 180px;
}
#homeIcon {
  width: 100px;
  height: 60px;
  line-height: 60px;
  margin: 10px 0 0 0;
  padding-left: 60px;
  padding-top: 3px;
}
</style>