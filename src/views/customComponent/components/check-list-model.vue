<template>
  <div v-if="items.length">
    {{ selected }}
    <input type="checkbox" value="all" v-model="selectAll" />全选
    <template v-for="(item, index) in items">
      <input
        type="checkbox"
        :key="item.id"
        :value="item.id"
        @input="input"
        v-model="selected[index]"
      />{{ item.label }}
    </template>
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
  data () {
    return {
      selected: [],
      selectAll: false
    }
  },
  watch: {
    checkeds: {
      immediate: true,
      handler (n, o) {
        if (JSON.stringify(n) === JSON.stringify(o)) return
        this.selected = this.items.map((_) => n.indexOf(_.id) > -1)
      }

    },
    selected (n) {
      let slecteds = this.items.filter((c, i) => n[i]).map((_) => _.id)
      this.$emit('select', slecteds)
    },
    selectAll (n) {
      if (n) {
        let slecteds = this.items.map((_) => _.id)
        this.$emit('select', slecteds)
      } else {
        this.$emit('select', [])
      }
    }
  },
  computed: {
    // selected: {
    //   get: function () {
    //     return this.items.map((_) => this.value.indexOf(_.id) > -1)
    //   },
    //   set: function (n) {
    //     let slecteds = this.items.filter((c, i) => n[i]).map((_) => _.id)
    //     this.$emit('input', slecteds)
    //   }
    // }
  },
  mounted () {
  },
  methods: {
    input (e) {
      // console.log(e.target.checked)
      // console.log(this.selected)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
