<template>
  <div>
    <!-- 默认 （value值和input事件）：<input type="text" :value="value" @input="inputEvent"> -->
    model选项修改默认 （checked值和change事件）：<input type="checkbox" :checked="checked" @change="changeEvent">
  </div>
</template>
<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  // props: ['value'],
  props: {'checked': Boolean},
  methods: {
    // inputEvent (e) {
    //   this.$emit('input', e.target.value)
    // },
    changeEvent (e) {
      this.$emit('change', e.target.checked)
    }
  }
}
</script>
<style>

</style>
