<template>
  <div class="box">
    <css-play :key="refresh"></css-play>
    <h3 class="reload" @click="reload">reload</h3>
  </div>
</template>
<script>
import CssPlay from "./cssPlay";
export default {
  components: {
    CssPlay,
  },
  data() {
    return {
      refresh: 1,
    };
  },
  methods: {
    reload() {
      // this.$nextTick(() => {
        this.refresh++;
      // });
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  background: black;
  overflow: hidden;
  position: relative;
}
.reload {
  position: absolute;
  left: 24px;
  top: 0;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
}
</style>