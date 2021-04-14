<template>
  <div>
    <div class="title">
      <span>防抖、节流</span>
      <div class="animation">
        <div class="move"></div>
      </div>
    </div>
    <div
      id="content"
      style="
        height: 150px;
        line-height: 150px;
        text-align: center;
        color: #fff;
        background-color: #ccc;
        font-size: 80px;
        margin-top: 24px;
      "
    >
      {{ times }}
    </div>
    <el-radio-group v-model="type">
      <el-radio-button v-for="(v, k) in types" :key="k" :label="k">{{
        v
      }}</el-radio-button>
    </el-radio-group>
    <h4>防抖</h4>
    <pre>
      防抖（debounce）
      所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。

      对于防抖，分为 【非立即执行】 和【立即执行】

      // 非立即执行 防抖
      function debounceUidy(fn, wait) {
        let timeout;
        return function () {
          let context = this;
          let args = arguments;

          if (timeout) clearTimeout(timeout);

          timeout = setTimeout(() => {
            fn.apply(context, args);
          }, wait);
        };
      }

      // 立即执行 防抖
      function debounceIdy(fn, wait) {
        let timeout;
        return function () {
          let context = this;
          let args = arguments;

          if (timeout) clearTimeout(timeout);
          else fn.apply(context, args);

          timeout = setTimeout(() => {
            timeout = null;
          }, wait);
        };
      }

    </pre>
    <el-divider></el-divider>
    <h4>节流</h4>
    <pre>
      节流（throttle）
      所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。

      对于节流，一般有两种方式可以实现，分别是【时间戳版】和【定时器版】。

      // 时间戳 节流
      function throttleTim(fn, wait) {
        let previous = 0;
        return function () {
          let context = this;
          let args = arguments;

          let now = Date.now();

          if (now - previous > wait) {
            fn.apply(context, args);
            previous = now;
          }
        };
      }

      // 定时器 节流
      function throttleTmot(fn, wait) {
        let timeout;
        return function () {
          let context = this;
          let args = arguments;

          if (!timeout) {
            timeout = setTimeout(() => {
              fn.apply(context, args);
              timeout = null;
            }, wait);
          }
        };
      }

      // 合并版本（时间戳和定时器）节流
      function throttleTAT(fn, wait) {
        let previous = 0;
        let timeout;
        return function () {
          let context = this;
          let args = arguments;

          let now = Date.now();

          let remaining = wait - (now - previous); // 剩余的还需要等待的时间

          if (remaining <= 0) {
            fn.apply(context, args);
            previous = now;
          } else {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
              fn.apply(context, args);
              previous = Date.now();
              timeout = null;
            }, remaining);
          }
        };
      }

    </pre>
  </div>
</template>
<script>
// 非立即执行 防抖
function debounceUidy (fn, wait) {
  let timeout
  return function () {
    let context = this
    let args = arguments

    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}
// 立即执行 防抖
function debounceIdy (fn, wait) {
  let timeout
  return function () {
    let context = this
    let args = arguments

    if (timeout) clearTimeout(timeout)
    else fn.apply(context, args)

    timeout = setTimeout(() => {
      timeout = null
    }, wait)
  }
}
// 时间戳 节流
function throttleTim (fn, wait) {
  let previous = 0
  return function () {
    let context = this
    let args = arguments

    let now = Date.now()

    if (now - previous > wait) {
      fn.apply(context, args)
      previous = now
    }
  }
}
// 定时器 节流
function throttleTmot (fn, wait) {
  let timeout
  return function () {
    let context = this
    let args = arguments

    if (!timeout) {
      timeout = setTimeout(() => {
        fn.apply(context, args)
        timeout = null
      }, wait)
    }
  }
}
function throttleTAT (fn, wait) {
  let previous = 0
  let timeout
  return function () {
    let context = this
    let args = arguments

    let now = Date.now()

    let remaining = wait - (now - previous) // 剩余的还需要等待的时间

    if (remaining <= 0) {
      fn.apply(context, args)
      previous = now
    } else {
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(() => {
        fn.apply(context, args)
        previous = Date.now()
        timeout = null
      }, remaining)
    }
  }
}
const AllFn = {
  debounceIdy,
  debounceUidy,
  throttleTim,
  throttleTmot,
  throttleTAT
}
const types = {
  debounceIdy: '防抖（立即）',
  debounceUidy: '防抖（非立即）',
  throttleTim: '节流（时间戳）',
  throttleTmot: '节流（定时器）',
  throttleTAT: '节流（时间戳定时器）'
}
export default {
  data () {
    return {
      times: 0,
      types,
      type: 'debounceIdy',
      oldEvent: null
    }
  },
  watch: {
    type: {
      immediate: true,
      handler (nval, oval) {
        this.times = 0
        this.bindEvent(oval, nval)
      }
    }
  },
  methods: {
    count: function () {
      this.times = this.times + 1
    },
    bindEvent (oval, nval) {
      this.$nextTick(() => {
        let dom = document.querySelector('#content')
        oval && dom.removeEventListener('mousemove', this.oldEvent)
        this.oldEvent = AllFn[nval](this.count, 1000)
        dom.addEventListener('mousemove', this.oldEvent)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  position: sticky;
  top: 0;
  padding: 10px;
  height: 16px;
  background: #597ee7;
  text-align: center;
  color: #fff;
  border-radius: 18px;
  z-index: 2;
}
</style>
