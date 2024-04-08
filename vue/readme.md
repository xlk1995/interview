## vite 为什么快

### 对比 webpack

webpack 需要打包，然后启动开发服务器

vite 直接启动开发服务器，请求哪个模块，就对该模块进行实时编译

由于现在服务器支持 esModule， 会自动像依赖的 module 发送请求，vite 利用这一点， 将开发环境的模块文件就作为浏览器的要执行的文件，
而不是像 webpack 那样进行打包合并

不需要要打包，也就意味着不需要分析模块的依赖，不需要编译，因此启动的速度非常快。

## vue3 做了哪些优化

### 静态提升

1. 静态节点会进行提升
2. 静态属性会被提升

在 render 函数中不需要渲染被提升的元素

```javascript
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() =>
  /* @__PURE__ */ _createElementVNode(
    "h1",
    { class: "user" },
    "ssss",
    -1
    /* HOISTED */
  )
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    _openBlock(),
    _createElementBlock(
      _Fragment,
      null,
      [
        _hoisted_1,
        _createElementVNode(
          "h2",
          null,
          _toDisplayString($setup.user),
          1
          /* TEXT */
        ),
      ],
      64
      /* STABLE_FRAGMENT */
    )
  );
}
```

### 预字符串化

遇到连续大量的静态内容，会进行预字符串化， vue2 会生成很多虚拟节点

```
const _hoisted_1 = /* @__PURE__ */ _createStaticVNode
```

### 缓存事件处理函数

会把事件处理函数缓存起来

### block tree

vue2 会一个个节点对比， vue3 把动态节点记录在根节点的一个数组中，只对比数组中的节点即可

### patchFlag

vue2 在比对每一个节点的时候，并不知道这个节点哪些相关信息会变化，只能将所有信息依次对比

vue3 会对节点的相关信息进行标记，比如文本节点是动态的， pathFlag=1。就只比对文本节点就行了

### 为什么 vue3 中去掉了 vue2 构造函数

1. 调用构造函数的静态方法会发生混乱，如果同时有两个 new Vue， 都会生效
2. vue2 的构造函数继承了太多的功能，不利于 tree shaking， vue3 把这些功能使用普通函数导出，能充分利用 tree shaking 进行打包
3. vue2 没有把 vue 应用和组件实例分开，使用 new Vue 创建的对象，即是， 又是， vue3 使用 createApp 创建的对象是一个 vue 应用

### 谈谈你对 vue3 数据响应式的理解

vue3 使用 proxy， vue2 使用 Object.definedProperty

Proxy 本身的效率就比较高，由于不必遍历所有属性，而是直接得到一个 Proxy 对象， 对数据访问是动态的， 当访问某个属性时，再动态的获取和设置， 这就极大的提升了在组件初始阶段的效率

同时， 由于 proxy 可以监控的哦啊成员的新增和删除，因此在 vue3 中新增，删除，访问索引等均可以触发重新渲染

### 双向绑定原理

1. vue2 使用 v-model sync 来进行多个值的双向绑定，vue3 可以使用多个 v-model。
2. vue2 使用:value @input， vue3 默认值为:modelValue，@update:modelValue
3. 可以自定义修饰符。 titleModifiers

vue2 中 v-for 优先级比 v-if 高，vue3 中 v-if 比 v-form 高
