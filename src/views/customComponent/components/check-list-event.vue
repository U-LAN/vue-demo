<template>
  <div v-if="items.length">
    {{ selected }}
    <div>
      <input type="checkbox" value="all" @input="inputAll($event)" />全选
    </div>
    <div v-for="(item, index) in items" :key="item.id">
      <input
        type="checkbox"
        :value="item.id"
        @input="input($event, index)"
        :checked="selected[index]"
      />{{ item.label }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: [Array],
      default: () => []
    },
    checkeds: {
      type: [Array],
      default: () => []
    }
    // checkeds: {
    //   type: [Array],
    //   default: () => []
    // }
  },
  model: {
    prop: 'checkeds',
    event: 'select'
  },
  computed: {
    selected () {
      return this.items.map((_) => this.checkeds.indexOf(_.id) > -1)
    }
  },
  methods: {
    inputAll (e) {
      let n = e.target.checked
      if (n) {
        let slecteds = this.items.map((_) => _.id)
        this.$emit('select', slecteds)
      } else {
        this.$emit('select', [])
      }
    },
    input (e, i) {
      let selected = this.selected
      selected[i] = e.target.checked
      let selecteds = this.items.filter((c, i) => selected[i]).map((_) => _.id)
      this.$emit('select', selecteds)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
