function clearTimer(timer) {
  if (timer) clearTimeout(timer);
  return null;
}
function debounce(func, delay, immediate) {
  if (typeof func !== "function") throw new TypeError("传入的需要是一个函数");
  if (typeof immediate !== "boolean") immediate = false;
  delay = +delay;
  if (isNaN(delay)) delay = 300;

  let timer = null;
  return function callback(...args) {
    const now = !timer && immediate;
    timer = clearTimer(timer);
    timer = setTimeout(() => {
      if (!immediate) {
        func.call(this, ...args);
      }
      timer = clearTimer(timer);
    }, delay);
    if (now) {
      func.call(this, ...args);
    }
  };
}
