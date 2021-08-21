<template>
    <div class="study">
      <top-img></top-img>
      <topbar></topbar>
      <navbar></navbar>
        <div id="stu">
        <div  >
        <el-radio-group v-model="radioButton"    class="but">
            <el-radio-button  :label="true" >历史试题</el-radio-button>
            <el-radio-button :label="false" >综合提升</el-radio-button>
        </el-radio-group>
    </div>
    <div class="test" v-show="radioButton" target=".affix-container" style="margin-bottom: 50px;margin-top:50px " >
        <el-space direction="vertical" alignment="start" :size="90">
        <el-space wrap :size="20" style="display:flex;align-items: center;justify-content:space-between;flex-wrap: wrap" >
          <el-card class="box-card" v-for="n in 7" :key="n">
            <template #header>
              <div class="card-header">
                <span class="p">第一课</span>
                <p>中国共产党的发展历程</p>
              </div>
            </template>
            
            <div class="text item">
              <el-button class="button"  type="text">开始测试</el-button>
              <el-button class="button" type="text">下载</el-button>
            </div>
          </el-card>
          <div style="width: 300px; height: 0" v-for="n in 10" :key="n"></div>
        </el-space>
  </el-space>
    </div>
    <div v-show="!radioButton">
        <div style="margin-bottom: 20px;margin-top:30px;">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="关键词">
            <el-input v-model="formInline.user" placeholder="关键词"></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="formInline.region" placeholder="类型">
              <el-option label="时政要闻" value="shizheng"></el-option>
              <el-option label="党建动态" value="dongtai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
        <el-table 
        :data="tempList"
        :header-cell-style="rowClass"
        stripe
        border style="margin-bottom:14px;"
        :empty-text="emptyText">
            <el-table-column
            fixed
            prop="id"
            label="编号"
            width="250">
            </el-table-column>
            <el-table-column
            prop="name"
            label="课程名称"
            width="600">
            </el-table-column>
            <el-table-column
            sortable
            prop="category"
            label="类别"
            width="300"
              column-key="category"
      :filters="[ {text: '时政要闻', value: 'shizheng'},{text: '党建动态', value: 'dongtai'} ]"
      :filter-method="filterHandler">
            </el-table-column>
            
            <el-table-column
            fixed="right"
            label="操作"
            width="300">
            <template  #default="scope">
                <el-button @click="handleClick(scope.row)"
                type="text"
                size="big">
                查看
                </el-button>
                <el-button @click="handleClick(scope.row)"
                type="text"
                size="big">
                下载
                </el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-pagination
    @size-change="handleSizeChange1"
    @current-change="handleCurrentChange1" :current-page="currentPage1"
    :page-sizes="[5, 10, 20, 50]"
    :page-size="pageSize" 
    layout="sizes, prev, pager, next, jumper"
    :total="total">
    </el-pagination>
        </div>
    </div>
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
      name: 'datagovernIssu',
            data() {
            return {
                radioButton:true,
                formInline: {
                  user: '',
                  region: ''
              },
              currentPage1:1,
         pageSize:5,
        bondsAllList: [{
          id: '01',
          name: '入党积极分子考试',
          category: '入党积极分子',
        }, {
          id: '02',
          name: '入党积极分子考试',
          category: '入党积极分子',
        },{
          id: '03',
          name: '入党积极分子考试',
          category: '入党积极分子',
        }]}
            },
             methods: {
      onSubmit() {
        console.log('submit!');
      },
         deleteRow(index, rows) {
        rows.splice(index, 1);
      },
        handleClick(row) {
        console.log(row);
      },formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      handleSizeChange1: function(pageSize) { // 每页条数切换
        this.pageSize = pageSize
        this.handleCurrentChange1(this.currentPage1);
    },
    handleCurrentChange1: function(currentPage) {//页码切换
        this.currentPage1 = currentPage
        this.currentChangePage(this.bondsAllList,currentPage)
       
    },
   currentChangePage(list,currentPage) { 
      let from = (currentPage - 1) * this.pageSize;
      let to = currentPage * this.pageSize;
      this.tempList = [];
      for (; from < to; from++) {
        if (list[from]) {
          this.tempList.push(list[from]);
        }
      }
    }
    },
    }
            
 </script>

 <style>
#stu {
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
.box-card{
  width: 300px;height: 200px;
  float: left;
  position: relative;
  min-width: 100%;
  height: 100%; }
.card-header{
height:80px;

}
.but{
  margin-top:30px;
  display:flex;
  align-items: center;
  justify-content:center;}
  .el-radio-button__inner {
      width: 500px;
      height:50px;
      border-radius: 4px 0px 0px 4px;
      border: 1px solid #D8DCE6;
      font-size: 14px;
      font-weight: 400;
      outline: none;
      box-shadow: none;
    }
.p{
  font-size: 25px;
  
}
p{
    font-size: 15px;
     margin-top:10px
}
.button{
  size: medium ;
  font-size: 15px
}
</style>