(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{501:function(t,a,s){"use strict";s.r(a);var e=s(1),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"内容协商"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容协商"}},[t._v("#")]),t._v(" 内容协商")]),t._v(" "),a("p",[t._v("内容协商机制是指客户端和服务器端就响应的资源内容进行交涉，然后提供给客户端最为适合的资源。内容协商会以响应资源的语言、字符集、编码方式等作为判断的标准。")]),t._v(" "),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/10/16f8f7740ad04855?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"}}),t._v(" "),a("p",[t._v("内容协商主要有以下 3 种类型：")]),t._v(" "),a("ul",[a("li",[t._v("服务器驱动协商（Server-driven Negotiation）")])]),t._v(" "),a("p",[t._v("这种协商方式是由服务器端进行内容协商。服务器端会根据请求首部字段进行自动处理")]),t._v(" "),a("ul",[a("li",[t._v("客户端驱动协商（Agent-driven Negotiation）")])]),t._v(" "),a("p",[t._v("这种协商方式是由客户端来进行内容协商。")]),t._v(" "),a("ul",[a("li",[t._v("透明协商（Transparent Negotiation）")])]),t._v(" "),a("p",[t._v("是服务器驱动和客户端驱动的结合体，是由服务器端和客户端各自进行内容协商的一种方法。\n内容协商的分类有很多种，主要的几种类型是 Accept、Accept-Charset、Accept-Encoding、Accept-Language、Content-Language。")]),t._v(" "),a("h2",{attrs:{id:"accept"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accept"}},[t._v("#")]),t._v(" Accept")]),t._v(" "),a("p",[t._v("接受请求 HTTP 标头会通告客户端其能够理解的 MIME 类型")]),t._v(" "),a("p",[t._v("那么什么是 MIME 类型呢？在回答这个问题前你应该先了解一下什么是 MIME")]),t._v(" "),a("blockquote",[a("p",[t._v("MIME: MIME (Multipurpose Internet Mail Extensions) 是描述消息内容类型的因特网标准。MIME 消息能包含文本、图像、音频、视频以及其他应用程序专用的数据。")])]),t._v(" "),a("p",[t._v("也就是说，MIME 类型其实就是一系列消息内容类型的集合。那么 MIME 类型都有哪些呢？")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("文本文件： text/html、text/plain、text/css、application/xhtml+xml、application/xml")])]),t._v(" "),a("li",[a("p",[t._v("图片文件： image/jpeg、image/gif、image/png")])]),t._v(" "),a("li",[a("p",[t._v("视频文件： video/mpeg、video/quicktime")])]),t._v(" "),a("li",[a("p",[t._v("应用程序二进制文件： application/octet-stream、application/zip")])])]),t._v(" "),a("p",[t._v("比如，如果浏览器不支持 PNG 图片的显示，那 Accept 就不指定 image/png，而指定可处理的 image/gif 和 image/jpeg 等图片类型。")]),t._v(" "),a("p",[t._v("一般 MIME 类型也会和 q 这个属性一起使用，q 是什么？q 表示的是权重，来看一个例子")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Accept")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xhtml"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*;q=0.8\n")])])])]),a("p",[t._v("这是什么意思呢？若想要给显示的媒体类型增加优先级，则使用 q= 来额外表示权重值，没有显示权重的时候默认值是 1.0 ，我给你列个表格你就明白了")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"right"}},[t._v("q")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("MIME")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("1.0")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("text/html")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("1.0")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("application/xhtml+xml")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("0.9")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("application/xml")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("0.8")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[a("em",[t._v("/")])])])])]),t._v(" "),a("p",[t._v("也就是说，这是一个放置顺序，权重高的在前，低的在后，application/xml;q=0.9 是不可分割的整体。")]),t._v(" "),a("h2",{attrs:{id:"accept-charset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accept-charset"}},[t._v("#")]),t._v(" Accept-Charset")]),t._v(" "),a("p",[t._v("accept-charset 属性规定服务器处理表单数据所接受的字符集。\naccept-charset 属性允许您指定一系列字符集，服务器必须支持这些字符集，从而得以正确解释表单中的数据。\n该属性的值是用引号包含字符集名称列表。如果可接受字符集与用户所使用的字符即不相匹配的话，浏览器可以选择忽略表单或是将该表单区别对待。\n此属性的默认值是 unknown，表示表单的字符集与包含表单的文档的字符集相同。\n常用的字符集有： UTF-8 - Unicode 字符编码 ； ISO-8859-1 - 拉丁字母表的字符编码")]),t._v(" "),a("h2",{attrs:{id:"accept-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accept-language"}},[t._v("#")]),t._v(" Accept-Language")]),t._v(" "),a("p",[t._v("首部字段 Accept-Language 用来告知服务器用户代理能够处理的自然语言集（指中文或英文等），以及自然语言集的相对优先级。可一次指定多种自然语言集。 和 Accept 首部字段一样，按权重值 q 来表示相对优先级。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Accept"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Language"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" en"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("US")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v("\n")])])]),a("p",[t._v("请求标头我们大概就介绍这几种，后面会有一篇文章详细深挖所有的响应头的，下面是一个响应头的汇总，基于 HTTP 1.1")]),t._v(" "),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/10/16f8f77424b4fd0b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"}}),t._v(" "),a("h2",{attrs:{id:"响应标头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应标头"}},[t._v("#")]),t._v(" 响应标头")]),t._v(" "),a("p",[t._v("响应标头是可以在 HTTP 响应种使用的 HTTP 标头，这听起来是像一句废话，不过确实是这样解释。并不是所有出现在响应中的标头都是响应标头。还有一些特殊的我们上面说过，有通用标头和实体标头也会出现在响应标头中，比如 Content-Length 就是一个实体标头，但是，在这种情况下，这些实体请求通常称为响应头。下面以一个例子为例和你探讨一下响应头")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OK")]),t._v("\nAccess"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Allow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Connection")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Keep"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Alive\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" gzip\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Mon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" Jul "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("06")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Etag")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c561c68d0ba92bbeb8b0f612a9199f722e3a621a"')]),t._v("\nKeep"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Alive"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("997")]),t._v("\nLast"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Modified"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Mon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" Jul "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("02")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("04")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Server")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Apache\nSet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Cookie"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mykey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("myvalue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" expires"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Mon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Jul"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("06")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31449600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" secure\nTransfer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" chunked\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Vary")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Accept"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding\nx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("frame"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DENY")]),t._v("\n\n")])])]),a("p",[t._v("响应状态码")]),t._v(" "),a("p",[t._v("首先出现的应该就是 200 OK，这是 HTTP 响应标头的状态码，它表示着响应成功完成。HTTP 响应标头的状态码有很多，并做了如下规定")]),t._v(" "),a("p",[t._v("以 2xx 为开头的都表示请求成功响应。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"right"}},[t._v("状态码")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("200")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("成功响应")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("204")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("请求处理成功，但是没有资源可以返回")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("206")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("对资源某一部分进行响应，由 Content-Range 指定范围的实体内容。")])])])]),t._v(" "),a("p",[t._v("以 3xx 为开头的都表示需要进行附加操作以完成请求")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"right"}},[t._v("状态码")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("301")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("永久性重定向，该状态码表示请求的资源已经重新分配 URI，以后应该使用资源现有的 URI")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("302")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("临时性重定向。该状态码表示请求的资源已被分配了新的 URI，希望用户（本次）能使用新的 URI 访问。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("303")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("该状态码表示由于请求对应的资源存在着另一个 URI，应使用 GET 方法定向获取请求的资源。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("304")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("该状态码表示客户端发送附带条件的请求时，服务器端允许请求访问资源，但未满足条件的情况。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("307")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("临时重定向。该状态码与 302 Found 有着相同的含义。")])])])]),t._v(" "),a("p",[t._v("以 4xx 的响应结果表明客户端是发生错误的原因所在。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"right"}},[t._v("状态码")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("400")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("该状态码表示请求报文中存在语法错误。当错误发生时，需修改请求的内容后再次发送请求。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("401")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("该状态码表示发送的请求需要有通过 HTTP 认证（BASIC 认证、DIGEST 认证）的认证信息。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("403")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("该状态码表明对请求资源的访问被服务器拒绝了。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("404")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("该状态码表明服务器上无法找到请求的资源。")])])])]),t._v(" "),a("p",[t._v("以 5xx 为开头的响应标头都表示服务器本身发生错误")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"right"}},[t._v("状态码")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("500")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("该状态码表明服务器端在执行请求时发生了错误。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"right"}},[t._v("503")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("该状态码表明服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。")])])])]),t._v(" "),a("h2",{attrs:{id:"access-control-allow-origin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-control-allow-origin"}},[t._v("#")]),t._v(" Access-Control-Allow-Origin")]),t._v(" "),a("p",[t._v("一个返回的 HTTP 标头可能会具有 Access-Control-Allow-Origin ，Access-Control-Allow-Origin 指定一个来源，它告诉浏览器允许该来源进行资源访问。 否则-对于没有凭据的请求 *通配符，告诉浏览器允许任何源访问资源。例如，要允许源 "),a("a",{attrs:{href:"https://mozilla.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mozilla.org"),a("OutboundLink")],1),t._v(" 的代码访问资源，可以指定：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Access"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Allow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mozilla"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Vary")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Origin\n\n")])])]),a("p",[t._v("如果服务器指定单个来源而不是 *通配符的话 ，则服务器还应在 Vary 响应标头中包含 Origin ，以向客户端指示 服务器响应将根据原始请求标头的值而有所不同。")]),t._v(" "),a("h2",{attrs:{id:"keep-alive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive"}},[t._v("#")]),t._v(" Keep-Alive")]),t._v(" "),a("p",[t._v("上面我们提到，HTTP 报文标头会分为四种，这其实是按着上下文来分类的")]),t._v(" "),a("p",[t._v("还有一种分类是根据代理进行分类，根据代理会分为端到端头 和 逐跳标头")]),t._v(" "),a("p",[t._v("而 Keep-Alive 表示的是 Connection 非持续连接的存活时间，如下")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Connection")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Keep"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Alive\nKeep"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Alive"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("997")]),t._v("\n\n")])])]),a("p",[t._v("Keep-Alive 有两个参数，它们是以逗号分隔的参数列表，每个参数由一个标识符和一个由等号 = 分隔的值组成。")]),t._v(" "),a("ul",[a("li",[t._v("timeout：指示空闲连接必须保持打开状态的最短时间（以秒为单位）。")]),t._v(" "),a("li",[t._v("max：指示在关闭连接之前可以在此连接上发送的最大请求数。")])]),t._v(" "),a("p",[t._v("上述 HTTP 代码的意思就是限制最大的超时时间是 5s 和 最大的连接请求是 997 个。")]),t._v(" "),a("h2",{attrs:{id:"server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[t._v("#")]),t._v(" Server")]),t._v(" "),a("p",[t._v("服务器标头包含有关原始服务器用来处理请求的软件的信息。")]),t._v(" "),a("p",[t._v("应该避免使用过于冗长和详细的 Server 值，因为它们可能会泄露内部实施细节，这可能会使攻击者容易地发现并利用已知的安全漏洞。例如下面这种写法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Server")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Apache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.4")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Unix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"set-cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-cookie"}},[t._v("#")]),t._v(" Set-Cookie")]),t._v(" "),a("p",[t._v("Cookie 又是另外一个领域的内容了，我们后面文章会说道 Cookie，这里需要记住 Cookie、Set-Cookie 和 Content-Disposition 等在其他 RFC 中定义的首部字段，它们不是属于 HTTP 1.1 的首部字段，但是使用率仍然很高。")]),t._v(" "),a("h2",{attrs:{id:"transfer-encoding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transfer-encoding"}},[t._v("#")]),t._v(" Transfer-Encoding")]),t._v(" "),a("p",[t._v("首部字段 Transfer-Encoding 规定了传输报文主体时采用的编码方式。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Transfer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" chunked\n")])])]),a("p",[t._v("HTTP /1.1 的传输编码方式仅对分块传输编码有效。")]),t._v(" "),a("h2",{attrs:{id:"x-frame-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#x-frame-options"}},[t._v("#")]),t._v(" X-Frame-Options")]),t._v(" "),a("p",[t._v("HTTP 首部字段是可以自行扩展的。所以在 Web 服务器和浏览器的应用上，会出现各种非标准的首部字段。\n首部字段 X-Frame-Options 属于 HTTP 响应首部，用于控制网站内容在其他 Web 网站的 Frame 标签内的显示问题。其主要目的是为了防止点击劫持（clickjacking）攻击。\n下面是一个响应头的汇总，基于 HTTP 1.1")]),t._v(" "),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/10/16f8f773ffb5140f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1"}})])}),[],!1,null,null,null);a.default=r.exports}}]);