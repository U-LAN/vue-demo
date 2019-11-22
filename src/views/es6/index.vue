<template>
  <div>
    <el-card>
      <symbol-type></symbol-type>
    </el-card>
    <el-card>
      <tail-recursion></tail-recursion>
    </el-card>
    <el-card>
      <proxy-reflect></proxy-reflect>
    </el-card>
  </div>
</template>
<script>
import SymbolType from "./components/symbol";
import TailRecursion from "./components/tail-recursion";
import ProxyReflect from "./components/proxy-reflect";
export default {
  components: {
    SymbolType,
    TailRecursion,
    ProxyReflect
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
  margin-bottom: 20px;
}
</style>