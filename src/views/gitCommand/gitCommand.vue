<template>
  <div class="git">
    <el-collapse accordion>
      <el-collapse-item v-for="(item,index) in data" :key="index">
        <template slot="title">
          <el-tooltip class="item" effect="dark" content="点击复制命令" placement="right">
            <el-tag
              :id="'tag-read'+index"
              :data-clipboard-text="item.command"
              data-clipboard-action="copy"
              @click.prevent="copy('tag-read'+index)"
            >{{item.command}}</el-tag>
          </el-tooltip>
          <span class="description">{{item.description}}</span>
        </template>
        <p>{{item.detail}}</p>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import Clipboard from "clipboard";
import commands from "./data/data.json";
export default {
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.data = commands;
  },
  methods: {
    copy(id) {
      let _this = this;
      var clipboard = new Clipboard("#" + id);

      clipboard.on("success", e => {
        this.$message({
          message: "命令已复制到剪切板",
          type: "success"
        });

        e.clearSelection();
      });

      clipboard.on("error", e => {
        // console.log("Action:", e.action);
        // console.log("Trigger:", e.trigger);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.git {
  height: 100%;
  background: #fff;
  padding: 10px;
  overflow: auto;
  .el-tag {
    font-size: 16px;
  }
  .description {
    display: inline-block;
    padding: 0 20px;
    color: #666;
  }
}
</style>