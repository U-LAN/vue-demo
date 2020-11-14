<template>
  <div>
    <css-play></css-play>
    <gradient></gradient>
    <button-css></button-css>
    <rotate-stone></rotate-stone>
  </div>
</template>
<script>
import ButtonCss from './components/button/button'
import Gradient from './components/gradient'
import RotateStone from './components/rotateStone'
import CssPlay from "./components/CssPlay"
export default {
  components: {
    ButtonCss,
    Gradient,
    RotateStone,
    CssPlay
  }
}
</script>
<style lang="scss" scoped>
</style>
