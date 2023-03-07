(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{747:function(s,t,a){"use strict";a.r(t);var e=a(1),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"面试官-说说webpack中常见的loader-解决了什么问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说webpack中常见的loader-解决了什么问题"}},[s._v("#")]),s._v(" 面试官：说说webpack中常见的Loader？解决了什么问题？")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/5660fc40-a6ff-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"一、是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[s._v("#")]),s._v(" 一、是什么")]),s._v(" "),t("p",[t("code",[s._v("loader")]),s._v(' 用于对模块的"源代码"进行转换，在 '),t("code",[s._v("import")]),s._v(' 或"加载"模块时预处理文件')]),s._v(" "),t("p",[t("code",[s._v("webpack")]),s._v("做的事情，仅仅是分析出各种模块的依赖关系，然后形成资源列表，最终打包生成到指定的文件中。如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/7b8d9640-a6ff-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("webpack")]),s._v("内部中，任何文件都是模块，不仅仅只是"),t("code",[s._v("js")]),s._v("文件")]),s._v(" "),t("p",[s._v("默认情况下，在遇到"),t("code",[s._v("import")]),s._v("或者"),t("code",[s._v("require")]),s._v("加载模块的时候，"),t("code",[s._v("webpack")]),s._v("只支持对"),t("code",[s._v("js")]),s._v(" 和 "),t("code",[s._v("json")]),s._v(" 文件打包")]),s._v(" "),t("p",[s._v("像"),t("code",[s._v("css")]),s._v("、"),t("code",[s._v("sass")]),s._v("、"),t("code",[s._v("png")]),s._v("等这些类型的文件的时候，"),t("code",[s._v("webpack")]),s._v("则无能为力，这时候就需要配置对应的"),t("code",[s._v("loader")]),s._v("进行文件内容的解析")]),s._v(" "),t("p",[s._v("在加载模块的时候，执行顺序如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/9c2c43b0-a6ff-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),s._v(" "),t("p",[s._v("当 "),t("code",[s._v("webpack")]),s._v(" 碰到不识别的模块的时候，"),t("code",[s._v("webpack")]),s._v(" 会在配置的中查找该文件解析规则")]),s._v(" "),t("p",[s._v("关于配置"),t("code",[s._v("loader")]),s._v("的方式有三种：")]),s._v(" "),t("ul",[t("li",[s._v("配置方式（推荐）：在 webpack.config.js文件中指定 loader")]),s._v(" "),t("li",[s._v("内联方式：在每个 import 语句中显式指定 loader")]),s._v(" "),t("li",[s._v("CLI 方式：在 shell 命令中指定它们")])]),s._v(" "),t("h3",{attrs:{id:"配置方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置方式"}},[s._v("#")]),s._v(" 配置方式")]),s._v(" "),t("p",[s._v("关于"),t("code",[s._v("loader")]),s._v("的配置，我们是写在"),t("code",[s._v("module.rules")]),s._v("属性中，属性介绍如下：")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("rules")]),s._v("是一个数组的形式，因此我们可以配置很多个"),t("code",[s._v("loader")])])]),s._v(" "),t("li",[t("p",[s._v("每一个"),t("code",[s._v("loader")]),s._v("对应一个对象的形式，对象属性"),t("code",[s._v("test")]),s._v(" 为匹配的规则，一般情况为正则表达式")])]),s._v(" "),t("li",[t("p",[s._v("属性"),t("code",[s._v("use")]),s._v("针对匹配到文件类型，调用对应的 "),t("code",[s._v("loader")]),s._v(" 进行处理")])])]),s._v(" "),t("p",[s._v("代码编写，如下形式：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("module")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.css$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("loader")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("loader")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("options")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("modules")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("loader")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sass-loader'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"二、特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、特性"}},[s._v("#")]),s._v(" 二、特性")]),s._v(" "),t("p",[s._v("这里继续拿上述代码，来讲讲"),t("code",[s._v("loader")]),s._v("的特性")]),s._v(" "),t("p",[s._v("从上述代码可以看到，在处理"),t("code",[s._v("css")]),s._v("模块的时候，"),t("code",[s._v("use")]),s._v("属性中配置了三个"),t("code",[s._v("loader")]),s._v("分别处理"),t("code",[s._v("css")]),s._v("文件")]),s._v(" "),t("p",[s._v("因为"),t("code",[s._v("loader")]),s._v("支持链式调用，链中的每个"),t("code",[s._v("loader")]),s._v("会处理之前已处理过的资源，最终变为"),t("code",[s._v("js")]),s._v("代码。顺序为相反的顺序执行，即上述执行方式为"),t("code",[s._v("sass-loader")]),s._v("、"),t("code",[s._v("css-loader")]),s._v("、"),t("code",[s._v("style-loader")])]),s._v(" "),t("p",[s._v("除此之外，"),t("code",[s._v("loader")]),s._v("的特性还有如下：")]),s._v(" "),t("ul",[t("li",[s._v("loader 可以是同步的，也可以是异步的")]),s._v(" "),t("li",[s._v("loader 运行在 Node.js 中，并且能够执行任何操作")]),s._v(" "),t("li",[s._v("除了常见的通过 "),t("code",[s._v("package.json")]),s._v(" 的 "),t("code",[s._v("main")]),s._v(" 来将一个 npm 模块导出为 loader，还可以在 module.rules 中使用 "),t("code",[s._v("loader")]),s._v(" 字段直接引用一个模块")]),s._v(" "),t("li",[s._v("插件(plugin)可以为 loader 带来更多特性")]),s._v(" "),t("li",[s._v("loader 能够产生额外的任意文件")])]),s._v(" "),t("p",[s._v("可以通过 loader 的预处理函数，为 JavaScript 生态系统提供更多能力。用户现在可以更加灵活地引入细粒度逻辑，例如：压缩、打包、语言翻译和更多其他特性")]),s._v(" "),t("h2",{attrs:{id:"三、常见的loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、常见的loader"}},[s._v("#")]),s._v(" 三、常见的loader")]),s._v(" "),t("p",[s._v("在页面开发过程中，我们经常性加载除了"),t("code",[s._v("js")]),s._v("文件以外的内容，这时候我们就需要配置响应的"),t("code",[s._v("loader")]),s._v("进行加载")]),s._v(" "),t("p",[s._v("常见的"),t("code",[s._v("loader")]),s._v("如下：")]),s._v(" "),t("ul",[t("li",[s._v("style-loader: 将css添加到DOM的内联样式标签style里")]),s._v(" "),t("li",[s._v("css-loader :允许将css文件通过require的方式引入，并返回css代码")]),s._v(" "),t("li",[s._v("less-loader: 处理less")]),s._v(" "),t("li",[s._v("sass-loader: 处理sass")]),s._v(" "),t("li",[s._v("postcss-loader: 用postcss来处理CSS")]),s._v(" "),t("li",[s._v("autoprefixer-loader: 处理CSS3属性前缀，已被弃用，建议直接使用postcss")]),s._v(" "),t("li",[s._v("file-loader: 分发文件到output目录并返回相对路径")]),s._v(" "),t("li",[s._v("url-loader: 和file-loader类似，但是当文件小于设定的limit时可以返回一个Data Url")]),s._v(" "),t("li",[s._v("html-minify-loader: 压缩HTML")]),s._v(" "),t("li",[s._v("babel-loader :用babel来转换ES6文件到ES")])]),s._v(" "),t("p",[s._v("下面给出一些常见的"),t("code",[s._v("loader")]),s._v("的使用：")]),s._v(" "),t("h3",{attrs:{id:"css-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-loader"}},[s._v("#")]),s._v(" css-loader")]),s._v(" "),t("p",[s._v("分析 "),t("code",[s._v("css")]),s._v(" 模块之间的关系，并合成⼀个 "),t("code",[s._v("css")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save-dev css-loader\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.css$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("loader")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"css-loader"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("options")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启用/禁用 url() 处理")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("url")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启用/禁用 @import 处理")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启用/禁用 Sourcemap")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("sourceMap")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("如果只通过"),t("code",[s._v("css-loader")]),s._v("加载文件，这时候页面代码设置的样式并没有生效")]),s._v(" "),t("p",[s._v("原因在于，"),t("code",[s._v("css-loader")]),s._v("只是负责将"),t("code",[s._v(".css")]),s._v("文件进行一个解析，而并不会将解析后的"),t("code",[s._v("css")]),s._v("插入到页面中")]),s._v(" "),t("p",[s._v("如果我们希望再完成插入"),t("code",[s._v("style")]),s._v("的操作，那么我们还需要另外一个"),t("code",[s._v("loader")]),s._v("，就是"),t("code",[s._v("style-loader")])]),s._v(" "),t("h3",{attrs:{id:"style-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#style-loader"}},[s._v("#")]),s._v(" style-loader")]),s._v(" "),t("p",[s._v("把 "),t("code",[s._v("css-loader")]),s._v(" 生成的内容，用 "),t("code",[s._v("style")]),s._v(" 标签挂载到页面的 "),t("code",[s._v("head")]),s._v(" 中")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save-dev style-loader\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.css$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"style-loader"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"css-loader"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("同一个任务的 "),t("code",[s._v("loader")]),s._v(" 可以同时挂载多个，处理顺序为：从右到左，从下往上")]),s._v(" "),t("h3",{attrs:{id:"less-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#less-loader"}},[s._v("#")]),s._v(" less-loader")]),s._v(" "),t("p",[s._v("开发中，我们也常常会使用"),t("code",[s._v("less")]),s._v("、"),t("code",[s._v("sass")]),s._v("、"),t("code",[s._v("stylus")]),s._v("预处理器编写"),t("code",[s._v("css")]),s._v("样式，使开发效率提高，这里需要使用"),t("code",[s._v("less-loader")])]),s._v(" "),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm install less-loader -D\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.css$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"style-loader"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"css-loader"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"less-loader"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("h3",{attrs:{id:"raw-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raw-loader"}},[s._v("#")]),s._v(" raw-loader")]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("webpack")]),s._v("中通过 "),t("code",[s._v("import")]),s._v("方式导入文件内容，该"),t("code",[s._v("loader")]),s._v("并不是内置的，所以首先要安装")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save-dev raw-loader\n")])])]),t("p",[s._v("然后在 webpack.config.js 中进行配置")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("module")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.(txt|md)$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'raw-loader'")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h3",{attrs:{id:"file-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-loader"}},[s._v("#")]),s._v(" file-loader")]),s._v(" "),t("p",[s._v("把识别出的资源模块，移动到指定的输出⽬目录，并且返回这个资源在输出目录的地址(字符串)")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save-dev file-loader\n")])])]),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.(png|jpe?g|gif)$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("loader")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file-loader"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("options")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// placeholder 占位符 [name] 源资源模块的名称")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [ext] 源资源模块的后缀")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[name]_[hash].[ext]"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//打包后的存放位置")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("outputPath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./images"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打包后文件的 url")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("publicPath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./images'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("h3",{attrs:{id:"url-loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url-loader"}},[s._v("#")]),s._v(" url-loader")]),s._v(" "),t("p",[s._v("可以处理理 "),t("code",[s._v("file-loader")]),s._v(" 所有的事情，但是遇到图片格式的模块，可以选择性的把图片转成 "),t("code",[s._v("base64")]),s._v("  格式的字符串，并打包到 "),t("code",[s._v("js")]),s._v(" 中，对小体积的图片比较合适，大图片不合适。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save-dev url-loader\n")])])]),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.(png|jpe?g|gif)$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("loader")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url-loader"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("options")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// placeholder 占位符 [name] 源资源模块的名称")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [ext] 源资源模块的后缀")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[name]_[hash].[ext]"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//打包后的存放位置")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("outputPath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./images"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打包后文件的 url")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("publicPath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./images'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 小于 100 字节转成 base64 格式")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("limit")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),t("ul",[t("li",[s._v("https://webpack.docschina.org/concepts/loaders/")]),s._v(" "),t("li",[s._v("https://segmentfault.com/a/1190000018680530")]),s._v(" "),t("li",[s._v("https://vue3js.cn/interview/")])])])}),[],!1,null,null,null);t.default=r.exports}}]);