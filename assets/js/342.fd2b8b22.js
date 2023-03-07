(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{629:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"面试官-css3动画有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试官-css3动画有哪些"}},[t._v("#")]),t._v(" 面试官：css3动画有哪些？")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/d12e2380-9c0a-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"一、是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),s("p",[t._v("CSS动画（CSS Animations）是为层叠样式表建议的允许可扩展标记语言（XML）元素使用CSS的动画的模块")]),t._v(" "),s("p",[t._v("即指元素从一种样式逐渐过渡为另一种样式的过程")]),t._v(" "),s("p",[t._v("常见的动画效果有很多，如平移、旋转、缩放等等，复杂动画则是多个简单动画的组合")]),t._v(" "),s("p",[s("code",[t._v("css")]),t._v("实现动画的方式，有如下几种：")]),t._v(" "),s("ul",[s("li",[t._v("transition 实现渐变动画")]),t._v(" "),s("li",[t._v("transform 转变动画")]),t._v(" "),s("li",[t._v("animation 实现自定义动画")])]),t._v(" "),s("h2",{attrs:{id:"二、实现方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、实现方式"}},[t._v("#")]),t._v(" 二、实现方式")]),t._v(" "),s("h3",{attrs:{id:"transition-实现渐变动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transition-实现渐变动画"}},[t._v("#")]),t._v(" transition 实现渐变动画")]),t._v(" "),s("p",[s("code",[t._v("transition")]),t._v("的属性如下：")]),t._v(" "),s("ul",[s("li",[t._v("property:填写需要变化的css属性")]),t._v(" "),s("li",[t._v("duration:完成过渡效果需要的时间单位(s或者ms)")]),t._v(" "),s("li",[t._v("timing-function:完成效果的速度曲线")]),t._v(" "),s("li",[t._v("delay: 动画效果的延迟触发时间")])]),t._v(" "),s("p",[t._v("其中"),s("code",[t._v("timing-function")]),t._v("的值有如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("linear")]),t._v(" "),s("td",[t._v("匀速（等于 cubic-bezier(0,0,1,1)）")])]),t._v(" "),s("tr",[s("td",[t._v("ease")]),t._v(" "),s("td",[t._v("从慢到快再到慢（cubic-bezier(0.25,0.1,0.25,1)）")])]),t._v(" "),s("tr",[s("td",[t._v("ease-in")]),t._v(" "),s("td",[t._v("慢慢变快（等于 cubic-bezier(0.42,0,1,1)）")])]),t._v(" "),s("tr",[s("td",[t._v("ease-out")]),t._v(" "),s("td",[t._v("慢慢变慢（等于 cubic-bezier(0,0,0.58,1)）")])]),t._v(" "),s("tr",[s("td",[t._v("ease-in-out")]),t._v(" "),s("td",[t._v("先变快再到慢（等于 cubic-bezier(0.42,0,0.58,1)），渐显渐隐效果")])]),t._v(" "),s("tr",[s("td",[t._v("cubic-bezier("),s("em",[t._v("n")]),t._v(","),s("em",[t._v("n")]),t._v(","),s("em",[t._v("n")]),t._v(","),s("em",[t._v("n")]),t._v(")")]),t._v(" "),s("td",[t._v("在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值")])])])]),t._v(" "),s("p",[t._v("注意：并不是所有的属性都能使用过渡的，如"),s("code",[t._v("display:none<->display:block")])]),t._v(" "),s("p",[t._v("举个例子，实现鼠标移动上去发生变化动画效果")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n       "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".base")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #0EA9FF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" solid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #5daf34"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" background-color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" border-width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-timing-function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ease-in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 500ms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*简写*/")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*transition: all 2s ease-in 500ms;*/")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".base:hover")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #5daf34"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #3a8ee6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"transform-转变动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transform-转变动画"}},[t._v("#")]),t._v(" transform 转变动画")]),t._v(" "),s("p",[t._v("包含四个常用的功能：")]),t._v(" "),s("ul",[s("li",[t._v("translate：位移")]),t._v(" "),s("li",[t._v("scale：缩放")]),t._v(" "),s("li",[t._v("rotate：旋转")]),t._v(" "),s("li",[t._v("skew：倾斜")])]),t._v(" "),s("p",[t._v("一般配合"),s("code",[t._v("transition")]),t._v("过度使用")]),t._v(" "),s("p",[t._v("注意的是，"),s("code",[t._v("transform")]),t._v("不支持"),s("code",[t._v("inline")]),t._v("元素，使用前把它变成"),s("code",[t._v("block")])]),t._v(" "),s("p",[t._v("举个例子")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".base")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #0EA9FF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" solid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #5daf34"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" background-color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" border-width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-timing-function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ease-in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 500ms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".base2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5ms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".base2:hover")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1.5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("35deg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("skew")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5deg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("15px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 25px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("base base2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("可以看到盒子发生了旋转，倾斜，平移，放大")]),t._v(" "),s("h3",{attrs:{id:"animation-实现自定义动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#animation-实现自定义动画"}},[t._v("#")]),t._v(" animation 实现自定义动画")]),t._v(" "),s("p",[s("code",[t._v("animation")]),t._v("是由 8 个属性的简写，分别如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("属性值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("animation-duration")]),t._v(" "),s("td",[t._v("指定动画完成一个周期所需要时间，单位秒（s）或毫秒（ms），默认是 0")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("animation-timing-function")]),t._v(" "),s("td",[t._v('指定动画计时函数，即动画的速度曲线，默认是 "ease"')]),t._v(" "),s("td",[t._v("linear、ease、ease-in、ease-out、ease-in-out")])]),t._v(" "),s("tr",[s("td",[t._v("animation-delay")]),t._v(" "),s("td",[t._v("指定动画延迟时间，即动画何时开始，默认是 0")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("animation-iteration-count")]),t._v(" "),s("td",[t._v("指定动画播放的次数，默认是 1")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("animation-direction 指定动画播放的方向")]),t._v(" "),s("td",[t._v("默认是 normal")]),t._v(" "),s("td",[t._v("normal、reverse、alternate、alternate-reverse")])]),t._v(" "),s("tr",[s("td",[t._v("animation-fill-mode")]),t._v(" "),s("td",[t._v("指定动画填充模式。默认是 none")]),t._v(" "),s("td",[t._v("forwards、backwards、both")])]),t._v(" "),s("tr",[s("td",[t._v("animation-play-state")]),t._v(" "),s("td",[t._v("指定动画播放状态，正在运行或暂停。默认是 running")]),t._v(" "),s("td",[t._v("running、pauser")])]),t._v(" "),s("tr",[s("td",[t._v("animation-name")]),t._v(" "),s("td",[t._v("指定 @keyframes 动画的名称")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[s("code",[t._v("CSS")]),t._v(" 动画只需要定义一些关键的帧，而其余的帧，浏览器会根据计时函数插值计算出来，")]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("@keyframes")]),t._v(" 来定义关键帧")]),t._v(" "),s("p",[t._v("因此，如果我们想要让元素旋转一圈，只需要定义开始和结束两帧即可：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" rotate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0deg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("360deg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("from")]),t._v(" 表示最开始的那一帧，"),s("code",[t._v("to")]),t._v(" 表示结束时的那一帧")]),t._v(" "),s("p",[t._v("也可以使用百分比刻画生命周期")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" rotate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("0%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0deg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("50%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("180deg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("100%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("360deg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("定义好了关键帧后，下来就可以直接用它了：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rotate 2s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"三、总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、总结"}},[t._v("#")]),t._v(" 三、总结")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("transition（过度）")]),t._v(" "),s("td",[t._v("用于设置元素的样式过度，和animation有着类似的效果，但细节上有很大的不同")])]),t._v(" "),s("tr",[s("td",[t._v("transform（变形）")]),t._v(" "),s("td",[t._v("用于元素进行旋转、缩放、移动或倾斜，和设置样式的动画并没有什么关系，就相当于color一样用来设置元素的“外表”")])]),t._v(" "),s("tr",[s("td",[t._v("translate（移动）")]),t._v(" "),s("td",[t._v("只是transform的一个属性值，即移动")])]),t._v(" "),s("tr",[s("td",[t._v("animation（动画）")]),t._v(" "),s("td",[t._v("用于设置动画属性，他是一个简写的属性，包含6个属性")])])])]),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("ul",[s("li",[t._v("https://segmentfault.com/a/1190000022540857")]),t._v(" "),s("li",[t._v("https://zh.m.wikipedia.org/wiki/CSS%E5%8A%A8%E7%94%BB")]),t._v(" "),s("li",[t._v("https://vue3js.cn/interview")])])])}),[],!1,null,null,null);s.default=r.exports}}]);