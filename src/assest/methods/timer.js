function timer (fn, time) {
  let t = null;

  function creat () {
    t = setTimeout(function () {
      fn();
      creat();
    }, time);
  }
  function clear () {
    clearTimeout(t);
  }
  creat();
  return {
    clear: clear
  };
}

export default timer