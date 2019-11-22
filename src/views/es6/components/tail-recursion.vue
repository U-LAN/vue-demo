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
    </pre>
    <el-divider></el-divider>
    <h4>蹦床函数：</h4>
    <pre>
      （一种实现：）

      function trampoline(f) {
        while (f && f instanceof Function) {
          f = f();
        }
        return f;
      }

      trampoline(func)   //  func就是递归函数

      ---------------------------------------------------------

      现在，使用蹦床函数执行sum，就不会发生调用栈溢出。
      蹦床函数并不是真正的尾递归优化，下面的实现才是。
    </pre>
    <el-divider></el-divider>
    <h4>尾递归优化：</h4>
    <pre>
      function tco(f) {
        var value;
        var active = false;
        var accumulated = [];

        return function accumulator() {
          accumulated.push(arguments);
          if (!active) {
            active = true;
            while (accumulated.length) {
              value = f.apply(this, accumulated.shift());
            }
            active = false;
            return value;
          }
        };
      }

      var sum = tco(function(x, y) {
        if (y > 0) {
          return sum(x + 1, y - 1)
        }
        else {
          return x
        }
      });

      sum(1, 100000)

      ---------------------------------------------------------

      上面代码中，tco函数是尾递归优化的实现，它的奥妙就在于状态变量active。
      默认情况下，这个变量是不激活的。一旦进入尾递归优化的过程，这个变量就激活了。
      然后，每一轮递归sum返回的都是undefined，所以就避免了递归执行；
      而accumulated数组存放每一轮sum执行的参数，总是有值的，
      这就保证了accumulator函数内部的while循环总是会执行。
      这样就很巧妙地将“递归”改成了“循环”，而后一轮的参数会取代前一轮的参数，保证了调用栈只有一层。
    </pre>
  </div>
</template>
<script>
export default {
  mounted() {
    function test() {
      function trampoline(f) {
        while (f && f instanceof Function) {
          f = f();
        }
        return f;
      }

      function sum(x, y) {
        if (y > 0) {
          return sum.bind(null, x + 1, y - 1);
        } else {
          return x;
        }
      }

      console.log(trampoline(sum(1, 100000)));
    }

    // test();

    //尾递归优化
    // function tco(f) {
    //   var value;
    //   var active = false;
    //   var accumulated = [];

    //   return function accumulator() {
    //     accumulated.push(arguments);
    //     if (!active) {
    //       active = true;
    //       while (accumulated.length) {
    //         value = f.apply(this, accumulated.shift());
    //       }
    //       active = false;
    //       return value;
    //     }
    //   };
    // }

    // var sum = tco(function(x, y) {
    //   console.log(x, y);
    //   if (y > 0) {
    //     return sum(x + 1, y - 1);
    //   } else {
    //     return x;
    //   }
    // });

    // console.log(sum(1, 100000));
  }
};
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