<template>
  <div class="parent">
    <p>父组件的number：{{data_number}}</p>
    <p>父组件的string：{{data_string}}</p>
    <p>父组件的array：{{data_array}}</p>
    <p>父组件的object：{{data_object}}</p>
    <p>父组件的boolean：{{data_boolean}}</p>
    <el-divider></el-divider>
    <childe
      :data-number="data_number"
      :data-string="data_string"
      :data-array="data_array"
      :data-object="data_object"
    ></childe>
    <el-divider></el-divider>v-model:
    <model v-model="data_boolean"></model>
  </div>
</template>
<script>
import Childe from "./child/child";
import Model from "./child/model";
export default {
  components: {
    Childe,
    Model
  },
  data() {
    return {
      data_number: 123,
      data_string: "string",
      data_array: [1, "arr", { arr: "arr" }],
      data_object: { name: "lds", age: 23 },
      data_boolean: true
    };
  },
  watch: {
    newObject: {
      deep: true,
      handler(n, o) {
        console.log("new：", n);
        console.log("old：", o);
      }
    },
  },
  computed: {
    newObject:function () {
      return Object.assign({}, this.data_object);
      // return this.data_object
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
