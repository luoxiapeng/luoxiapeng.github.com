(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{563:function(v,_,t){"use strict";t.r(_);var a=t(1),s=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"面试官-说说你对node-js-的理解-优缺点-应用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说你对node-js-的理解-优缺点-应用场景"}},[v._v("#")]),v._v(" 面试官：说说你对Node.js 的理解？优缺点？应用场景？")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/b565d240-c1e6-11eb-ab90-d9ae814b240d.png",alt:""}})]),v._v(" "),_("h2",{attrs:{id:"一、是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[v._v("#")]),v._v(" 一、是什么")]),v._v(" "),_("p",[_("code",[v._v("Node.js")]),v._v(" 是一个开源与跨平台的 "),_("code",[v._v("JavaScript")]),v._v(" 运行时环境")]),v._v(" "),_("p",[v._v("在浏览器外运行 V8 JavaScript 引擎（Google Chrome 的内核），利用事件驱动、非阻塞和异步输入输出模型等技术提高性能")]),v._v(" "),_("p",[v._v("可以理解为 "),_("code",[v._v("Node.js")]),v._v(" 就是一个服务器端的、非阻塞式I/O的、事件驱动的"),_("code",[v._v("JavaScript")]),v._v("运行环境")]),v._v(" "),_("h3",{attrs:{id:"非阻塞异步"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#非阻塞异步"}},[v._v("#")]),v._v(" 非阻塞异步")]),v._v(" "),_("p",[_("code",[v._v("Nodejs")]),v._v("采用了非阻塞型"),_("code",[v._v("I/O")]),v._v("机制，在做"),_("code",[v._v("I/O")]),v._v("操作的时候不会造成任何的阻塞，当完成之后，以时间的形式通知执行操作")]),v._v(" "),_("p",[v._v("例如在执行了访问数据库的代码之后，将立即转而执行其后面的代码，把数据库返回结果的处理代码放在回调函数中，从而提高了程序的执行效率")]),v._v(" "),_("h3",{attrs:{id:"事件驱动"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动"}},[v._v("#")]),v._v(" 事件驱动")]),v._v(" "),_("p",[v._v("事件驱动就是当进来一个新的请求的时，请求将会被压入一个事件队列中，然后通过一个循环来检测队列中的事件状态变化，如果检测到有状态变化的事件，那么就执行该事件对应的处理代码，一般都是回调函数")]),v._v(" "),_("p",[v._v("比如读取一个文件，文件读取完毕后，就会触发对应的状态，然后通过对应的回调函数来进行处理")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/a7729590-c1e8-11eb-ab90-d9ae814b240d.png",alt:""}})]),v._v(" "),_("h2",{attrs:{id:"二、优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、优缺点"}},[v._v("#")]),v._v(" 二、优缺点")]),v._v(" "),_("p",[v._v("优点：")]),v._v(" "),_("ul",[_("li",[v._v("处理高并发场景性能更佳")]),v._v(" "),_("li",[v._v("适合I/O密集型应用，值的是应用在运行极限时，CPU占用率仍然比较低，大部分时间是在做 I/O硬盘内存读写操作")])]),v._v(" "),_("p",[v._v("因为"),_("code",[v._v("Nodejs")]),v._v("是单线程，带来的缺点有：")]),v._v(" "),_("ul",[_("li",[v._v("不适合CPU密集型应用")]),v._v(" "),_("li",[v._v("只支持单核CPU，不能充分利用CPU")]),v._v(" "),_("li",[v._v("可靠性低，一旦代码某个环节崩溃，整个系统都崩溃")])]),v._v(" "),_("h2",{attrs:{id:"三、应用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、应用场景"}},[v._v("#")]),v._v(" 三、应用场景")]),v._v(" "),_("p",[v._v("借助"),_("code",[v._v("Nodejs")]),v._v("的特点和弊端，其应用场景分类如下：")]),v._v(" "),_("ul",[_("li",[v._v("善于"),_("code",[v._v("I/O")]),v._v("，不善于计算。因为Nodejs是一个单线程，如果计算（同步）太多，则会阻塞这个线程")]),v._v(" "),_("li",[v._v("大量并发的I/O，应用程序内部并不需要进行非常复杂的处理")]),v._v(" "),_("li",[v._v("与 websocket 配合，开发长连接的实时交互应用程序")])]),v._v(" "),_("p",[v._v("具体场景可以表现为如下：")]),v._v(" "),_("ul",[_("li",[v._v("第一大类：用户表单收集系统、后台管理系统、实时交互系统、考试系统、联网软件、高并发量的web应用程序")]),v._v(" "),_("li",[v._v("第二大类：基于web、canvas等多人联网游戏")]),v._v(" "),_("li",[v._v("第三大类：基于web的多人实时聊天客户端、聊天室、图文直播")]),v._v(" "),_("li",[v._v("第四大类：单页面浏览器应用程序")]),v._v(" "),_("li",[v._v("第五大类：操作数据库、为前端和移动端提供基于"),_("code",[v._v("json")]),v._v("的API")])]),v._v(" "),_("p",[v._v("其实，"),_("code",[v._v("Nodejs")]),v._v("能实现几乎一切的应用，只考虑适不适合使用它")]),v._v(" "),_("h2",{attrs:{id:"参考文献"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[v._v("#")]),v._v(" 参考文献")]),v._v(" "),_("ul",[_("li",[v._v("http://nodejs.cn/")]),v._v(" "),_("li",[v._v("https://segmentfault.com/a/1190000019854308")]),v._v(" "),_("li",[v._v("https://segmentfault.com/a/1190000005173218")])])])}),[],!1,null,null,null);_.default=s.exports}}]);