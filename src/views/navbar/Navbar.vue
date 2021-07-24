<template>
    <Bar id="NavBar">
      <BarItem class="NavBarItem">
        <a class="nav-a"
           href="">入党流程</a>
      </BarItem>
      <BarItem class="NavBarItem">
        <a class="nav-a"
           href="">党课党考学习</a>
      </BarItem>
      <BarItem class="NavBarItem">
        <a class="nav-a"
           href="">学习中心</a>
      </BarItem>
      <BarItem class="NavBarItem">
        <a class="nav-a"
           href="">在线考试</a>
      </BarItem>
      <BarItem class="NavBarItem">
        <a class="nav-a"
           href="">志愿时活动</a>
      </BarItem>
    </Bar>
</template>

<script>
import Bar from '@/components/common/bar/Bar'
import BarItem from '@/components/common/bar/BarItem'
export default {
  name: 'Navbar',
  components: {
    Bar,
    BarItem
  }
}


</script>

<style>
#NavBar {
  display: flex;
  width: 75%;
  height: 50px;
  line-height: 50px;
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-bottom: 1px #d9d9d9 solid;
}
.NavBarItem {
   flex-grow: 1;
}
#NavBar .nav-a{
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  text-align: center;
  color: rgb(44, 42, 40);
  font-size: 20px;
}
#NavBar .nav-a:hover {
  color: #fff;
  background: #409EFF;
}
</style>