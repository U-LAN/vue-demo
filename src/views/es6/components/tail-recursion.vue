<template>
  <div>
    <div class="title">
      <span>尾递归</span>
      <div class="animation">
        <div class="move"></div>
      </div>
    </div>
    <h4>定义</h4>
    <pre>
      函数调用自身，称为递归。如果尾调用自身，就称为尾递归。

      递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。
      但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。
    </pre>
    <el-divider></el-divider>
    <h4>举个栗子</h4>
    <pre>
      function factorial(n) {
        if (n === 1) return 1;
        return n * factorial(n - 1);
      }

      factorial(5) // 120
      ---------------------------------------------------------

      上面代码是一个阶乘函数，计算n的阶乘，最多需要保存n个调用记录，复杂度 O(n) 。

      如果改写成尾递归，只保留一个调用记录，复杂度 O(1) 。

      ---------------------------------------------------------

      function factorial(n, total) {
        if (n === 1) return total;
        return factorial(n - 1, n * total);
      }

      factorial(5, 1) // 120

      ---------------------------------------------------------

      还有一个比较著名的例子，就是计算 Fibonacci 数列，也能充分说明尾递归优化的重要性。

      非尾递归的 Fibonacci 数列实现如下。

      ---------------------------------------------------------

      function Fibonacci (n) {
        if ( n <= 1 ) {return 1};

        return Fibonacci(n - 1) + Fibonacci(n - 2);
      }

      Fibonacci(10) // 89
      Fibonacci(100) // 超时
      Fibonacci(500) // 超时
    </pre>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.title {
  position: sticky;
  top: 0;
  padding: 10px;
  height: 16px;
  line-height: 16px;
  background: #597ee7;
  text-align: center;
  color: #fff;
  border-radius: 18px;
}
</style>