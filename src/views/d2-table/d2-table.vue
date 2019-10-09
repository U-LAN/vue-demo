<template>
  <div class="container">
    <div class="top">
      <span class="title">镜像管理</span>
      <div class="btn-box">
        <el-button type="primary" size="small">新建镜像</el-button>
        <el-button type="primary" size="small">操作记录</el-button>
      </div>
    </div>
    <div class="content">
      <mirror-table></mirror-table>
    </div>
  </div>
</template>
<script>
import MirrorTable from "./mirrorTable";
export default {
  components: {
    MirrorTable
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding: 20px;
  background-color: #fff;
  .top {
    height: 32px;
    line-height: 32px;
    .title {
      color: #333;
      font-size: 18px;
    }
    .btn-box {
      float: right;
    }
  }
  .content {
    margin-top: 20px;
  }
}
</style>