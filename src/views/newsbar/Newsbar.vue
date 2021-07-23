<template>
  <div>
    <Bar id="newBar">
      <BarItem class="newBarItem">
        <a class="news-a"
           href="">时政要闻</a>
      </BarItem>
      <BarItem class="newBarItem">
        <a class="news-a"
           href="">党建动态</a>
      </BarItem>
      <BarItem class="newBarItem">
        <a class="news-a"
           href="">热点关注</a>
      </BarItem>
    </Bar>
    <div id="newsBlock"></div>
  </div>
</template>

<script>
import Bar from '@/components/common/bar/Bar'
import BarItem from '@/components/common/bar/BarItem'
export default {
  name: 'Newsbar',
  components: {
    Bar,
    BarItem
  }
}
</script>

<style>
#newBar {
  display: flex;
  width: 80%;
  height: 70px;
  line-height: 70px;
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
}
#newBar .newBarItem {
  flex-grow: 1;
}
.news-a {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  text-align: center;
  color: rgb(44, 42, 40);
  font-size: 20px;
}
.news-a:hover {
  color: #fff;
  background: #409EFF;
}
#newsBlock {
  width: 80%;
  height: 1000px;
  border: 1px orange solid;
  border-top: none;
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
}
</style>