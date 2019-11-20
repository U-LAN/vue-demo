<template>
  <el-container id="main">
    <stars></stars>
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
        <keep-alive >
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { navlist } from "../../assest/dateJs/index/index";
import Stars from "./components/stars";
export default {
  name: "Index",
  components: {
    Stars
  },
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
  }
}
</style>
