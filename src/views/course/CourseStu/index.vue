<template>
  <div>
    <div style="margin-top:20px;">
      <el-space direction="vertical"
                alignment="start"
                :size="90">
        <el-space wrap
                  :size="20"
                  style="display:flex;align-items: center;justify-content:space-between;flex-wrap: wrap">
          <el-card class="box-card"
                   v-for="n in 7"
                   :key="n">
            <template #header>
              <div class="card-header">
                <span class="p">第{{n}}课</span>
                <p>中国共产党的发展历程</p>
              </div>
            </template>

            <div class="text item">
              <el-button class="button"
                         type="text">观看</el-button>
            </div>
          </el-card>
          <div style="width: 300px; height: 0"
               v-for="n in 10"
               :key="n"></div>
        </el-space>
      </el-space>
    </div>
    
    <el-pagination style="text-align: center;margin-bottom:100px"
                   :current-page="5"
                   :page-sizes="[3, 5, 10]"
                   :page-size="3"
                   layout="prev, pager, next, jumper, ->, sizes, total"
                   :total="99"
                   @current-change="handleCurrentChange"
                   @size-change="handleSizeChange">
    </el-pagination>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>