
<template>
  <div class="register">
    <top-img></top-img>
    <div class="zhuce">
    <article class="header">
      <header>
        <el-avatar icon="el-icon-user-solid" shape="circle"></el-avatar>
        <span class="login">
          <em class="bold">已有账号？</em>
          <a href="/login">
            <el-button type="primary" size="small">登录</el-button>
          </a>
        </span>
      </header>
    </article>
    <el-steps :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
    </el-steps>
    <section>
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
        autocomplete="off"
      >
        <div v-if="active==0">
          <el-form-item prop="textarea">
            <el-input
              :value="ruleForm.textarea"
              type="textarea"
              :rows="10"
              :readonly="true"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="agreed">
            <el-checkbox v-model="ruleForm.agreed">同意注册协议</el-checkbox>
          </el-form-item>
        </div>
        <div v-if="active==1">
             <el-form-item label="图片" prop="photo">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="手机号" prop="telephone">
            <el-input v-model="ruleForm.telephone" />
            <el-button size="mini" round @click="sendMsg">发送验证码</el-button>
            <span class="status">{{ statusMsg }}</span>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input v-model="ruleForm.code" maxlength="4" />
          </el-form-item>
          <el-form-item label="年级" prop="grade">
            <el-input v-model="ruleForm.grade" />
          </el-form-item>
          <el-form-item label="专业" prop="major">
            <el-input v-model="ruleForm.major" />
          </el-form-item>
          <el-form-item label="学号" prop="id">
            <el-input v-model="ruleForm.id" />
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input v-model="ruleForm.pwd" type="password" />
          </el-form-item>
          <el-form-item label="确认密码" prop="cpwd">
            <el-input v-model="ruleForm.cpwd" type="password" />
          </el-form-item>

        </div>
      </el-form>
    </section>
    <div class="footer">
      <el-button
        v-if="active>0"
        type="primary"
        icon="el-icon-arrow-left"
        @click="prev"
      >上一步</el-button>
      <el-button
        v-if="active<step-1"
        type="primary"
        icon="el-icon-arrow-right"
        @click="next"
      >下一步</el-button>
      <el-button
        v-if="active==step-1"
        type="primary"
        @click="register"
      >同意以下协议并注册</el-button>
      <div class="error">{{ error }}</div>
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
        textarea: '请仔细阅读以下协议',
        agreed: false,
        name: '',
        code: '',
        pwd: '',
        cpwd: '',
        email: ''
      },
      rules: {
         
        agreed: [{
          validator: (rule, value, callback) => {
            console.log('value:' + value)
            if (value !== true) {
              callback(new Error('请确认同意注册协议'))
            } else {
              callback()
            }
          },
          trigger: 'blur'
        }],
         data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    },
        name: [{
          required: true,
          type: 'string',
          message: '请输入姓名',
          trigger: 'blur'
        }],
        telephone: [{
          required: true,
          type: '/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/',
          message: '请输入手机号',
          trigger: 'blur'
        }],
        grade:[{
          required: true,
          type: 'string',
          message: '请输入年级',
          trigger: 'blur'
        }],
        major:[{
          required: true,
          type: 'string',
          message: '请输入专业',
          trigger: 'blur'
        }],
        id:[{
          required: true,
          type: 'string',
          message: '请输入学号',
          trigger: 'blur'
        }],
        pwd: [{
          required: true,
          message: '创建密码',
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
        }]
      }
    }
  },
  layout: 'blank',
  methods: {
    sendMsg: function() {
      const self = this
      let namePass
      let emailPass
      if (self.timerid) {
        return false
      }
      this.$refs['ruleForm'].validateField('name', (valid) => {
        namePass = valid
      })
      self.statusMsg = ''
      if (namePass) {
        return false
      }
      this.$refs['ruleForm'].validateField('email', (valid) => {
        emailPass = valid
      })
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

    next: function() {
      if (this.active === 0) {
        this.$refs['ruleForm'].validateField('agreed', (valid) => {
          if (valid === '') {
            this.active++
          }
        })
      }
    },
    prev: function() {
      if (--this.active < 0) this.active = 0
    },

    // 模拟登录
    register: function() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          setTimeout(
            this.$router.push('/login'), 2000
          )
        }
      })
    }
  }
}
</script>

<style >
.register {
  /* 防止窗口大小影响样式 */
  min-width: 1500px;
}
.zhuce{
      padding-top: 1%;
    padding-left: 30%;
    padding-right: 30%;
}

 .header {
    border-bottom: 2px solid rgb(235, 232, 232);
    min-width: 980px;
    color: #666;
    margin: 0 auto;
    padding: 10px 0;
    width: 980px;
  }
.login {
        float: right;
      }

      .bold {
        font-style: normal;
      }

  .register {
    color: #1890ff;
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

 .section {
    margin: 0 auto 30px;
    padding-top: 30px;
    width: 980px;
    min-height: 300px;
    padding-right: 550px;
    box-sizing: border-box;
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