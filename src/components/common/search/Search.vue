<template>
  <form>
    <input type="text" autocomplete="on" id="ssk" style="width:400px;height:38px">
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </form>
</template>

<script>  
export default {
  name: 'Search'
};

</script>

<style>
#ssk {
    text-indent: 10px;
    border: 1px #DCDFE6 solid;
    border-radius: 5px;
    font-size: 16px;
    margin-right: 6px;
}
#ssk:focus {
  border-color: #66afe9 !important;
  outline: 0;
}

</style>