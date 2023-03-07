(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{391:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"开发规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发规范"}},[t._v("#")]),t._v(" 开发规范")]),t._v(" "),s("p",[t._v("为了实现多端兼容，综合考虑编译速度、运行性能等因素，uni-app 约定了如下开发规范：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("页面文件遵循 Vue 单文件组件 (SFC) 规范")])]),t._v(" "),s("li",[s("p",[t._v("组件标签靠近小程序规范，详见 uni-app 组件规范")])]),t._v(" "),s("li",[s("p",[t._v("接口能力（JS API）靠近微信小程序规范，但需将前缀 wx 替换为 uni，详见 uni-app 接口规范")])]),t._v(" "),s("li",[s("p",[t._v("数据绑定及事件处理同 Vue.js 规范，同时补充了 App 及页面的生命周期")])]),t._v(" "),s("li",[s("p",[t._v("为兼容多端运行，建议使用 flex 布局进行开发")])])]),t._v(" "),s("h2",{attrs:{id:"目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),s("p",[t._v("一个 uni-app 工程，默认包含如下目录及文件：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("┌─uniCloud              云空间目录，阿里云为uniCloud"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("aliyun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("腾讯云为uniCloud"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("tcb（详见uniCloud）\n│─components            符合vue组件规范的uni"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app组件目录\n│  └─comp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue         可复用的a组件\n├─hybrid                App端存放本地html文件的目录，详见\n├─platforms             存放各平台专用页面的目录，详见\n├─pages                 业务页面文件存放的目录\n│  ├─index\n│  │  └─index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue       index页面\n│  └─list\n│     └─list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue        list页面\n├─"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v("                存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此\n├─uni_modules           存放"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("uni_module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("uni_modules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("规范的插件。\n├─wxcomponents          存放小程序组件的目录，详见\n├─main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js               Vue初始化入口文件\n├─App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue               应用配置，用来配置App全局样式以及监听 应用生命周期\n├─manifest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json         配置应用名称、appid、logo、版本等打包信息，详见\n└─pages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json            配置页面路由、导航条、选项卡等页面类信息，详见\n\n")])])]),s("h2",{attrs:{id:"tips"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[t._v("#")]),t._v(" Tips")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("编译到任意平台时，static 目录下的文件均会被完整打包进去，且不会编译。非 static 目录下的文件（vue、js、css 等）只有被引用到才会被打包编译进去")])]),t._v(" "),s("li",[s("p",[t._v("static 目录下的 js 文件不会被编译，如果里面有 es6 的代码，不经过转换直接运行，在手机设备上会报错。")])]),t._v(" "),s("li",[s("p",[t._v("css、less/scss 等资源不要放在 static 目录下，建议这些公用的资源放在自建的 common 目录下。")])]),t._v(" "),s("li",[s("p",[t._v("HbuilderX 1.9.0+ 支持在根目录创建 ext.json、sitemap.json 等小程序需要的文件。")])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("有效目录")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("有效目录")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("app-plus")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("App")])]),t._v(" "),s("tr",[s("td",[t._v("h5")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("H5")])]),t._v(" "),s("tr",[s("td",[t._v("mp-weixin")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("微信小程序")])]),t._v(" "),s("tr",[s("td",[t._v("mp-alipay")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("支付宝小程序")])]),t._v(" "),s("tr",[s("td",[t._v("mp-baidu")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("百度小程序")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);