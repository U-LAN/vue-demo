<template>
  <div>
    <p>子组件的number：<input type="number" v-model="dataNumber"> 会报错</p>
    <p>子组件的string：<input type="text" v-model="dataString">  会报错</p>
    <p>子组件的array：<input type="text" v-model="dataArray[1]"> 会修改父亲的数据</p>
    <p>子组件的Object：<input type="text" v-model="dataObject.name"> 会修改父亲的数据</p>
  </div>
</template>
<script>
export default {
  props: ['dataNumber', 'dataString', 'dataArray', 'dataObject']
}
</script>
<style>

</style>
