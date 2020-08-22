<template>
  <div class="gradient">
    <div class="gradient-button gradient-color1"></div>
    <div class="gradient-button gradient-color2"></div>
    <div class="gradient-button gradient-color3"></div>
    <div class="gradient-button gradient-color4"></div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.gradient {
  padding: 24px 0;
  overflow: hidden;
  .gradient-button {
    float: left;
    margin: 24px;
    width: 240px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.1);

    // 渐变动效用到
    background-size: 200% auto;
    transition: 0.5s;
    &:hover {
      background-position: right center;
    }
  }

  .gradient-color1 {
    background-image: linear-gradient(
      to right,
      #134e5e 0%,
      #71b280 51%,
      #134e5e 100%
    );
  }

  .gradient-color2 {
    background-image: linear-gradient(
      to right,
      #403b4a 0%,
      #e7e9bb 51%,
      #403b4a 100%
    );
  }

  .gradient-color3 {
    background-image: linear-gradient(
      to right,
      #ff6e7f 0%,
      #bfe9ff 51%,
      #ff6e7f 100%
    );
  }

  .gradient-color4 {
    background-image: linear-gradient(
      to right,
      #000000 0%,
      #434343 51%,
      #000000 100%
    );
  }
}
</style>
