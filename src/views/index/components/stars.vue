<template>
  <div id="stars">
    <div class="star" style="top: 0px;left: 500px;"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.createStar();
    });
  },
  methods: {
    createStar() {
      var stars = document.getElementById("stars");
      // js随机生成流星
      for (var j = 0; j < 10; j++) {
        var newStar = document.createElement("div");
        newStar.className = "star";
        newStar.style.top =
          this.randomDistance(stars.clientHeight, -100) + "px";
        newStar.style.left = this.randomDistance(stars.clientWidth, 300) + "px";
        stars.appendChild(newStar);
      }

      // 给流星添加动画延时
      var star = document.getElementsByClassName("star");
      for (var i = 0, len = star.length; i < len; i++) {
        star[i].style.animationDelay = i % 6 == 0 ? "0s" : i * 0.8 + "s";
      }
    },
    // 封装随机数方法
    randomDistance(max, min) {
      var distance = Math.floor(Math.random() * (max - min + 1) + min);
      return distance;
    }
  }
};
</script>
<style lang="scss">
#stars {
  pointer-events: none; //事件穿透
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  // background: rgba(0, 0, 0, 0.5);
}
.star {
  display: block;
  width: 1px;
  background: transparent;
  position: relative;
  opacity: 0;
  /*过渡动画*/
  animation: star-fall 3s linear infinite;
  -webkit-animation: star-fall 3s linear infinite;
  -moz-animation: star-fall 3s linear infinite;
}

.star:after {
  content: "";
  display: block;
  border: 0px solid #fff;
  border-width: 0px 90px 2px 90px;
  border-color: transparent transparent transparent rgba(0, 0, 255, 0.5);
  box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.1);
  /*变形*/
  transform: rotate(-45deg) translate3d(1px, 3px, 0);
  -webkit-transform: rotate(-45deg) translate3d(1px, 3px, 0);
  -moz-transform: rotate(-45deg) translate3d(1px, 3px, 0);
  transform-origin: 0% 100%;
  -webkit-transform-origin: 0% 100%;
  -moz-transform-origin: 0% 100%;
}

@keyframes star-fall {
  0% {
    opacity: 0;
    transform: scale(0.5) translate3d(0, 0, 0);
    -webkit-transform: scale(0.5) translate3d(0, 0, 0);
    -moz-transform: scale(0.5) translate3d(0, 0, 0);
  }
  50% {
    opacity: 1;
    transform: translate3d(-200px, 200px, 0);
    -webkit-transform: translate3d(-200px, 200px, 0);
    -moz-transform: translate3d(-200px, 200px, 0);
  }
  100% {
    opacity: 0;
    transform: scale(1.2) translate3d(-300px, 300px, 0);
    -webkit-transform: scale(1.2) translate3d(-300px, 300px, 0);
    -moz-transform: scale(1.2) translate3d(-300px, 300px, 0);
  }
}
</style>