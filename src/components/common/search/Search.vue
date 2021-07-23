<template>
  <form>
    <input type="text" autocomplete="on" id="ssk" style="width:400px;height:38px">
    <button id="press"><i class="el-icon-search btnSearch"></i>搜索</button>
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
    border: 1px #acb3b8 solid;
    border-radius: 5px;
    font-size: 16px;
}
#ssk:focus {
  border-color: #66afe9 !important;
  outline: 0;
}
#press {
  width: 65px;
  height: 38px;
  font-size: 16px;
  background:#0086DB;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 3px;
}
#press .btnSearch {
  margin-right: 5px;
}
</style>