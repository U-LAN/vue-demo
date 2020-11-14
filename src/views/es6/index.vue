<template>
  <div :class="{ 'full-screen': fullScreen }">
    <el-card
      @dblclick.native="dbClick(components.SymbolType)"
      :class="{ 'full-screen-item': fullScreenItem === components.SymbolType }"
    >
      <symbol-type></symbol-type>
    </el-card>
    <el-card
      @dblclick.native="dbClick(components.TailRecursion)"
      :class="{
        'full-screen-item': fullScreenItem === components.TailRecursion,
      }"
    >
      <tail-recursion></tail-recursion>
    </el-card>
    <el-card
      @dblclick.native="dbClick(components.ProxyReflect)"
      :class="{
        'full-screen-item': fullScreenItem === components.ProxyReflect,
      }"
    >
      <proxy-reflect></proxy-reflect>
    </el-card>
    <el-card
      @dblclick.native="dbClick(components.Ergodic)"
      :class="{ 'full-screen-item': fullScreenItem === components.Ergodic }"
    >
      <ergodic></ergodic>
    </el-card>
    <el-card
      @dblclick.native="dbClick(components.Throttle)"
      :class="{ 'full-screen-item': fullScreenItem === components.Throttle }"
    >
      <throttle></throttle>
    </el-card>
  </div>
</template>
<script>
import SymbolType from "./components/symbol";
import TailRecursion from "./components/tail-recursion";
import ProxyReflect from "./components/proxy-reflect";
import Ergodic from "./components/ergodic";
import Throttle from "./components/throttle";
export default {
  components: {
    SymbolType,
    TailRecursion,
    ProxyReflect,
    Ergodic,
    Throttle,
  },
  data() {
    return {
      components: {
        SymbolType: "SymbolType",
        TailRecursion: "TailRecursion",
        ProxyReflect: "ProxyReflect",
        Ergodic: "Ergodic",
        Throttle:'Throttle'
      },
      fullScreen: false,
      fullScreenItem: "",
    };
  },
  mounted() {
    let A = [84, 53];
    // console.log(this.playGames(A))
    console.log(this.smallestDivisor([1, 2, 5, 9], 6));
  },
  methods: {
    dbClick(item) {
      if (this.fullScreen) {
        this.fullScreen = false;
        this.fullScreenItem = "";
      } else {
        this.fullScreen = true;
        this.fullScreenItem = item;
      }
    },
    // lincode 玩游戏1671 题
    playGames(A) {
      A = A.sort((a, b) => a - b);
      let len = A.length;
      if (A.length <= 2) {
        return A.reduce((count, item) => {
          return count + item;
        }, 0);
      }
      let max = A[len - 1];
      let sum = 0;
      A.forEach((_) => {
        sum += _ - max;
      });

      if (sum + max > 0) return max;
      else return Math.ceil(-(sum + max) / (len - 1)) + max;
    },
    // lincode 1816. 使结果不超过阈值的最小除数
    smallestDivisor(A, threshold) {
      let start = 1;
      let end = A.sort((a, b) => a - b)[A.length - 1];

      function isValid(guessDivisor) {
        let res = A.reduce((sum, i) => sum + Math.ceil(i / guessDivisor), 0);
        if (res <= threshold) return true;
        return false;
      }

      while (start + 1 < end) {
        let mid = (start + end) / 2;
        if (isValid(mid)) end = mid;
        else start = mid;
      }

      return isValid(start) ? start : end;
    },
  },
};
</script>
<style lang="scss" scoped>
.full-screen {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .full-screen-item {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
  }
}
.el-card {
  width: 500px;
  height: 500px;
  overflow: auto;
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
