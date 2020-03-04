<template>
  <div class="d3">
    <div class="item">
      <particles></particles>
    </div>
    <!-- <div class="item">
      <spacetime></spacetime>
    </div> -->
  </div>
</template>
<script>
import particles from './demos/particles'
import spacetime from './demos/spacetime'
export default {
  components: {
    particles,
    spacetime
  }
}
</script>
<style lang="scss" scoped>
.d3 {
  width: 100%;
  height: 100%;
  .item {
    width: 500px;
    height: 500px;
    background: #fff;
    box-shadow: 0 0 5px 5px rgba(3, 8, 82, 0.1);
    margin: 10px;
    float: left;
  }
}
</style>
