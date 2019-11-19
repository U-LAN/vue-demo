<template>
  <el-container id="main">
    <el-header>
      <h1><a href="https://cn.vuejs.org/">VUE</a> DEMO COLLECTION</h1>
    </el-header>
    <el-container class="all">
      <el-aside width="200px" height="100%">
        <el-tabs tab-position="left" v-model="activeName" @tab-click="tabClick">
          <el-tab-pane
            :name="item.name"
            :label="item.cname"
            v-for="(item, index) in navlist"
            v-bind:key="index"
          ></el-tab-pane>
        </el-tabs>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
      <div class="shadow">
        <ul>
          <li></li>
        </ul>
      </div>
    </el-container>
    <div class="ccc">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
  </el-container>
</template>

<script>
import { navlist } from "../../assest/dateJs/index/index";
export default {
  name: "Index",
  data() {
    return {
      activeName: this.$route.name,
      navlist: navlist
    };
  },
  methods: {
    tabClick(tab) {
      this.$router.push(tab.name);
    }
  }
};
</script>

<style lang="scss" scoped>
#main {
  width: 100%;
  height: 100%;
  background-color: #f0f5ff;
  .el-header {
    background-color: rgba(89, 126, 231, 1);
    color: #fff;
    box-shadow: 0 0 5px 5px rgba(3, 8, 82, 0.2);
    h1 {
      text-align: center;
      a {
        color: #85a5ff;
      }
    }
  }
  .el-aside {
    .el-tabs {
      /deep/ .el-tabs__header {
        padding: 20px;
        float: none;
      }
    }
  }
  .el-main {
    height: 870px;
    overflow: auto;
  }
  .all {
    position: relative;
    .shadow {
      pointer-events: none;
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      z-index: 99;
      ul {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        position: relative;
        overflow: hidden;
        li {
          list-style: none;
          position: absolute;
          left: -10px;
          width: 200px;
          height: 4px;
          border-radius: 2px;
          background-image: linear-gradient(
            to right,
            rgba(255, 255, 222, 0),
            rgba(255, 255, 222, 1)
          );
          transform: rotate(45deg);
          -ms-transform: rotate(45deg); /* IE 9 */
          -webkit-transform: rotate(45deg); /* Safari and Chrome */
          animation: movee 5s linear infinite;
          -webkit-animation: movee 5s linear infinite;
        }
      }
    }
  }
}

@keyframes movee {
  from {
    left: -100px;
    top: -100px;
  }

  to {
    left: 100%;
    top: 100%;
  }
}

@-webkit-keyframes movee

/* Safari and Chrome */ {
  from {
    left: -100px;
    top: -100px;
  }

  to {
    left: 100%;
    top: 100%;
  }
}
.ccc {
  div {
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    display: inline-block;
    margin: auto;
  }
}
</style>
