(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{545:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"egg-js-线上部署-利用-pkg-打包-egg-js-工程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#egg-js-线上部署-利用-pkg-打包-egg-js-工程"}},[s._v("#")]),s._v(" Egg.js 线上部署——利用 pkg 打包 Egg.js 工程")]),s._v(" "),a("h2",{attrs:{id:"利用-pkg-打包-egg-js-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用-pkg-打包-egg-js-代码"}},[s._v("#")]),s._v(" 利用 pkg 打包 Egg.js 代码")]),s._v(" "),a("p",[s._v("pkg 是将整个工程打包为一个二进制文件，包括 node 运行环境一起打包，非常方便迁移，而且不需要客户环境重新部署 Node.js 以及下载相关依赖，具体步骤如下：")]),s._v(" "),a("h2",{attrs:{id:"安装-pkg-参考-pkg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-pkg-参考-pkg"}},[s._v("#")]),s._v(" 安装 pkg(参考 pkg)")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  npm install pkg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g\n")])])]),a("p",[s._v("配置 Egg.js 的 public 路径。由于打包后为二进制文件，对于某些用户将前端代码放在 Egg.js 工程目录下的将不能操作，于是修改 Egg.js 的 public 路径配置到运行路径下")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改config/config.default.js")]),s._v("\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("static "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cwd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/public'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("配置 Egg.js 的运行时路径。由于 Egg.js 运行时会生成 run 文件夹以及相关文件，而 pkg 打包后为二进制文件，不能在继续进行写操作，故将 rundir 配置到运行路径下：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//修改config/config.default.js")]),s._v("\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rundir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cwd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/run'")]),s._v("\n")])])]),a("h2",{attrs:{id:"修改-package-json-配置-pkg-相关参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-package-json-配置-pkg-相关参数"}},[s._v("#")]),s._v(" 修改 package.json 配置 pkg 相关参数")]),s._v(" "),a("p",[s._v("将代码以静态文件方式添加到打包中：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//修改package.json，增加pkg节点")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pkg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"assets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./config/*.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./app.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./app/**/*.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./node_modules/nanoid/**/*.js"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//该行为必须添加，由于Egg.js使用nanoid库，其中用到一个文件pkg未能解析，于是手动添加")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"配置-pkg-入口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-pkg-入口"}},[s._v("#")]),s._v(" 配置 pkg 入口")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改package.json，增加bin节点，指定入口文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build.js"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// build.js文件内容")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/node_modules/egg-scripts/bin/egg-scripts.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h2",{attrs:{id:"配置-build-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-build-命令"}},[s._v("#")]),s._v(" 配置 build 命令")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改package.json,在scripts下增加build命令")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pkg . --targets node8-linux-x64 --out-path /usr/dist  --debug"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// --targets 指定node版本为8以及linux-x64")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// --out-path 指定打包后文件输出路径")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// --debug 指定debug模式编译")]),s._v("\n")])])]),a("h2",{attrs:{id:"开始打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始打包"}},[s._v("#")]),s._v(" 开始打包")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 初次打包时间较长，后续打包pkg会使用node缓存，提高打包效率")]),s._v("\n    npm run build\n")])])]),a("h2",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("test_pkg start "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("snapshot"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("test_pkg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9001")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test_pkg\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ./test_pkg 打包后的二进制文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// /snapshot/test_pkg 其中/snapshot为必须路径，test_pkg为工程目录路径")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// --port --title等支持与平常启动时的任意命令参数")]),s._v("\n")])])]),a("p",[s._v("以上即完成了 Egg.js 的项目打包工作，这时可能有人会想到数据库相关配置怎么动态来改变呢？ C++编译的模块能否支持打包呢？，那请继续阅读。")]),s._v(" "),a("h2",{attrs:{id:"如何支持动态-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何支持动态-config"}},[s._v("#")]),s._v(" 如何支持动态 config")]),s._v(" "),a("p",[s._v("可能有人会想到利用 Egg.js 的启动周期来做呀，那么说对了，就是利用 configWillLoad 周期来做，在项目中创建 app.js 文件（如果已经有的请忽略），利用周期读取外部 config.js，然后替换 config/config.default.js 内容，示例代码如下：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 替换sequelize的storage，替换dataPath路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AppBootHook")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("app "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" app\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("configWillLoad")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" customConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cwd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/config.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sequelize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("storage "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" customConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dbPath\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dataPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" customConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dataPath\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" AppBootHook\n")])])]),a("h2",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),a("p",[s._v("Node.js 大部分用户应该都会使用 sequelize，而对于 Egg.js 使用 egg-sequelize，由于 egg-sequelize 周期中包含 agent.js，启动时读取 config/config.default.js，会导致启动失败，于是本人修改了一版 egg-sequelize_pkg 用于打包使用，除配置名称差异外使用方法与 egg-sequelize 一致，不需要修改原有代码,如下配置更改即可")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// {app_root}/config/plugin.js")]),s._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sequelizePkg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  enable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'egg-sequelize_pkg'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// {app_root}/config/config.default.js")]),s._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sequelizePkg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("github 地址为：https://github.com/MrSmallLiu/egg-sequelize_pkg 欢迎提问题，也欢迎 star")]),s._v(" "),a("h2",{attrs:{id:"c-模块引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-模块引入"}},[s._v("#")]),s._v(" C++模块引入")]),s._v(" "),a("p",[s._v("pkg 介绍对于 C++编译的.node 模块，在打包时不会将其打包进二进制文件中，故需要特殊处理，目前是修改源码引用（各位有好的办法可以推荐给我）,然后将.node 模块拿到运行目录下：")]),s._v(" "),a("ul",[a("li",[s._v("修改 node_modules 中对应模块源码的 require 二进制文件的地方，将其修改为：")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 以node-sqlite3为例")]),s._v("\n将lib "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" sqlite3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js中的\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" binding "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("binding_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n修改为\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" binding "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cwd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/node_sqlite3.node'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("将源码中的 node_sqlite3.node 文件拷贝到编译后的运行目录，将整个文件夹 zip 即可在任何地方运行")])])}),[],!1,null,null,null);t.default=e.exports}}]);