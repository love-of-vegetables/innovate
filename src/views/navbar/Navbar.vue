<template>
    <Bar id="NavBar">
      <BarItem class="NavBarItem">
        <router-link class="nav-a"  to="process"
           href="">入党流程</router-link>
      </BarItem>
      <BarItem class="NavBarItem">
        <router-link class="nav-a" to="course"
           href="">党课党考学习</router-link>
      </BarItem>
      <BarItem class="NavBarItem">
        <router-link class="nav-a" to="study"
           href="">学习中心</router-link>
      </BarItem>
      <BarItem class="NavBarItem">
        <router-link class="nav-a" to="examination"
           href="">在线考试</router-link>
      </BarItem>
      <BarItem class="NavBarItem">
        <router-link class="nav-a" to="volunteer"
           href="">志愿时活动</router-link>
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
  },
  methods: {
    process() {
      this.$router.push('/process')
    }
  }
}


</script>

<style>
#NavBar {
  display: flex;
  min-width: 1440px;
  width: 75%;
  height: 50px;
  line-height: 50px;
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-bottom: 1px #d9d9d9 solid;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

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