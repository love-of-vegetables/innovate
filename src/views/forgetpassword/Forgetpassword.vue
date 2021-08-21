
<template>
  <div class="forgetpassword">
    <top-img></top-img>
    
    <div class="pass">
        <section>
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
        autocomplete="off"
      >
        
      <div >
          <el-form-item label="手机号" prop="telephone">
            <el-input v-model="ruleForm.telephone" />
            <el-button size="mini" round @click="sendMsg">发送验证码</el-button>
            <span class="status">{{ statusMsg }}</span>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input v-model="ruleForm.code" maxlength="4" />
          </el-form-item>
          <el-form-item label="新密码" prop="pwd">
            <el-input v-model="ruleForm.pwd" type="password" />
          </el-form-item>
          <el-form-item label="确认新密码" prop="cpwd">
            <el-input v-model="ruleForm.cpwd" type="password" />
          </el-form-item>

        </div>
      </el-form>
    </section>
        
    <div class="footer">
      <el-button
        type="primary"
      >确定</el-button>
    </div>
  </div>
  </div>
</template>

<script>
  import TopImg from '../../components/common/TopImg/TopImg.vue'

 
export default {
     components: { 
      TopImg,
      },
  data() {
    return {
      step: 2,
      active: 0,
      statusMsg: '',
      error: '',
      ruleForm: {
        agreed: false,
        name: '',
        code: '',
        pwd: '',
        cpwd: '',
        email: ''
      },
      rules: {
         
         data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
        telephone: [{
          required: true,
          type: '/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/',
          message: '请输入手机号',
          trigger: 'blur'
        }],
        pwd: [{
          required: true,
          message: '创建新密码',
          trigger: 'blur'
        }],
        cpwd: [{
          required: true,
          message: '确认密码',
          trigger: 'blur'
        }, {
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'))
            } else if (value !== this.ruleForm.pwd) {
              callback(new Error('两次输入密码不一致'))
            } else {
              callback()
            }
          },
          trigger: 'blur'
        }],
        sendMsg: function() {
      
      // 模拟验证码发送
      if (!namePass && !emailPass) {
        let count = 60
        self.statusMsg = `验证码已发送,剩余${count--}秒`
        self.timerid = setInterval(function() {
          self.statusMsg = `验证码已发送,剩余${count--}秒`
          if (count === 0) {
            clearInterval(self.timerid)
          }
        }, 1000)
      }
    },
        }
      }
    }
  },
  layout: 'blank',
}
</script>
<style>
.pass{
      padding-top: 1%;
    padding-left: 30%;
    padding-right: 30%;
}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  a {
    color: #1890ff;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
  }

 
    .status {
      font-size: 12px;
      margin-left: 20px;
      color: #e6a23c;
    }

    .error {
      color: red;
    }
 

  .footer{
    text-align: center;
  }

</style>