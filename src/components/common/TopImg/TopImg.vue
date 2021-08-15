<template>
  <div id="topimg">
        <img src="@/assets/imgs/shouye.png"
             alt="">
      </div>
</template>

<script>
export default {
  name: 'TopImg'
}
</script>

<style>
#topimg {
  position: relative;
  width: 100%;
  min-width: 1440px;
  height: 193px;
  background: red;
}
#topimg img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>