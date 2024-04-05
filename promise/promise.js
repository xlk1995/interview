const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECT = "reject";

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
