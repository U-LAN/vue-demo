<template>
  <div>
    <!-- 默认 （value值和input事件）：<input type="text" :value="value" @input="inputEvent"> -->
    model选项修改默认 （checked值和change事件）：
    <el-checkbox  v-model="check" @change="changeEvent" />
  </div>
</template>
<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  data () {
    return {
      check: this.checked
    }
  },
  // props: ['value'],
  props: { checked: Boolean },
  methods: {
    // inputEvent (e) {
    //   this.$emit('input', e.target.value)
    // },
    changeEvent (e) {
      this.$emit('change', e)
    }
  }
}
</script>
<style>

</style>
