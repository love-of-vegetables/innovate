<template>
   <div class="examination">
       
      <top-img></top-img>
      <topbar></topbar>
      <navbar></navbar>
        <div id="exam">
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
            width="500">
            </el-table-column>
            <el-table-column
            sortable
            prop="category"
            label="类别"
            width="250"
              column-key="category"
      :filters="[ {text: '入党申请人', value: '入党申请人'},{text: '入党积极分子', value: '入党积极分子'},{text: '党员发展对象', value: '党员发展对象'}, {text: '预备党员', value: '预备党员'}, ]"
      :filter-method="filterHandler">
            </el-table-column>
            <el-table-column
            prop="time"
            label="考试时间"
            width="500">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="250">
            <template  #default="scope">
                <el-button @click="handleClick(scope.row)"
                type="text"
                size="big">
                进入考试
                </el-button>
            </template>
            </el-table-column>
        </el-table>
        <div class="paginationClass">
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
    methods: {
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
    data() {
      return {
         currentPage1:1,
         pageSize:5,
        bondsAllList: [{
          id: '01',
          name: '入党积极分子考试',
          category: '入党积极分子',
          time: '2021/08/18 00:00-2021/08/20 23:59',
        }, {
          id: '02',
          name: '入党积极分子考试',
          category: '入党积极分子',
          time: '2021/08/18 00:00-2021/08/20 23:59',
        },{
          id: '03',
          name: '入党积极分子考试',
          category: '入党积极分子',
          time: '2021/08/18 00:00-2021/08/20 23:59',
        },{
          id: '04',
          name: '入党积极分子考试',
          category: '入党积极分子',
          time: '2021/08/18 00:00-2021/08/20 23:59',
        },{
          id: '05',
          name: '入党积极分子考试',
          category: '入党积极分子',
          time: '2021/08/18 00:00-2021/08/20 23:59',
        },{
          id: '06',
          name: '入党积极分子考试',
          category: '入党积极分子',
          time: '2021/08/18 00:00-2021/08/20 23:59',
        },{
          id: '07',
          name: '入党积极分子考试',
          category: '入党积极分子',
          time: '2021/08/18 00:00-2021/08/20 23:59',
        },{
          id: '08',
          name: '入党积极分子考试',
          category: '入党积极分子',
          time: '2021/08/18 00:00-2021/08/20 23:59',
        },{
          id: '09',
          name: '入党积极分子考试',
          category: '入党积极分子',
          time: '2021/08/18 00:00-2021/08/20 23:59',
        },{
          id: '10',
          name: '入党积极分子考试',
          category: '入党积极分子',
          time: '2021/08/18 00:00-2021/08/20 23:59',
        },{
          id: '11',
          name: '入党积极分子考试',
          category: '入党积极分子',
          time: '2021/08/18 00:00-2021/08/20 23:59',
        },{
          id: '12',
          name: '入党积极分子考试',
          category: '入党积极分子',
          time: '2021/08/18 00:00-2021/08/20 23:59',
        },{
          id: '13',
          name: '入党积极分子考试',
          category: '入党积极分子',
          time: '2021/08/18 00:00-2021/08/20 23:59',
        },{
          id: '14',
          name: '入党积极分子考试',
          category: '入党积极分子',
          time: '2021/08/18 00:00-2021/08/20 23:59',
        }]
      }
    }
  };
</script>

<style >
#exam {
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