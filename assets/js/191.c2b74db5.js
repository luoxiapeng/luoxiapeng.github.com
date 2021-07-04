(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{543:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"安装-egg-js-开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-egg-js-开发环境"}},[t._v("#")]),t._v(" 安装 egg.js 开发环境")]),t._v(" "),a("h2",{attrs:{id:"认识-egg-js-框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认识-egg-js-框架"}},[t._v("#")]),t._v(" 认识 egg.js 框架")]),t._v(" "),a("p",[t._v("egg.js 是由阿里开源的面向企业级开发的 Node.js 服务端框架，目的就是帮助团队和开发人员降低开发和维护成本。需要说的是他的底层是 Koa2 来搭建的。（这个框架完全可以开一节新课程讲一下，里边的内容还是非常多的，但是我们在个人博客这样简单的系统中，使用的并不是很多，所以我就用到那里给大家讲那里，不用的我就不讲了。）Koa2 虽然已经很好了，但是它并没有任何约定和规范，这样在团队开发中，会出现混乱的现象。")]),t._v(" "),a("p",[t._v("Github 地址：https://github.com/eggjs/egg")]),t._v(" "),a("p",[t._v("目前项目由 1.3 万 star，是非常火爆的开源项目，不过使用的大部分都是国人。框架主要是简化我们的开发流程。")]),t._v(" "),a("h2",{attrs:{id:"搭建开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建开发环境"}},[t._v("#")]),t._v(" 搭建开发环境")]),t._v(" "),a("p",[t._v("我们先进入到项目的根文件夹中，然后在根文件夹下，建立一个 service 的文件夹，这就是中台的文件夹了。")]),t._v(" "),a("p",[t._v("全局安装"),a("code",[t._v("egg.js")]),t._v("的脚手架工具"),a("code",[t._v("egg-init")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i egg-init -g\n")])])]),a("p",[t._v("因为 npm 的源还是比较慢的，所以需要多等一些时间。安装完成后，用 cd 命令进入 service 文件夹。 用脚手架自动生成项目的基本结构，在终端中直接输入下面的命令。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("egg-init --type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("simple\n")])])]),a("p",[t._v("如果不成功，你需要多式几次，这多是网络不顺畅造成的，所以没有什么更好的办法来解决。等待顺利完成后，可以打开文件夹，看一下是否自动生成了很多文件和文件夹。但是现在还没有安装相关的依赖包，所以要使用命令安装 egg 项目所需要的所有依赖包。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("p",[t._v("安装完成后，就可以启动服务查看一下结果了。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])]),a("p",[t._v("然后在浏览器中打开网址:http://127.0.0.1:7001/")]),t._v(" "),a("p",[t._v("如果在页面中显示 hi.egg 说明我们环境搭建完成。这节课也就先到这里，下节课我们继续开发中台。")]),t._v(" "),a("h2",{attrs:{id:"egg-js-目录结构和约定规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#egg-js-目录结构和约定规范"}},[t._v("#")]),t._v(" egg.js 目录结构和约定规范")]),t._v(" "),a("h3",{attrs:{id:"egg-js-目录结构介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#egg-js-目录结构介绍"}},[t._v("#")]),t._v(" egg.js 目录结构介绍")]),t._v(" "),a("p",[t._v("这里我只介绍比较重要的文件，如果是开发中不太常用的我就不作过多介绍了，毕竟我们这是实战项目，讲解太多的基础知识会耽误大家时间。大家可以自己去看文档（文档全部中文，很好理解）。")]),t._v(" "),a("ul",[a("li",[t._v("app 文件夹:项目开发文件，程序员主要操作的文件，项目的大部分代码都会写在这里。")]),t._v(" "),a("li",[t._v("config 文件夹：这个是整个项目的配置目录，项目和服务端的配置都在这里边进行设置。")]),t._v(" "),a("li",[t._v("logs 文件夹：日志文件夹，正常情况下不用修改和查看里边内容。")]),t._v(" "),a("li",[t._v("node_modules:项目所需要的模块文件，这个前端应该都非常了解，不多作介绍。")]),t._v(" "),a("li",[t._v("run 文件夹：运行项目时，生成的配置文件，基本不修改里边的文件。")]),t._v(" "),a("li",[t._v("test 文件夹：测试使用的配合文件，这个在测试时会使用。")]),t._v(" "),a("li",[t._v("autod.conf.js: egg.js 自己生成的配置文件，不需要进行修改。")]),t._v(" "),a("li",[t._v("eslinttrc 和 eslintignore：代码格式化的配置文件。")]),t._v(" "),a("li",[t._v("gitgnore：git 设置忽略管理的配置文件。")]),t._v(" "),a("li",[t._v("package.json： 包管理和命令配置文件，这个文件经常进行配置。")])]),t._v(" "),a("p",[t._v("这些就是 egg.js 项目比较重要的一些文件作用，这里只是简单的介绍了一下，在以后课程中如果开发用到，我们会详细讲解。比较重要的是 app 文件夹、config 文件夹和 package.json 文件。")]),t._v(" "),a("h2",{attrs:{id:"egg-js-目录约定规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#egg-js-目录约定规范"}},[t._v("#")]),t._v(" Egg.js 目录约定规范")]),t._v(" "),a("p",[t._v("上节课我说过 Koa2 框架虽然小巧好用，但是在团队开发中使用，是缺少规范的，所以不擅长企业级开发。Egg.js 框架就是在 Koa2 的基础上规范了这些约定，所以也带来了一些文件目录的限制。")]),t._v(" "),a("p",[t._v("在 app 目录下，egg 要求我们必须要有下面的文件：")]),t._v(" "),a("ul",[a("li",[t._v("controller 文件夹：控制器，渲染和简单的业务逻辑都会写道这个文件里。配置路由时也会用到（路由配置需要的文件都要写在控制器里）。")]),t._v(" "),a("li",[t._v("public 文件夹：公用文件夹，把一些公用资源都放在这个文件夹下。")]),t._v(" "),a("li",[t._v("router.js: 项目的路由配置文件，当用户访问服务的时候，在没有中间件的情况下，会先访问 router.js 文件。")]),t._v(" "),a("li",[t._v("service 文件夹：这个是当我们的业务逻辑比较复杂或和数据库打交道时，会把业务逻辑放到这个文件中。")]),t._v(" "),a("li",[t._v("view 文件夹：模板文件夹，相当于表现层的专属文件夹，这个项目，我们使用接口的形式，所以不需要建立 view 文件夹。")]),t._v(" "),a("li",[t._v("extend 文件：当我们需要写一些模板中使用的扩展方法时，我们会放到这个文件夹里。")]),t._v(" "),a("li",[t._v("middleware：中间件文件夹，用来写中间件的，比如最常用的路由首位。")])]),t._v(" "),a("p",[t._v("当然我们现在有个最基础的，然后又需要再不断向文件夹里加文件就可以。")]),t._v(" "),a("p",[t._v("现在我们作一个小例子，在/app/controller/home.js 文件中，加入一个 list 方法，然后再进行配置路由。")]),t._v(" "),a("p",[t._v("home.js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ctx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<h1>dmz blog list</h1>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("router.js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {Egg.Application} app - egg application\n */")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" controller "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/list'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这时候，你启动一下服务，然后访问一下,http://127.0.0.1:7001/list,可以看到我们的页面放生了变化。")]),t._v(" "),a("p",[t._v("这节课就到这里，大家只要理解 egg.js 目录结构和相应的约定规范就可以了。")]),t._v(" "),a("h2",{attrs:{id:"restful-api-设计简介和路由配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful-api-设计简介和路由配置"}},[t._v("#")]),t._v(" RESTful API 设计简介和路由配置")]),t._v(" "),a("p",[t._v("我们的所有数据的获得和业务逻辑的操作都是通过中台实现的，也就是说中台只提供接口，这里的设计我们采用 RESTful 的规则，让 egg 为前端提供 Api 接口，实现中台主要的功能。")]),t._v(" "),a("h2",{attrs:{id:"restful-简介和约束方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful-简介和约束方式"}},[t._v("#")]),t._v(" RESTful 简介和约束方式")]),t._v(" "),a("p",[t._v("RESTful 是目前最流行的网络应用程序设计风格和开发方式，大量使用在移动端 App 上和前后端分离的接口设计。这种形式更直观并且接口也有了一定的约束性。")]),t._v(" "),a("p",[t._v("约束的请求方式和对应的操作。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("GET(SELECT)")]),t._v(" ： 从服务端取出资源，可以同时取出一项或者多项。")]),t._v(" "),a("li",[a("strong",[t._v("POST(CREATE)")]),t._v(" ：在服务器新建一个资源。")]),t._v(" "),a("li",[a("strong",[t._v("PUT(UPDATE)")]),t._v(" ：在服务器更新资源（客户端提供改变后的完整资源）。")]),t._v(" "),a("li",[a("strong",[t._v("DELETE(DELETE)")]),t._v(" ：从服务器删除资源")])]),t._v(" "),a("p",[t._v("还有一些不常用的请求方式，因为不常用或者说我们的博客中用不到，所以我就不作过多的介绍了。")]),t._v(" "),a("h2",{attrs:{id:"在-egg-js-中-api-接口的路由配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-egg-js-中-api-接口的路由配置"}},[t._v("#")]),t._v(" 在 egg.js 中 Api 接口的路由配置")]),t._v(" "),a("p",[t._v("首先打开 service 根目录下的 controller 文件夹，在这个文件夹中新建两个文件夹 admin（管理端使用的所有 API 接口）和 default（客户端使用的所有 API 接口）文件夹。")]),t._v(" "),a("p",[t._v("目前我们只有客户端（前台）的页面，所以先在 default 目录下建立一个 home.js 文件，用于前台首页所需要的 api 接口。代码如下：")]),t._v(" "),a("p",[t._v("/service/app/controller/default/home.js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Controller "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'egg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Controller\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HomeController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Controller")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api接口'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HomeController\n")])])]),a("p",[t._v("接口写好以后，我们需要配置一下路由。这里为了把路由也分成前后端分离的，所以在 app 文件夹下新建一个 router 文件夹。")]),t._v(" "),a("p",[t._v("在文件夹下新建两个文件 default.js 和 admin.js。")]),t._v(" "),a("p",[t._v("default.js 文件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" controller "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/default/index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("router.js 文件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {Egg.Application} app - egg application\n */")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./router/default'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("编写好以后，我们使用 yarn dev 命令进行开启服务器，然后到浏览器中输入地址http://127.0.0.1:7001/default/index,如果能出现api接口字样，说明已经完成了基本的路由设置。")])])}),[],!1,null,null,null);s.default=e.exports}}]);