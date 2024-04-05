// 给不同的人发消息，得到成功和失败的结果

function sendMessage(name) {
  return new Promise((resolve, reject) => {
    console.log(`沙拉嘿呦， 只对你说，${name}`);

    if (Math.random() < 0.1) {
      resolve("我也喜欢你~~~");
    } else {
      reject("对不起，你是个好人");
    }
  });
}

console.log(sendMessage);

sendMessage("刘亦菲").then(
  (res) => {
    console.log(res);
  },
  (reason) => {
    console.log(reason);
  }
);
