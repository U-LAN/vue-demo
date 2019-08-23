<template>
  <div class="color">
    <div class="color-main">
      <el-input type="color" v-bind:style="{opacity:a}" v-model="color" />
      <p>
        <span class="code-name">#格式:</span>
        <span class="code-style">{{ color }}</span>
      </p>
      <p>
        <span class="code-name">rgb格式:</span>
        <span class="code-style">{{ 'rgb('+r+','+g+','+b+')' }}</span>
      </p>
      <p>
        <span class="code-name">rgba格式:</span>
        <span class="code-style">{{ 'rgba('+r+','+g+','+b+','+a+')' }}</span>
      </p>
      <div class="color-col">
        <ColorRange type="r" v-bind:val="r" v-on:setColor="setColor"></ColorRange>
        <ColorRange type="g" v-bind:val="g" v-on:setColor="setColor"></ColorRange>
        <ColorRange type="b" v-bind:val="b" v-on:setColor="setColor"></ColorRange>
        <ColorRange type="a" v-bind:val="a" v-on:setColor="setColor"></ColorRange>
      </div>
    </div>
  </div>
</template>
<script>
import ColorRange from './colorRange/colorRange'
export default {
  name: 'Color',
  data () {
    return {
      r: 89,
      g: 126,
      b: 231,
      a: 1
    }
  },
  computed: {
    color: {
      get () {
        return (
          '#' +
          this.convertNum(this.r, 16) +
          this.convertNum(this.g, 16) +
          this.convertNum(this.b, 16)
        )
      },
      set (params) {
        this.r = this.convertNum(params.slice(1, 3), 10)
        this.g = this.convertNum(params.slice(3, 5), 10)
        this.b = this.convertNum(params.slice(5, 7), 10)
      }
    }
  },
  methods: {
    setColor ({ type, val }) {
      this[type] = val
    },
    convertNum (num, type) {
      // type 是要输出的数字进制
      if (type === 16) {
        // 10 ＝> 16,要求num必须为number类型
        num = parseInt(num).toString(16)
        // 返回的16进制数必须是两位
        return num.length < 2 ? '0' + num : num.length > 2 ? 'ff' : num
      } else if (type === 10) {
        // 16 => 10
        return parseInt(num, 16)
      }
    }
  },
  components: {
    ColorRange
  }
}
</script>
<style lang="scss" scoped>
.color {
  height: 100%;
  .color-main {
    /deep/ input[type="color"] {
      width: 150px;
      height: 150px;
      padding: 0;
    }
    .color-col {
      input {
        margin: 10px;
      }
    }
    p {
      .code-name{
        display: inline-block;
        width: 100px;
      }
      .code-style {
        display: inline-block;
        width: 150px;
        margin: 5px 20px;
        padding: 5px 20px;
        font-weight: bold;
        box-shadow: 0 0 2px 2px rgba(3, 8, 82, 0.1);
        background-color: #ffffff;
        color: #597ef7;
      }
    }
  }
}
</style>
