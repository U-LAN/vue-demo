<template>
  <div>
    <el-card>
      <symbol-type></symbol-type>
    </el-card>
    <el-card>
      <tail-recursion></tail-recursion>
    </el-card>
  </div>
</template>
<script>
import SymbolType from "./components/symbol";
import TailRecursion from "./components/tail-recursion";
export default {
  components: {
    SymbolType,
    TailRecursion
  }
};
</script>
<style lang="scss" scoped>
.el-card {
  width: 500px;
  height: 500px;
  overflow: auto;
  display: inline-block;
  margin-right: 20px;
}
</style>