<template>
  <div class="Bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style>
.Bar {
  border: 1px #fff solid;
  background: #F2F6FC;
}
</style>