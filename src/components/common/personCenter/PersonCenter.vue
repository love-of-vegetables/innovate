<template>
  <div>
    
   <el-dropdown split-button  @click="handleClick">
      <router-link id="Person-a" to="login" href=""><i class="el-icon-s-custom"></i>个人中心</router-link>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item><router-link id="information" to="information" href="">修改信息</router-link></el-dropdown-item>
          <el-dropdown-item><router-link id="password" to="password" href="">修改密码</router-link></el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    
  </div>
</template>

<script>
export default {
  name: 'PersonCenter',
   
}

</script>

<style>
#Person-a {
  text-decoration: none;
  color: rgb(85, 79, 79);
  margin-right: 40px;
  font-size: 18px;
}
#Person-a:hover {
    color: #66afe9;
}

  
.el-icon-arrow-down {
  text-decoration: none;
  color: rgb(85, 79, 79);
  font-size: 19px;
}
</style>