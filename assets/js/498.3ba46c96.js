(window.webpackJsonp=window.webpackJsonp||[]).push([[498],{785:function(v,_,t){"use strict";t.r(_);var e=t(1),l=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"内容概览"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内容概览"}},[v._v("#")]),v._v(" 内容概览")]),v._v(" "),_("p",[v._v("WebSocket 的出现，使得浏览器具备了实时双向通信的能力。本文由浅入深，介绍了 WebSocket 如何建立连接、交换数据的细节，以及数据帧的格式。此外，还简要介绍了针对 WebSocket 的安全攻击，以及协议是如何抵御类似攻击的。")]),v._v(" "),_("h2",{attrs:{id:"什么是-websocket"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-websocket"}},[v._v("#")]),v._v(" 什么是 WebSocket")]),v._v(" "),_("p",[v._v("HTML5 开始提供的一种浏览器与服务器进行全双工通讯的网络技术，属于应用层协议。它基于 TCP 传输协议，并复用 HTTP 的握手通道。")]),v._v(" "),_("p",[v._v("对大部分 web 开发者来说，上面这段描述有点枯燥，其实只要记住几点：")]),v._v(" "),_("ul",[_("li",[v._v("WebSocket 可以在浏览器里使用")]),v._v(" "),_("li",[v._v("支持双向通信")]),v._v(" "),_("li",[v._v("使用很简单")])]),v._v(" "),_("p",[v._v("有哪些优点")]),v._v(" "),_("p",[v._v("说到优点，这里的对比参照物是 HTTP 协议，概括地说就是：支持双向通信，更灵活，更高效，可扩展性更好。")]),v._v(" "),_("ul",[_("li",[v._v("支持双向通信，实时性更强。")]),v._v(" "),_("li",[v._v("更好的二进制支持。")]),v._v(" "),_("li",[v._v("较少的控制开销。连接创建后，ws 客户端、服务端进行数据交换时，协议控制的数据包头部较小。在不包含头部的情况下，服务端到客户端的包头只有 2~10 字节（取决于数据包长度），客户端到服务端的的话，需要加上额外的 4 字节的掩码。而 HTTP 协议每次通信都需要携带完整的头部。")]),v._v(" "),_("li",[v._v("支持扩展。ws 协议定义了扩展，用户可以扩展协议，或者实现自定义的子协议。（比如支持自定义压缩算法等）")])]),v._v(" "),_("p",[v._v("对于后面两点，没有研究过 WebSocket 协议规范的同学可能理解起来不够直观，但不影响对 WebSocket 的学习和使用。")]),v._v(" "),_("p",[v._v("需要学习哪些东西")]),v._v(" "),_("p",[v._v("对网络应用层协议的学习来说，最重要的往往就是连接建立过程、数据交换教程。当然，数据的格式是逃不掉的，因为它直接决定了协议本身的能力。好的数据格式能让协议更高效、扩展性更好。")]),v._v(" "),_("p",[v._v("下文主要围绕下面几点展开：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("如何建立连接")])]),v._v(" "),_("li",[_("p",[v._v("如何交换数据")])]),v._v(" "),_("li",[_("p",[v._v("数据帧格式")])]),v._v(" "),_("li",[_("p",[v._v("如何维持连接")])])])])}),[],!1,null,null,null);_.default=l.exports}}]);