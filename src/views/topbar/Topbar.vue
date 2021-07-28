<template>
  <div id="top">
    <div></div>
    <div id="topbarSearch"><Search></Search></div>
    <div id="topbarCenter"><PersonCenter></PersonCenter></div>
  </div>
</template>

<script>
import Search from '@/components/common/search/Search'
import PersonCenter from '@/components/common/personCenter/PersonCenter'
export default {
  name: 'Topbar',
  components: {
    Search,
    PersonCenter
  }
}
</script>

<style>
#top {
  font-size: 	18px;
  width: 100%;
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
</style>