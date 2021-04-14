<template>
  <div class="main">
    svg
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <circle
        cx="100"
        cy="50"
        r="40"
        stroke="black"
        stroke-width="2"
        fill="red"
      />
    </svg>
    <div class="transform">
      <i class="icon"></i>
    </div>
    <div class="map">
      <i></i>
    </div>
    <!-- canvas -->
    <canvas id="myCanvas" width="400" height="250">
      您的浏览器不支持Canvas
    </canvas>
  </div>
</template>
<script>
export default {
  mounted () {
    const canvas = document.getElementById('myCanvas')
    const ctx = canvas.getContext('2d')

    var image = new Image(60, 45)
    image.onload = drawImageActualSize
    image.src = require('../../../build/logo.png')

    function drawImageActualSize () {
      canvas.width = this.naturalWidth
      canvas.height = this.naturalHeight
      ctx.drawImage(this, 0, 0, this.naturalWidth, this.naturalHeight)
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  // perspective: 500px;
}
.transform {
  width: 300px;
  height: 30px;
  border: 1px solid #000;
  position: relative;

  i {
    position: absolute;
    top: 0px;
    right: 8px;
    transition: all 0.5s ease-in-out;
    &::after {
      content: "";
      width: 16px;
      height: 16px;
      display: inline-block;
      width: 10px;
      height: 10px;
      border-right: 2px solid blueviolet;
      border-bottom: 2px solid blueviolet;
      transform: rotate(45deg);
    }
  }
  &:hover i {
    transform-origin: 50% 65%;
    transform: rotate(-180deg);
    // top:8px
  }
}

.map {
  float: left;
  width: 50px;
  height: 50px;
  background: #ffffff;
  position: relative;
  i {
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: #09f;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &::before,
    &::after {
      content: "";
      width: 5px;
      height: 5px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      box-shadow: 0 0 8px #009dfd;
      animation: pulse 2s linear infinite;
    }
    &::after {
      animation-delay: 1s;
    }
  }

  @keyframes pulse {
    0% {
    }
    70% {
      width: 20px;
      height: 20px;
      opacity: 1;
    }
    100% {
      width: 30px;
      height: 30px;
      opacity: 0;
    }
  }
}
</style>
