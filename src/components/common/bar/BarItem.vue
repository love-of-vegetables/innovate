<template>
  <div class="BarItem">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BarItem'
}
</script>

<style>
.BarItem {
  background: url(../../../assets/imgs/navBackground.jpg) right no-repeat;
  text-align: center;
}
</style>