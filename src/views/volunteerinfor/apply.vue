
<template>
<el-table
    :data="tableData"
    :row-style="{height:'200px'}"
    style="width: 100%">
      <el-table-column
          prop="id"
          width="150"
          
          >
        </el-table-column>
      <el-table-column
        prop="name"
        width="300">
      </el-table-column>
        <el-table-column
          prop="address"
          width="300"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          width="400">
        </el-table-column>
        <el-table-column
            prop="status"
          width="200">
        </el-table-column>
        <el-table-column
            width="200">
            <template  #default="scope">
                <el-button @click="handleClick(scope.row)"
                type="text"
                size="big">
                查看
                </el-button>
                
            </template>
            </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id:'0001',
          name:'爱心助残活动',
          address:'广州市天河区五山街道华南农业大学',
          date:'2021/08/21 8:00-2021/05/21 18:00',
          status:"申请中"
        },
        {
          id:'0001',
          name:'爱心助残活动',
          address:'广州市天河区五山街道华南农业大学',
          date:'2021/08/21 8:00-2021/05/21 18:00',
          status:"申请中"
        },
        {
          id:'0001',
          name:'爱心助残活动',
          address:'广州市天河区五山街道华南农业大学',
          date:'2021/08/21 8:00-2021/05/21 18:00',
          status:"申请中"
        }, ]
      }
    }
  }
</script>

<style>

</style>