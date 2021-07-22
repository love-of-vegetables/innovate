<template>
  <div id="top">
    <div></div>
    <div id="topbarSearch"><Search></Search></div>
    <div id="topbarCenter"><PersonCenter></PersonCenter></div>
  </div>
</template>

<script>
import Search from '@/common/search/Search'
import PersonCenter from '@/common/personCenter/PersonCenter'
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
  width: 100%;
  height: 60px;
  border-bottom: rgb(243, 234, 234) 1px solid;
  box-shadow: 0px 3px 8px rgb(212, 208, 208);
  display: flex;
  justify-content: space-between; 
  line-height: 60px;
  padding-bottom: 25px;
  background: #fff;
}
</style>