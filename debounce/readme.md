## 防抖和节流的概念

- 防抖： 用户触发多次，只识别一次
- 节流： 用户触发多次， 降频，不止识别一次

### 节流原理

每 500ms 执行一次

当前时间 - 上一次执行的时间差

< 500 设置定时器去等待

`>500` 立即执行

一但定时器被设定，在执行 operate 的时候啥事都不用做即可
