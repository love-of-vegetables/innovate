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
  text-align: center;
}
.BarItem:not(:last-child) {
    background: url(~@/assets/imgs/navBackground.jpg) right no-repeat;
}
</style>