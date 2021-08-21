
<template>
  <div id="login">
    <!--<div class="outer_label">
      <img class="inner_label login_logo" src="../../assets/shouye.png">
    </div>-->
    <top-img></top-img>
    <div class="login_form">
      <h1 class="denglu_name">用户登录</h1>
      <input type="text"  class="user icon"  placeholder="用户名" v-model="userName">
      <input type="password"  class="password icon"  placeholder="密码" v-model="password">
      <div class="yanzheng">
        <input type="text" id="code" class="code icon" placeholder="请输入验证码" v-model="code">
        <div class="login-code" @click="refreshCode">
          <s-identify :identifyCode="identifyCode"></s-identify>
        </div>
      </div>
      <!--<button class="login_btn el-button el-button&#45;&#45;primary is-round" type="primary" round>登录</button>-->
      <el-button class="login_btn"   type="danger" round :loading="isBtnLoading">登录</el-button>
      <div style="margin-top: 10px">
        <router-link id="register-but" to="register" href=""><span class="" style="color: #000099;">立即注册</span></router-link>
        <router-link id="forgetpassword-but" to="forgetpassword" href=""><span style="float: right;color: #A9A9AB">忘记密码？</span></router-link>
      </div>
    </div>
  </div>
</template>



<script>
//  import { userLogin } from '../../api/api';
  import SIdentify from '../login/sidentify.vue';
  import TopImg from '../../components/common/TopImg/TopImg.vue'
  export default {
    data() {
      return {
        userName: '',
        password: '',
        isBtnLoading: false
      }
    },
    components: { 
      TopImg,
      SIdentify },
    data () {
      return {
        identifyCodes: "1234567890",
        identifyCode: "",
        code:"",//text框输入的验证码
      }
    },
    mounted(){
     this.identifyCode = "";
     this.makeCode(this.identifyCodes, 4);
    },


    created () {
      if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
        this.userName = JSON.parse( localStorage.getItem('user')).userName;
        this.password = JSON.parse( localStorage.getItem('user')).password;
      }
      this.refreshCode()
    },
    computed: {
      btnText() {
        if (this.isBtnLoading) return '登录中...';
        return '登录';
      }
    },
    methods: {
      login() {
        if (!this.userName) {
          this.$message.error('请输入用户名');
          return;
        }
        if (!this.password) {
          this.$message.error('请输入密码');
          return;
        }
      },
      randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
      },
      refreshCode() {
          this.identifyCode = "";
          this.makeCode(this.identifyCodes, 4);
      },
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
            this.identifyCode += this.identifyCodes[
              this.randomNum(0, this.identifyCodes.length)
            ];
        }
        console.log(this.identifyCode);
      },
    }
  }
</script>
<style>
#login {
  /* 防止窗口大小影响样式 */
    min-width: 1040px;
}
  .login_form {
    padding-top: 5%;
    padding-left: 33%;
    padding-right: 33%;
  }
  .denglu_name{
    font-family: SYHT;
    letter-spacing: 2px;
    font-weight:50;
    font-size: 35px;
    position: 'center';
  }
  .user {
    background: url("../../assets/imgs/login/ic_user.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
  }
  .password {
    background: url("../../assets/imgs/login//ic_password.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
    margin-bottom: 20px;
  }
  .login_logo {
    height: 100%;
  }
  .login_btn {
    width: 100%;
    font-size: 16px;
    background: -webkit-linear-gradient(left, red); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right,red); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, red); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, red); /* 标准的语法 */

    filter: brightness(1.4);
  }
  .yanzheng {
  display: flex;
  flex-direction: row;
  text-align: "center"

  }

  .login-code {
    border-radius: 12px;
    width: 150px;
    outline: none;
    letter-spacing: 5px;
    margin-left: 50px;
    height: 40px;
    transform: translateY(0px);
    cursor: pointer;
  }
</style>
