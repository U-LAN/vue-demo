<template>
  <div class="gradient">
    <div class="left">
      <div class="block">
        <el-input type="color" v-model="sColor" />
        <span class="val" :style="{color:sColor}">开始颜色值：{{sColor}}</span>
      </div>
      <div class="block">
        <el-input type="color" v-model="eColor" />
        <span class="val" :style="{color:eColor}">结束颜色值：{{eColor}}</span>
      </div>
      <el-input-number v-model="num" :step="1" step-strictly :min="1" />
    </div>
    <div class="right">
      <p :style="{background:item}" v-for="(item,index) in colorArr" :key="index">{{item}}</p>
    </div>

    <el-divider ></el-divider>

    <span>测试vuex</span>
    <b style="display:block;" v-for="(item,index) in shops" :key="index+'aa'">{{item}}</b>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      sColor: '#ffffff',
      eColor: '#597ee7',
      num: 1,
      colorArr: ['#ffffff']
    }
  },
  methods: {
    /**
     *   颜色渐变
     *   num：颜色个数
     */
    fColorGradualChange (startColor, endColor, num) {
      var rgb = /^rgb|RGB\((([0-9]|[1-9]\d|1\d\d|2([0-4]\d|5[0-5])),){2}([0-9]|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\)$/ // rgb
      var hex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i // 16进制
      // 颜色预处理
      var startRGB, endRGB
      if (hex.test(startColor)) {
        startRGB = this.fAnalysisRGB(startColor)
      } else if (rgb.test(startColor)) {
        startRGB = startColor.substring(4, 15).split(',')
      }
      if (hex.test(endColor)) {
        endRGB = this.fAnalysisRGB(endColor)
      } else if (rgb.test(startColor)) {
        endRGB = endColor.substring(4, 15).split(',')
      }
      var startR = parseInt(startRGB[0])
      var startG = parseInt(startRGB[1])
      var startB = parseInt(startRGB[2])
      var endR = parseInt(endRGB[0])
      var endG = parseInt(endRGB[1])
      var endB = parseInt(endRGB[2])

      var sR = parseInt((endR - startR) / num)
      var sG = parseInt((endG - startG) / num)
      var sB = parseInt((endB - startB) / num)

      var colors = []
      for (var i = 0; i < num; i++) {
        colors.push(
          this.fColorToHex(
            parseInt(sR * i + startR),
            parseInt(sG * i + startG),
            parseInt(sB * i + startB)
          )
        )
      }
      return colors
    },
    /**
     *   解析rgb格式
     */
    fAnalysisRGB (color) {
      var color0 = color.toLowerCase().substring(1, color.length)
      var colors = []
      colors.push(parseInt(color0.substring(0, 2), 16))
      colors.push(parseInt(color0.substring(2, 4), 16))
      colors.push(parseInt(color0.substring(4, 6), 16))
      return colors
    },

    /**
     *   rgb转hex
     */
    fColorToHex (r, g, b) {
      var hex =
        '#' +
        this.fAddZero(r.toString(16)) +
        this.fAddZero(g.toString(16)) +
        this.fAddZero(b.toString(16))

      return hex
    },
    /**
     *   加0补位
     */
    fAddZero (v) {
      var newv = '00' + v
      return newv.substring(newv.length - 2, newv.length)
    }
  },
  watch: {
    num () {
      if (this.sColor && this.eColor) {
        this.colorArr = this.fColorGradualChange(
          this.sColor,
          this.eColor,
          this.num
        )
      } else {
        alert('请选择开始颜色和结束颜色！')
      }
    }
  },
  computed: mapState({
    shops: state => state.shop.shops
  }),
  created () {
    this.$store.dispatch('shop/getAllProducts')
  }
}
</script>
<style lang="scss" scoped>
.gradient {
  .left {
    float: left;
    .block {
      display: inline-block;
      margin: 10px;
      .el-input {
        display: block;
        width: 200px;
        /deep/ input[type="color"] {
          padding: 0;
        }
      }
      .val {
        display: inline-block;
        margin-top: 5px;
      }
    }
    .el-input-number {
      display: block;
      margin: 10px;
      width: 300px;
    }
  }
  .right {
    display: inline-block;
    width: 300px;
    margin-left: 50px;
    p {
      line-height: 32px;
      font-size: 14px;
      margin: 10px;
      text-align: center;
      color: #000;
    }
  }
  .el-divider{
    clear: both;
  }
}
</style>
