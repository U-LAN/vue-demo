<template>
  <div class="color-range">
    <span>{{type+': '}}</span>
    <template v-if="type === 'a'">
      <el-slider v-model="value" show-input show-stops :min="0" :max="1" :step="0.1"></el-slider>
    </template>
    <template v-else>
      <el-slider v-model="value" show-input :min="0" :max="255" :step="1"></el-slider>
    </template>
  </div>
</template>
<script>
export default {
  props: ['type', 'val'],
  data () {
    return {
      value: this.val
    }
  },
  watch: {
    val () {
      this.value = this.val
    },
    value () {
      this.setColor()
    }
  },
  methods: {
    setColor () {
      this.$emit('setColor', { type: this.type, val: this.value })
    }
  }
}
</script>
<style lang="scss" scoped>
.color-range {
  color: #666;
  display: flex;
  align-items: center;
  span{
    display: inline-block;
    margin-right: 50px;
    width: 20px;
  }
  .el-slider{
    display: inline-block;
    width: 500px;
  }
}
</style>
