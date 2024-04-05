// 给不同的人发消息，得到成功和失败的结果

function sendMessage(name, resolve, reject) {
  console.log(`沙拉嘿呦， 只对你说，${name}`);

  if (Math.random() < 0.1) {
    resolve("我也喜欢你~~~");
  } else {
    reject("对不起，你是个好人");
  }
}

sendMessage(
  "刘亦菲",
  (replay) => {
    console.log(replay);
  },
  (replay) => {
    console.log(replay);
    sendMessage(
      "迪丽热巴",
      (replay) => {
        console.log(replay);
      },
      (replay) => {
        console.log(replay);
        sendMessage(
          "古力娜扎",
          (replay) => {
            console.log(replay);
          },
          (replay) => {
            console.log(replay);
            console.log("放弃");
          }
        );
      }
    );
  }
);
