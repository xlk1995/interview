const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECT = "reject";

/**
 * 运行一个微任务队列
 * 把传递的函数放入到
 * @param  callback
 */
function runMicroTask(callback) {
  if (globalThis.process && globalThis.process.nextTick) {
    process.nextTick(callback);
  } else if (globalThis.MutationObserver) {
    const p = document.createElement("p");
    const observer = globalThis.MutationObserver(callback);
    observer.observe(p, {
      childList: true,
    });
    p.innerHTML = "1";
  } else {
    setTimeout(callback, 0);
  }
}

class MyPromise {
  _state; // 状态
  _value; // 数据
  constructor(executor) {
    try {
      this._state = PENDING;
      this._value = undefined;
      executor(this._resolve.bind(this), this._reject.bind(this));
    } catch (error) {
      this._reject(error);
    }
  }

  _changeState(newState, value) {
    if (this._state !== PENDING) {
      return;
    }
    this._state = newState;
    this._value = value;
  }

  _resolve(data) {
    this._changeState(FULFILLED, data);
  }

  _reject(reason) {
    console.log(reason);
    this._changeState(REJECT, reason);
  }
}

new MyPromise((resolve, reject) => {
  throw new Error(1111);
});
