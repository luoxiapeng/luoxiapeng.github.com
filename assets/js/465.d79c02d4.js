(window.webpackJsonp=window.webpackJsonp||[]).push([[465],{752:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"面试官-如何提高webpack的构建速度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试官-如何提高webpack的构建速度"}},[t._v("#")]),t._v(" 面试官：如何提高webpack的构建速度？")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/3a1b8620-b01b-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"一、背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、背景"}},[t._v("#")]),t._v(" 一、背景")]),t._v(" "),s("p",[t._v("随着我们的项目涉及到页面越来越多，功能和业务代码也会随着越多，相应的 "),s("code",[t._v("webpack")]),t._v(" 的构建时间也会越来越久")]),t._v(" "),s("p",[t._v("构建时间与我们日常开发效率密切相关，当我们本地开发启动 "),s("code",[t._v("devServer")]),t._v(" 或者 "),s("code",[t._v("build")]),t._v(" 的时候，如果时间过长，会大大降低我们的工作效率")]),t._v(" "),s("p",[t._v("所以，优化"),s("code",[t._v("webpack")]),t._v(" 构建速度是十分重要的环节")]),t._v(" "),s("h2",{attrs:{id:"二、如何优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、如何优化"}},[t._v("#")]),t._v(" 二、如何优化")]),t._v(" "),s("p",[t._v("常见的提升构建速度的手段有如下：")]),t._v(" "),s("ul",[s("li",[t._v("优化 loader 配置")]),t._v(" "),s("li",[t._v("合理使用 resolve.extensions")]),t._v(" "),s("li",[t._v("优化 resolve.modules")]),t._v(" "),s("li",[t._v("优化 resolve.alias")]),t._v(" "),s("li",[t._v("使用 DLLPlugin 插件")]),t._v(" "),s("li",[t._v("使用 cache-loader")]),t._v(" "),s("li",[t._v("terser 启动多线程")]),t._v(" "),s("li",[t._v("合理使用 sourceMap")])]),t._v(" "),s("h3",{attrs:{id:"优化loader配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化loader配置"}},[t._v("#")]),t._v(" 优化loader配置")]),t._v(" "),s("p",[t._v("在使用"),s("code",[t._v("loader")]),t._v("时，可以通过配置"),s("code",[t._v("include")]),t._v("、"),s("code",[t._v("exclude")]),t._v("、"),s("code",[t._v("test")]),t._v("属性来匹配文件，接触"),s("code",[t._v("include")]),t._v("、"),s("code",[t._v("exclude")]),t._v("规定哪些匹配应用"),s("code",[t._v("loader")])]),t._v(" "),s("p",[t._v("如采用 ES6 的项目为例，在配置 "),s("code",[t._v("babel-loader")]),t._v("时，可以这样：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果项目源码中只有 js 文件就不要写成 /\\.jsx?$/，提升正则表达式性能")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.js$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// babel-loader 支持缓存转换出的结果，通过 cacheDirectory 选项开启")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader?cacheDirectory'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只对项目根目录下的 src 目录中的文件采用 babel-loader")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"合理使用-resolve-extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合理使用-resolve-extensions"}},[t._v("#")]),t._v(" 合理使用 resolve.extensions")]),t._v(" "),s("p",[t._v("在开发中我们会有各种各样的模块依赖，这些模块可能来自于自己编写的代码，也可能来自第三方库， "),s("code",[t._v("resolve")]),t._v("可以帮助"),s("code",[t._v("webpack")]),t._v("从每个 "),s("code",[t._v("require/import")]),t._v(" 语句中，找到需要引入到合适的模块代码")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("resolve.extensions")]),t._v("是解析到文件时自动添加拓展名，默认情况如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("extensions")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".warm"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".mjs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("当我们引入文件的时候，若没有文件后缀名，则会根据数组内的值依次查找")]),t._v(" "),s("p",[t._v("当我们配置的时候，则不要随便把所有后缀都写在里面，这会调用多次文件的查找，这样就会减慢打包速度")]),t._v(" "),s("h3",{attrs:{id:"优化-resolve-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化-resolve-modules"}},[t._v("#")]),t._v(" 优化 resolve.modules")]),t._v(" "),s("p",[s("code",[t._v("resolve.modules")]),t._v(" 用于配置 "),s("code",[t._v("webpack")]),t._v(" 去哪些目录下寻找第三方模块。默认值为"),s("code",[t._v("['node_modules']")]),t._v("，所以默认会从"),s("code",[t._v("node_modules")]),t._v("中查找文件\n当安装的第三方模块都放在项目根目录下的 "),s("code",[t._v("./node_modules")]),t._v("目录下时，所以可以指明存放第三方模块的绝对路径，以减少寻找，配置如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("module.exports = {\n  resolve: {\n    // 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤\n    // 其中 __dirname 表示当前工作目录，也就是项目根目录\n    modules: [path.resolve(__dirname, 'node_modules')]\n  },\n};\n")])])]),s("h3",{attrs:{id:"优化-resolve-alias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化-resolve-alias"}},[t._v("#")]),t._v(" 优化 resolve.alias")]),t._v(" "),s("p",[s("code",[t._v("alias")]),t._v("给一些常用的路径起一个别名，特别当我们的项目目录结构比较深的时候，一个文件的路径可能是"),s("code",[t._v("./../../")]),t._v("的形式")]),t._v(" "),s("p",[t._v("通过配置"),s("code",[t._v("alias")]),t._v("以减少查找过程")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("alias")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"@"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"使用-dllplugin-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-dllplugin-插件"}},[t._v("#")]),t._v(" 使用 DLLPlugin 插件")]),t._v(" "),s("p",[s("code",[t._v("DLL")]),t._v("全称是 动态链接库，是为软件在winodw种实现共享函数库的一种实现方式，而Webpack也内置了DLL的功能，为的就是可以共享，不经常改变的代码，抽成一个共享的库。这个库在之后的编译过程中，会被引入到其他项目的代码中")]),t._v(" "),s("p",[t._v("使用步骤分成两部分：")]),t._v(" "),s("ul",[s("li",[t._v("打包一个 DLL 库")]),t._v(" "),s("li",[t._v("引入 DLL 库")])]),t._v(" "),s("h4",{attrs:{id:"打包一个-dll-库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包一个-dll-库"}},[t._v("#")]),t._v(" 打包一个 DLL 库")]),t._v(" "),s("p",[s("code",[t._v("webpack")]),t._v("内置了一个"),s("code",[t._v("DllPlugin")]),t._v("可以帮助我们打包一个DLL的库文件")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DllPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dll_[name]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./dll/[name].mainfest.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"引入-dll-库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入-dll-库"}},[t._v("#")]),t._v(" 引入 DLL 库")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("webpack")]),t._v(" 自带的 "),s("code",[t._v("DllReferencePlugin")]),t._v(" 插件对 "),s("code",[t._v("mainfest.json")]),t._v(" 映射文件进行分析，获取要使用的"),s("code",[t._v("DLL")]),t._v("库")]),t._v(" "),s("p",[t._v("然后再通过"),s("code",[t._v("AddAssetHtmlPlugin")]),t._v("插件，将我们打包的"),s("code",[t._v("DLL")]),t._v("库引入到"),s("code",[t._v("Html")]),t._v("模块中")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DllReferencePlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./dll/dll_react.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mainfest")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./dll/react.mainfest.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AddAssetHtmlPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outputPath")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./auto"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filepath")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./dll/dll_react.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"使用-cache-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-cache-loader"}},[t._v("#")]),t._v(" 使用 cache-loader")]),t._v(" "),s("p",[t._v("在一些性能开销较大的 "),s("code",[t._v("loader")]),t._v("之前添加 "),s("code",[t._v("cache-loader")]),t._v("，以将结果缓存到磁盘里，显著提升二次构建速度")]),t._v(" "),s("p",[t._v("保存和读取这些缓存文件会有一些时间开销，所以请只对性能开销较大的 "),s("code",[t._v("loader")]),t._v(" 使用此"),s("code",[t._v("loader")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("module")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.ext$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cache-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("loaders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"terser-启动多线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#terser-启动多线程"}},[t._v("#")]),t._v(" terser 启动多线程")]),t._v(" "),s("p",[t._v("使用多进程并行运行来提高构建速度")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("optimization")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("minimizer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TerserPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("parallel")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"合理使用-sourcemap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合理使用-sourcemap"}},[t._v("#")]),t._v(" 合理使用 sourceMap")]),t._v(" "),s("p",[t._v("打包生成  "),s("code",[t._v("sourceMap")]),t._v(" 的时候，如果信息越详细，打包速度就会越慢。对应属性取值如下所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/11647af0-b01d-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"三、总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、总结"}},[t._v("#")]),t._v(" 三、总结")]),t._v(" "),s("p",[t._v("可以看到，优化"),s("code",[t._v("webpack")]),t._v("构建的方式有很多，主要可以从优化搜索时间、缩小文件搜索范围、减少不必要的编译等方面入手")]),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("ul",[s("li",[t._v("https://github.com/ly2011/blog/issues/44")]),t._v(" "),s("li",[t._v("https://xie.infoq.cn/article/541418eb82a674741a0ad8865")]),t._v(" "),s("li",[t._v("https://zhuanlan.zhihu.com/p/139498741")]),t._v(" "),s("li",[t._v("https://vue3js.cn/interview")])])])}),[],!1,null,null,null);s.default=n.exports}}]);