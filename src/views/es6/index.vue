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
        'full-screen-item': fullScreenItem === components.TailRecursion
      }"
    >
      <tail-recursion></tail-recursion>
    </el-card>
    <el-card
      @dblclick.native="dbClick(components.ProxyReflect)"
      :class="{
        'full-screen-item': fullScreenItem === components.ProxyReflect
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
  </div>
</template>
<script>
import SymbolType from "./components/symbol";
import TailRecursion from "./components/tail-recursion";
import ProxyReflect from "./components/proxy-reflect";
import Ergodic from "./components/ergodic";
export default {
  components: {
    SymbolType,
    TailRecursion,
    ProxyReflect,
    Ergodic
  },
  data() {
    return {
      components: {
        SymbolType: "SymbolType",
        TailRecursion: "TailRecursion",
        ProxyReflect: "ProxyReflect",
        Ergodic: "Ergodic"
      },
      fullScreen: false,
      fullScreenItem: ""
    };
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
    }
  }
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