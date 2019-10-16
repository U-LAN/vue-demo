<template>
  <div>
    <el-card>
      <symbol-type></symbol-type>
    </el-card>
  </div>
</template>
<script>
import SymbolType from "./components/symbol";
export default {
  components: {
    SymbolType
  }
};
</script>
<style lang="scss" scoped>
.el-card {
  width: 500px;
  height: 500px;
  overflow: auto;
}
</style>