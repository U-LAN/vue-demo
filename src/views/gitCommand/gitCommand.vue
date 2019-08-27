<template>
  <div class="git">
    <div class="search">
      <el-input placeholder="请输入关键词搜索" @input="search" v-model="input">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <div class="content">
      <div class="zhezhao">
        <div class="grad top"></div>
        <div class="grad bottom"></div>
      </div>
      <div class="neirong">
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
    </div>
  </div>
</template>
<script>
import Clipboard from "clipboard";
import commands from "./data/data.json";
export default {
  data() {
    return {
      data: [],
      input: ""
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
    },
    search() {
      this.throttle(() => {
        let dataArr = [];
        if (this.input.trim().length > 0) {
          for (let i = 0; i < commands.length; i++) {
            if (JSON.stringify(commands[i]).indexOf(this.input.trim()) !== -1) {
              dataArr.push(commands[i]);
            }
          }
        } else {
          dataArr = commands;
        }
        this.data = dataArr;
      }, 10000)();
    },
    //时间戳节流函数
    throttle(func, wait) {
      let previous = 0;
      let context, args, time, remaining;

      return function() {
        let now = +new Date();
        context = this;
        args = arguments;
        remaining = wait - (now - previous); // 剩余的还需要等待的时间
        if (remaining <= 0) {
          func.apply(context, args);
          previous = now; // 重置“上一次执行”的时间
        } else {
          if (time) {
            clearTimeout(time);
          }
          time = setTimeout(() => {
            func.apply(context, args);
            time = null;
            previous = +new Date(); // 重置“上一次执行”的时间
          }, remaining); //等待还需等待的时间
        }
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.git {
  height: 100%;
  overflow: auto;
  position: relative;
  .search {
    margin-bottom: 10px;
    position: sticky;
    top: 0;
  }
  .content {
    height: 90%;
    background: #fff;
    position: relative;

    .neirong {
      height: 100%;
      padding: 0 10px;
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
    .zhezhao {
      .grad {
        position: absolute;
        height: 20px;
        width: 100%;
      }
      .top {
        top: 0;
        background: -webkit-linear-gradient(
          rgba(255, 255, 255, 1),
          rgba(255, 255, 255, 0)
        ); /* Safari 5.1 - 6 */
        background: -o-linear-gradient(
          rgba(255, 255, 255, 1),
          rgba(255, 255, 255, 0)
        ); /* Opera 11.1 - 12*/
        background: -moz-linear-gradient(
          rgba(255, 255, 255, 1),
          rgba(255, 255, 255, 0)
        ); /* Firefox 3.6 - 15*/
        background: linear-gradient(
          rgba(255, 255, 255, 1),
          rgba(255, 255, 255, 0)
        ); /* 标准的语法 */
      }
      .bottom {
        bottom: 0;
        background: -webkit-linear-gradient(
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 1)
        ); /* Safari 5.1 - 6 */
        background: -o-linear-gradient(
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 1)
        ); /* Opera 11.1 - 12*/
        background: -moz-linear-gradient(
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 1)
        ); /* Firefox 3.6 - 15*/
        background: linear-gradient(
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 1)
        ); /* 标准的语法 */
      }
    }
  }
}
</style>