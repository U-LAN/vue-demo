<template>
  <div class="rotate">
    <div class="sphere">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="sphere">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="sphere">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="sphere">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@keyframes rotate {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

.rotate {
  background: #000;
  position: fixed;
  top: 60px;
  right: 24px;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  animation: rotate 20s linear infinite;
  // zoom: 6;

  .sphere {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;

    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      background: radial-gradient(#ccc, #fff);
      border-radius: 50%;
    }

    span:nth-child(1) {
      transform: rotateY(0deg);
    }
    span:nth-child(2) {
      transform: rotateY(30deg);
    }
    span:nth-child(3) {
      transform: rotateY(60deg);
    }
    span:nth-child(4) {
      transform: rotateY(90deg);
    }
    span:nth-child(5) {
      transform: rotateY(120deg);
    }
    span:nth-child(6) {
      transform: rotateY(150deg);
    }
  }

  .sphere:nth-child(2) {
    transform: rotate(90deg);
  }
  .sphere:nth-child(3) {
    transform: rotate(45deg);
  }
  .sphere:nth-child(4) {
    transform: rotate(-45deg);
  }
}
</style>
