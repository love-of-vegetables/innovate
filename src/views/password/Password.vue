
<template>
  <div class="password">
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
          <el-form-item label="原密码" prop="opwd">
            <el-input v-model="ruleForm.opwd"  type="password"/>
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
      <router-link id="forgetpassword-but" to="forgetpassword" href=""><span style="float: right;color: #A9A9AB">忘记密码？</span></router-link>
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
        opwd:[{
          required: true,
          message: '请输入原密码',
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
        }]
        }
      }
    }
  },
  layout: 'blank',
}
</script>
<style>
.pass{
      padding-top: 8%;
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