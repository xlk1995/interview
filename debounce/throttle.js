function clearTimer(timer) {
  if (timer) clearTimeout(timer);
  return null;
}
function throttle(func, delay) {
  if (typeof func !== "function") throw new TypeError("传入的需要是一个函数");
  delay = +delay;
  if (isNaN(delay)) delay = 300;
  let timer = null,
    pervious = 0;
  return function operate(...args) {
    const now = +new Date();
    const remaining = delay - (now - pervious);
    if (remaining <= 0) {
      func.call(this, ...args);
      pervious = +new Date();
      timer = clearTimer(timer);
    } else if (!timer) {
      timer = setTimeout(() => {
        func.call(this, ...args);
        pervious = +new Date();
        timer = clearTimer(timer);
      }, remaining);
    }
  };
}
