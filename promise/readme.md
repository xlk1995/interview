## Promise 规范

Promise 是一套处理异步场景的规范，有效的避免回调地狱

Promise A+

## Promise 的静态方法

1. Promise.resolve
2. Promise.reject
3. Promise.allSettle
4. Promise.all
5. Promise.any
6. Promise.race

## async await

```javascript
async function test() {
  return 111;
}
// 相当于

function test() {
  return new Promise((resolve) => resolve(1));
}
```

```javascript
async function test() {
  await 1;
}

// await后面必须接一个promise
// 相当于

async function test() {
  await Promise.resolve(1);
}
```
