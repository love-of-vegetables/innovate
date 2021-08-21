<template>
  <div class="information">
    <top-img></top-img>
    <div class="infor">
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
          <el-form-item label="身份状态" prop="identity">
            <el-input v-model="ruleForm.identity" />
          </el-form-item>
          

        </div>
      </el-form>
    </section>
    <div class="footer">
      <el-button
       
        type="primary"
        @click="prev"
      >保存</el-button>
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
          type: 'string',
          message: '请输入姓名',
          trigger: 'blur'
        }],
        telephone: [{
          type: '/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/',
          message: '请输入手机号',
          trigger: 'blur'
        }],
        grade:[{
          type: 'string',
          message: '请输入年级',
          trigger: 'blur'
        }],
        major:[{
          type: 'string',
          message: '请输入专业',
          trigger: 'blur'
        }],
        id:[{
          type: 'string',
          message: '请输入学号',
          trigger: 'blur'
        }],
        identity:[{
          type: 'string',
          trigger: 'blur'
        }]
      }
    }
  },
  layout: 'blank',

}
</script>

<style >
.infor{
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