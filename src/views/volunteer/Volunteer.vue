<template>

  <div id="volunteer">
    
      <top-img></top-img>
      <topbar></topbar>
      <navbar></navbar>
      
    <div id="volun">
      <el-container >
        <el-aside width="200px" >
          
          <el-menu :default-openeds="['1', '3']" :default-active="this.$route.path">
            <el-submenu index="1">
              <template #title><i class="el-icon-setting"></i>志愿活动</template>
              <el-menu-item-group>
                <template #title></template>
                <el-menu-item index="../volunteerinfor/activity.vue" @click="reloadRouter('/activity')">志愿活动</el-menu-item>
                <el-menu-item index="../volunteerinfor/apply.vue" @click="reloadRouter('/apply')">我的申请</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template #title><i class="el-icon-message"></i>我的服务</template>
              <el-menu-item-group>
                <template #title></template>
                <el-menu-item index="../volunteerinfor/Participating.vue" @click="reloadRouter('/Participating')">参与中</el-menu-item>
                <el-menu-item index="../volunteerinfor/Finish.vue" @click="reloadRouter('/Finish')">已完成</el-menu-item>
                <el-menu-item index="../volunteerinfor/myactivity.vue" @click="reloadRouter('/myactivity')">我的活动</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            
          </el-menu>
          <el-descriptions title="数据统计" width="200px" border="true" column=1 style="margin-bottom: 50px;margin-top:50px">
          <el-descriptions-item label="志愿时长" >225h</el-descriptions-item>
          <el-descriptions-item label="活动次数" >20个</el-descriptions-item>
      </el-descriptions>
        </el-aside>

        <el-container>
          <el-main>
           
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
        </div>
      </div>
</template>

<script>
import TopImg from '../../components/common/TopImg/TopImg.vue'
import Navbar from '../navbar/Navbar.vue'
import Topbar from '../topbar/Topbar.vue';
 export default {
     components: { 
      TopImg,
      Navbar,
      Topbar
      },
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    methods: {
      reloadRouter(path) {
      this.$router.replace({
        path:path,
        query: {
          nextPath: path
        }
      });
    }
    },
  };
</script>
<style>
#volun {
  position: relative;
  height: 1500px;
  padding-left: 12.5%;
  padding-right: 12.5%;
  -webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}
  
</style>