/*************第一题 */
// const p = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve();
//   console.log(2);
// });

// p.then(() => {
//   console.log(3);
// });

// console.log(4);

/*************第二题 */
// const p = new Promise((resolve) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//     resolve();
//     console.log(3);
//   });
// });

// p.then(() => {
//   console.log(4);
// });
// console.log(5);

/*************第三题 */

// setTimeout(() => {
//   console.log(1);
// });

// const p = new Promise((resolve) => {
//   console.log(2);
//   resolve();
// });

// p.then((res) => {
//   console.log(3);
// });

// console.log(4);

/*************第四题 */

// const p1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve();
//   }, 1000);
// });

// const p2 = p1.catch(() => {
//   return 2;
// });

// console.log("p1", p1);
// console.log("p2", p2);

// setTimeout(() => {
//   console.log("p1", p1);
//   console.log("p2", p2);
// }, 2000);

/*************第五题 */

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject();
//   }, 1000);
// });

// const p2 = p1.catch(() => {
//   return 2;
// });

// console.log("p1", p1);
// console.log("p2", p2);

// setTimeout(() => {
//   console.log("p1", p1);
//   console.log("p2", p2);
// }, 2000);

/*************第六题 */

// async function m() {
//   console.log(1);
//   const n = await 1;
//   console.log(n);
// }

// // function m() {
// //   return Promise.resolve(1).then((n) => console.log(n));
// // }

// m();
// console.log(2);

/*************第六题 */

// async function m() {
//   console.log(0);
//   const n = await 1;
//   console.log(n);
// }

// // function m() {
// //   return Promise.resolve(1).then((n) => console.log(n));
// // }

// (async () => {
//   await m();
//   console.log(2);
// })();

// console.log(3);

/*************第⑦题 */

// async function m1() {
//   return 1;
// }

// async function m2() {
//   const n = await m1();
//   console.log(n);
//   return 2;
// }

// async function m3() {
//   const n = m2();
//   console.log(n);
//   return 3;
// }
// m3().then((n) => {
//   console.log(n);
// });

// m3();
// console.log(4);

//*************第⑧题 */

// 如果传的不是函数就忽略
// Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);

/************* 第九题 */

// var a;
// var b = new Promise((resolve) => {
//   console.log("promise1");
//   setTimeout(() => {
//     resolve();
//   }, 1000);
// })
//   .then(() => {
//     console.log("promise2");
//   })
//   .then(() => {
//     console.log("promise3");
//   })
//   .then(() => {
//     console.log("promise4");
//   });

// a = new Promise(async (resolve, reject) => {
//   console.log(a);
//   await b;
//   console.log(a);
//   console.log("after1");
//   await a;
//   resolve(true);
//   console.log("after2");
// });

// console.log("end");

/************ 第十题 */

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("sync2");
}

console.log("script start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

async1();

new Promise((resolve) => {
  console.log("promise1");
  resolve();
}).then(() => {
  console.log("promise2");
});

console.log("script end ");
