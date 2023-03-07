(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{666:function(v,_,t){"use strict";t.r(_);var e=t(1),a=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"面试官-说一下-get-和-post-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说一下-get-和-post-的区别"}},[v._v("#")]),v._v(" 面试官：说一下 GET 和 POST 的区别？")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/6e8d19e0-bc3d-11eb-ab90-d9ae814b240d.png",alt:""}})]),v._v(" "),_("h2",{attrs:{id:"一、是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[v._v("#")]),v._v(" 一、是什么")]),v._v(" "),_("p",[_("code",[v._v("GET")]),v._v("和"),_("code",[v._v("POST")]),v._v("，两者是"),_("code",[v._v("HTTP")]),v._v("协议中发送请求的方法")]),v._v(" "),_("h4",{attrs:{id:"get"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[v._v("#")]),v._v(" GET")]),v._v(" "),_("p",[_("code",[v._v("GET")]),v._v("方法请求一个指定资源的表示形式，使用GET的请求应该只被用于获取数据")]),v._v(" "),_("h4",{attrs:{id:"post"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#post"}},[v._v("#")]),v._v(" POST")]),v._v(" "),_("p",[_("code",[v._v("POST")]),v._v("方法用于将实体提交到指定的资源，通常导致在服务器上的状态变化或"),_("strong",[v._v("副作用")])]),v._v(" "),_("p",[v._v("本质上都是"),_("code",[v._v("TCP")]),v._v("链接，并无差别")]),v._v(" "),_("p",[v._v("但是由于"),_("code",[v._v("HTTP")]),v._v("的规定和浏览器/服务器的限制，导致他们在应用过程中会体现出一些区别")]),v._v(" "),_("h2",{attrs:{id:"二、区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、区别"}},[v._v("#")]),v._v(" 二、区别")]),v._v(" "),_("p",[v._v("从"),_("code",[v._v("w3schools")]),v._v("得到的标准答案的区别如下：")]),v._v(" "),_("ul",[_("li",[v._v("GET在浏览器回退时是无害的，而POST会再次提交请求。")]),v._v(" "),_("li",[v._v("GET产生的URL地址可以被Bookmark，而POST不可以。")]),v._v(" "),_("li",[v._v("GET请求会被浏览器主动cache，而POST不会，除非手动设置。")]),v._v(" "),_("li",[v._v("GET请求只能进行url编码，而POST支持多种编码方式。")]),v._v(" "),_("li",[v._v("GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。")]),v._v(" "),_("li",[v._v("GET请求在URL中传送的参数是有长度限制的，而POST没有。")]),v._v(" "),_("li",[v._v("对参数的数据类型，GET只接受ASCII字符，而POST没有限制。")]),v._v(" "),_("li",[v._v("GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。")]),v._v(" "),_("li",[v._v("GET参数通过URL传递，POST放在Request body中")])]),v._v(" "),_("h3",{attrs:{id:"参数位置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参数位置"}},[v._v("#")]),v._v(" 参数位置")]),v._v(" "),_("p",[v._v("貌似从上面看到"),_("code",[v._v("GET")]),v._v("与"),_("code",[v._v("POST")]),v._v("请求区别非常大，但两者实质并没有区别")]),v._v(" "),_("p",[v._v("无论 "),_("code",[v._v("GET")]),v._v("还是 "),_("code",[v._v("POST")]),v._v("，用的都是同一个传输层协议，所以在传输上没有区别")]),v._v(" "),_("p",[v._v("当不携带参数的时候，两者最大的区别为第一行方法名不同")]),v._v(" "),_("blockquote",[_("p",[v._v("POST /uri HTTP/1.1 \\r\\n")]),v._v(" "),_("p",[v._v("GET /uri HTTP/1.1 \\r\\n")])]),v._v(" "),_("p",[v._v("当携带参数的时候，我们都知道"),_("code",[v._v("GET")]),v._v("请求是放在"),_("code",[v._v("url")]),v._v("中，"),_("code",[v._v("POST")]),v._v("则放在"),_("code",[v._v("body")]),v._v("中")]),v._v(" "),_("p",[_("code",[v._v("GET")]),v._v(" 方法简约版报文是这样的")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("GET /index.html?name=qiming.c&age=22 HTTP/1.1\nHost: localhost\n")])])]),_("p",[_("code",[v._v("POST")]),v._v("方法简约版报文是这样的")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("POST /index.html HTTP/1.1\nHost: localhost\nContent-Type: application/x-www-form-urlencoded\n\nname=qiming.c&age=22\n")])])]),_("p",[v._v("注意：这里只是约定，并不属于"),_("code",[v._v("HTTP")]),v._v("规范，相反的，我们可以在"),_("code",[v._v("POST")]),v._v("请求中"),_("code",[v._v("url")]),v._v("中写入参数，或者"),_("code",[v._v("GET")]),v._v("请求中的"),_("code",[v._v("body")]),v._v("携带参数")]),v._v(" "),_("h3",{attrs:{id:"参数长度"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参数长度"}},[v._v("#")]),v._v(" 参数长度")]),v._v(" "),_("p",[_("code",[v._v("HTTP")]),v._v("协议没有"),_("code",[v._v("Body")]),v._v("和 "),_("code",[v._v("URL")]),v._v(" 的长度限制，对 "),_("code",[v._v("URL")]),v._v("限制的大多是浏览器和服务器的原因")]),v._v(" "),_("p",[_("code",[v._v("IE")]),v._v("对"),_("code",[v._v("URL")]),v._v("长度的限制是2083字节(2K+35)。对于其他浏览器，如Netscape、FireFox等，理论上没有长度限制，其限制取决于操作系统的支持")]),v._v(" "),_("p",[v._v("这里限制的是整个"),_("code",[v._v("URL")]),v._v("长度，而不仅仅是参数值的长度")]),v._v(" "),_("p",[v._v("服务器处理长"),_("code",[v._v("URL")]),v._v(" 要消耗比较多的资源，为了性能和安全考虑，会给 "),_("code",[v._v("URL")]),v._v(" 长度加限制")]),v._v(" "),_("h3",{attrs:{id:"安全"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[v._v("#")]),v._v(" 安全")]),v._v(" "),_("p",[_("code",[v._v("POST")]),v._v("比"),_("code",[v._v("GET")]),v._v(" 安全，因为数据在地址栏上不可见")]),v._v(" "),_("p",[v._v("然而，从传输的角度来说，他们都是不安全的，因为"),_("code",[v._v("HTTP")]),v._v(" 在网络上是明文传输的，只要在网络节点上捉包，就能完整地获取数据报文")]),v._v(" "),_("p",[v._v("只有使用"),_("code",[v._v("HTTPS")]),v._v("才能加密安全")]),v._v(" "),_("h3",{attrs:{id:"数据包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据包"}},[v._v("#")]),v._v(" 数据包")]),v._v(" "),_("p",[v._v("对于"),_("code",[v._v("GET")]),v._v("方式的请求，浏览器会把"),_("code",[v._v("http header")]),v._v("和"),_("code",[v._v("data")]),v._v("一并发送出去，服务器响应200（返回数据）")]),v._v(" "),_("p",[v._v("对于"),_("code",[v._v("POST")]),v._v("，浏览器先发送"),_("code",[v._v("header")]),v._v("，服务器响应100 "),_("code",[v._v("continue")]),v._v("，浏览器再发送"),_("code",[v._v("data")]),v._v("，服务器响应200 ok")]),v._v(" "),_("p",[v._v("并不是所有浏览器都会在"),_("code",[v._v("POST")]),v._v("中发送两次包，"),_("code",[v._v("Firefox")]),v._v("就只发送一次")]),v._v(" "),_("h2",{attrs:{id:"参考文献"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[v._v("#")]),v._v(" 参考文献")]),v._v(" "),_("ul",[_("li",[v._v("https://mp.weixin.qq.com/s?__biz=MzI3NzIzMzg3Mw==&mid=100000054&idx=1&sn=71f6c214f3833d9ca20b9f7dcd9d33e4#rd")]),v._v(" "),_("li",[v._v("https://blog.fundebug.com/2019/02/22/compare-http-method-get-and-post/")]),v._v(" "),_("li",[v._v("https://www.w3school.com.cn/tags/html_ref_httpmethods.asp")]),v._v(" "),_("li",[v._v("https://vue3js.cn/interview")])])])}),[],!1,null,null,null);_.default=a.exports}}]);