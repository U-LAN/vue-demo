function setTimer (fn, time) {
  let t = null

  function creat () {
    t = setTimeout(function () {
      fn()
      creat()
    }, time)
  }

  function clear () {
    clearTimeout(t)
  }

  creat()

  return {
    clear: clear
  }
}
// 全局挂载clearTimer() 方法
!window.clearTimer && (window.clearTimer = function (timer) {
  timer && timer.clear()
})

export default setTimer
