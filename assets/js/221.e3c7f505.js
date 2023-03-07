(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{508:function(e,t,r){"use strict";r.r(t);var o=r(1),a=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"详解-http-报文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#详解-http-报文"}},[e._v("#")]),e._v(" 详解 HTTP 报文")]),e._v(" "),t("p",[e._v("我们上面描述了一下 HTTP 的请求响应过程，流程比较简单，但是凡事就怕认真，你这一认真，就能拓展出很多东西，比如 HTTP 报文是什么样的，它的组成格式是什么？ 下面就来探讨一下")]),e._v(" "),t("p",[e._v("HTTP 协议主要由三大部分组成：")]),e._v(" "),t("ul",[t("li",[e._v("起始行（start line）：描述请求或响应的基本信息；")]),e._v(" "),t("li",[e._v("头部字段（header）：使用 key-value 形式更详细地说明报文；")]),e._v(" "),t("li",[e._v("消息正文（entity）：实际传输的数据，它不一定是纯文本，可以是图片、视频等二进制数据。")])]),e._v(" "),t("p",[e._v("其中起始行和头部字段并成为 请求头 或者 响应头，统称为 Header；消息正文也叫做实体，称为 body。HTTP 协议规定每次发送的报文必须要有 Header，但是可以没有 body，也就是说头信息是必须的，实体信息可以没有。而且在 header 和 body 之间必须要有一个空行（CRLF），如果用一幅图来表示一下的话，我觉得应该是下面这样")]),e._v(" "),t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/10/16f8f77382f2e9cc?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"}}),e._v(" "),t("p",[e._v("我们使用上面的那个例子来看一下 http 的请求报文")]),e._v(" "),t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/10/16f8f773ad4160ae?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"}}),e._v(" "),t("p",[e._v("如图，这是 "),t("a",{attrs:{href:"http://www.someSchool.edu/someDepartment/home.index",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.someSchool.edu/someDepartment/home.index"),t("OutboundLink")],1),e._v(" 请求的请求头，通过观察这个 HTTP 报文我们就能够学到很多东西，首先，我们看到报文是用普通 ASCII 文本书写的，这样保证人能够可以看懂。然后，我们可以看到每一行和下一行之间都会有换行，而且最后一行（请求头部后）再加上一个回车换行符。\n每个报文的起始行都是由三个字段组成：方法、URL 字段和 HTTP 版本字段。")]),e._v(" "),t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/10/16f8f773ac6b9fdc?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"}})])}),[],!1,null,null,null);t.default=a.exports}}]);