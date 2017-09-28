## 注意
因为 API 返回的数据有限，没有最大的 topic 数量，所以无法算出最后一页是多少。所以主页下面的分页部分处理得不够完整，没有跳转最后一页的功能等！！！

# 项目简介
学习 vue 的期间做的论坛，使用 vue + vuex + vue-router + less + webpack 制作。<br>
页面模仿自 [vuejs论坛](https://www.vue-js.com/) ，为自适应页面，手机端做了较大调整，更像 App 应用。<br>
另外，感谢 [vuejs论坛](https://www.vue-js.com/) 提供API，有这些现成的 API 也是我做这个项目的原因。

## 功能
- 自适应页面
- 主题详情，登陆后能够收藏、回复、点赞。
- 消息提醒，能查看别人回复的消息和消息内容。
- 个人中心，有个人账号、注册时间、积分显示，并分别显示收藏、最近参与、回复等三个主题列表。
- 发布话题，成功后自动跳转到相应话题页面。

## 主要运用技术
- 使用 vue 技术栈，通过 vuex 来管理页面状态，通过 vue-router 来设置路由
- 应用 axios 库代替 XMLHttpRequest 实现网络请求

## 预览
[点击这里查看DEMO](https://zy199226.github.io/vue_t/#/)

![DEMO二维码](https://raw.githubusercontent.com/zy199226/vue_t/master/dist/vvvv.png)

## 运行项目
```
  git clone https://github.com/zy199226/vue_t.git
  cd vue_t
  npm install webpack-dev-server webpack -g (没有安装webpack的需要安装)
  npm install
  npm start
```
## TODO
联系QQ122203566

## 最后说点什么
这个项目其实还有一些不合理的地方，比如 router 写得不够好，没有更好的实现组件化，只不过是因为项目小，所以没有优化修改。其实也因为写了一半，都怪我一开始没有考虑好

有一些页面只是单纯的内容展示，所以我没有写，因为感觉有点浪费时间，不影响主要功能就行了。

有一些版块其实可以组件化，但因为只用一次，所以。。。

不知道为什么没有写 react 爽快，可能是因为先写的 react 吧。其实也没什么，会用就行了，主要还是要深入学习原生 javascript

粉色应该好看点，对吧
