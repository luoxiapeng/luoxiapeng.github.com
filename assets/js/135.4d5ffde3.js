(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{422:function(t,a,l){"use strict";l.r(a);var e=l(1),p=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"微应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微应用"}},[t._v("#")]),t._v(" 微应用")]),t._v(" "),a("p",[t._v("微应用分为有 webpack 构建和无 webpack 构建项目，有 webpack 的微应用（主要是指 Vue、React、Angular）需要做的事情有：")]),t._v(" "),a("ul",[a("li",[t._v("新增 public-path.js 文件，用于修改运行时的 publicPath。什么是运行时的 publicPath ？。")])]),t._v(" "),a("blockquote",[a("p",[t._v("注意：运行时的 publicPath 和构建时的 publicPath 是不同的，两者不能等价替代")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("微应用建议使用 history 模式的路由，需要设置路由 base，值和它的 activeRule 是一样的。")])]),t._v(" "),a("li",[a("p",[t._v("在入口文件最顶部引入 public-path.js，修改并导出三个生命周期函数。")])]),t._v(" "),a("li",[a("p",[t._v("修改 webpack 打包，允许开发环境跨域和 umd 打包。")])])]),t._v(" "),a("p",[t._v("主要的修改就是以上四个，可能会根据项目的不同情况而改变。例如，你的项目是 index.html 和其他的所有文件分开部署的，说明你们已经将构建时的 publicPath 设置为了完整路径，则不用修改运行时的 publicPath （第一步操作可省）。")]),t._v(" "),a("p",[t._v("无 webpack 构建的微应用直接将 lifecycles 挂载到 window 上即可。")])])}),[],!1,null,null,null);a.default=p.exports}}]);