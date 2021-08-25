<template>

  <div id="process">
    <top-img></top-img>
    <topbar></topbar>
    <navbar></navbar>
    <p id="Pro-Title">成为党员需要经历的五种身份变化及流程</p>
    <el-collapse @change="handleChange"
                 id="Proc-collapse">
      <el-collapse-item title="入党申请人"
                        name="1">
        <div>向党组织递交书面入党申请后称为“入党申请人”</div>
      </el-collapse-item>
      <el-collapse-item title="入党积极分子"
                        name="2">
        <div>经党小组推荐，支委会研究同意的入党申请人称为“入党积极分子”，开始进行党课培训。</div>
        <div>入党申请人在递交入党申请书后的一个月内会有入党联系人与之谈话，经推优并公示过后即可确定为入党积极分子。</div>
      </el-collapse-item>
      <el-collapse-item title="党员发展对象"
                        name="3">
        <div>经过一年以上的培养教育和考察之后，</div>
        <div>党组织在听取党内外有关群众意见的基础上，</div>
        <div>经支委会认定基本具备党员条件，准备近期发展的入党积极分子称为“发展对象”</div>
      </el-collapse-item>
      <el-collapse-item title="预备党员"
                        name="4">
        <div>党员发展对象在经过支委会确定发展对象并公示无异议后，</div>
        <div>通过支部大会表决，党委谈话、审批后即可吸收成为预备党员</div>
      </el-collapse-item>
      <el-collapse-item title="正式党员"
                        name="5">
        <div>预备期满前（一年）的预备党员提出转正申请，</div>
        <div>在经过群众调查意见、支委会讨论与审核、转正人员名单公示无异议且支部大会决议通过后，即可被接收为“正式党员”</div>
      </el-collapse-item>
    </el-collapse>
    <div id="Proc-remind">
      <p id="remind-title">入党注意事项</p>
      <span>1.申请入党时，必须年满18周岁。</span>
      <el-divider></el-divider>
      <span>2.从入党申请到发展对象期间，只要挂科就不能从积极分子继续发展。</span>
      <el-divider></el-divider>
      <span>3.入党积极分子到预备党员和预备党员到正式党员，均不能少于40个志愿时，否则就延期发展。</span>
      <el-divider></el-divider>
      <span>4.入党申请书应包含自己对党的认识和入党动机、对待入党的态度和决心、自己的政治信念和成长历程，工作，学习，作风等方面的情况。</span>
      <el-divider></el-divider>
      <span>5.申请书必须用黑色签字笔书写，统一使用华农原稿纸进行书写，字数不得少于2000字且最后一页正文必须过半，需用普通400字原稿纸誊写。</span>
      <el-divider></el-divider>
      <span>6.在申请书的背面用铅笔注明年级专业、班级、姓名和学号。</span>
      <el-divider></el-divider>
      <span>7.不允许涂改。</span>
      <el-divider></el-divider>
      <div>

      </div>
    </div>
    <div id="Proc-drawer">
      <el-button @click="drawer = true"
                 type="primary"
                 style="margin-left: 16px;margin-top: 65px">
        查看当前身份状态
      </el-button>

      <el-drawer title="当前入党步骤"
                 v-model="drawer">
        <div style="height: 300px;"
             id="proc-step">
          <el-steps direction="vertical"
                    :active="active"
                    align-center=true>
            <!-- 通过active属性来确定当前步骤 -->
            <el-step title="共青团员"></el-step>
            <el-step title="入党申请人"></el-step>
            <el-step title="入党积极分子"></el-step>
            <el-step title="党员发展对象"></el-step>
            <el-step title="预备党员"></el-step>
            <el-step title="正式党员"></el-step>
          </el-steps>
        </div>
        <div id="Proc-need" style="margin:30px 0 0 30px" v-show="isShowNeed()">
          <!-- 需要根据步骤条中的active属性的值来设定是否显示 -->
          <p style="font-size:20px">40个志愿时完成情况</p>
          <el-progress type="dashboard"
                       :percentage="80" style="margin:10px 0 0 30px">
                    <!-- 通过percentage属性来设置百分比    -->
            <template #default="{ percentage }">
              <span class="percentage-value"
                    style="font-size:30px">{{ percentage }}%</span>
              <br>
              <span class="percentage-label">当前进度</span>
            </template>
          </el-progress>
        </div>
      </el-drawer>

    </div>
  </div>

</template>

<script>
import TopImg from '../../components/common/TopImg/TopImg.vue'
import Topbar from '../topbar/Topbar.vue'
import Navbar from '../navbar/Navbar.vue'

export default {
  data () {
    return {
      // activeNames: ['1'],
      drawer: false,
      active: '1'
    };
  },
  methods: {
    handleChange (val) {
      console.log(val);
    },
    isShowNeed() {
      return this.active === '3' || this.active === '4' || this.active === '5'
    }
  },
  components: {
    TopImg,
    Topbar,
    Navbar
  }
}
</script>

<style>

#process {
  position: relative;
  height: 1500px;
  -webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}
#Pro-Title {
  position: absolute;
  width: 75%;
  height: 80px;
  line-height: 80px;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  font-size: 25px;
  color: #303133;
}
#Proc-collapse {
  width: 75%;
  margin: 0 auto;
  margin-top: 80px;
}

el-collapse-item div {
  height: 30px;
}
.el-collapse-item__header {
  font-size: 20px;
  color: #303133;
}
.el-collapse-item__content {
  font-size: 16px;
  color: #606266;
}
#Proc-remind {
  width: 75%;
  height: 400px;
  top: 1000px;
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-top: 40px;
}
#Proc-remind span {
  font-size: 16px;
  color: #606266;
}
#remind-title {
  margin-bottom: 50px;
  text-align: center;
  font-size: 25px;
  color: #303133;
}
.remind-word {
  line-height: 40px;
  font-size: 20px;
}
#Proc-drawer {
  position: absolute;
  top: 200px;
  margin-left: 1715px;
}
#proc-step {
  padding-left: 50px;
  padding-top: 50px;
}
</style>