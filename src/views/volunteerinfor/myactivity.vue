<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="id"
      label="编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="180">
    </el-table-column>
    <el-table-column
      prop="hour"
      label="时长"
      width="180">
    </el-table-column>
    <el-table-column
            fixed="right"
            label="操作"
            width="250">
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
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData: [{
          id:"001",
          date: '2016-05-02',
          name: '爱心助残活动',
          status:'已完成',
          hour:'1h',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          id:"002",
          date: '2016-05-04',
          name: '爱心助残活动',
          status:'已完成',
          hour:'1h',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:"003",
          date: '2016-05-01',
          name: '爱心助残活动',
          status:'已完成',
          hour:'1h',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          id:"004",
          date: '2016-05-03',
          name: '爱心助残活动',
          status:'已完成',
          hour:'1h',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:"005",
          date: '2016-05-03',
          name: '爱心助残活动',
          status:'参与中',
          hour:'1h',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:"006",
          date: '2016-05-03',
          name: '爱心助残活动',
          status:'参与中',
          hour:'1h30min',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
</script>
<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>