(window.webpackJsonp=window.webpackJsonp||[]).push([[451],{732:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"面试官-v-show和v-if有什么区别-使用场景分别是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试官-v-show和v-if有什么区别-使用场景分别是什么"}},[t._v("#")]),t._v(" 面试官：v-show和v-if有什么区别？使用场景分别是什么？")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/d21c3c50-3acb-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"一、v-show与v-if的共同点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、v-show与v-if的共同点"}},[t._v("#")]),t._v(" 一、v-show与v-if的共同点")]),t._v(" "),s("p",[t._v("我们都知道在 "),s("code",[t._v("vue")]),t._v(" 中 "),s("code",[t._v("v-show")]),t._v(" 与 "),s("code",[t._v("v-if")]),t._v(" 的作用效果是相同的(不含v-else)，都能控制元素在页面是否显示")]),t._v(" "),s("p",[t._v("在用法上也是相同的")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Model v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("show"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isShow"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Model v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isShow"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("ul",[s("li",[t._v("当表达式为"),s("code",[t._v("true")]),t._v("的时候，都会占据页面的位置")]),t._v(" "),s("li",[t._v("当表达式都为"),s("code",[t._v("false")]),t._v("时，都不会占据页面位置")])]),t._v(" "),s("h2",{attrs:{id:"二、v-show与v-if的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、v-show与v-if的区别"}},[t._v("#")]),t._v(" 二、v-show与v-if的区别")]),t._v(" "),s("ul",[s("li",[t._v("控制手段不同")]),t._v(" "),s("li",[t._v("编译过程不同")]),t._v(" "),s("li",[t._v("编译条件不同")])]),t._v(" "),s("p",[t._v("控制手段："),s("code",[t._v("v-show")]),t._v("隐藏则是为该元素添加"),s("code",[t._v("css--display:none")]),t._v("，"),s("code",[t._v("dom")]),t._v("元素依旧还在。"),s("code",[t._v("v-if")]),t._v("显示隐藏是将"),s("code",[t._v("dom")]),t._v("元素整个添加或删除")]),t._v(" "),s("p",[t._v("编译过程："),s("code",[t._v("v-if")]),t._v("切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；"),s("code",[t._v("v-show")]),t._v("只是简单的基于css切换")]),t._v(" "),s("p",[t._v("编译条件："),s("code",[t._v("v-if")]),t._v("是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。只有渲染条件为假时，并不做操作，直到为真才渲染")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("v-show")]),t._v(" 由"),s("code",[t._v("false")]),t._v("变为"),s("code",[t._v("true")]),t._v("的时候不会触发组件的生命周期")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("v-if")]),t._v("由"),s("code",[t._v("false")]),t._v("变为"),s("code",[t._v("true")]),t._v("的时候，触发组件的"),s("code",[t._v("beforeCreate")]),t._v("、"),s("code",[t._v("create")]),t._v("、"),s("code",[t._v("beforeMount")]),t._v("、"),s("code",[t._v("mounted")]),t._v("钩子，由"),s("code",[t._v("true")]),t._v("变为"),s("code",[t._v("false")]),t._v("的时候触发组件的"),s("code",[t._v("beforeDestory")]),t._v("、"),s("code",[t._v("destoryed")]),t._v("方法")])])]),t._v(" "),s("p",[t._v("性能消耗："),s("code",[t._v("v-if")]),t._v("有更高的切换消耗；"),s("code",[t._v("v-show")]),t._v("有更高的初始渲染消耗；")]),t._v(" "),s("h2",{attrs:{id:"三、v-show与v-if原理分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、v-show与v-if原理分析"}},[t._v("#")]),t._v(" 三、v-show与v-if原理分析")]),t._v(" "),s("p",[t._v("具体解析流程这里不展开讲，大致流程如下")]),t._v(" "),s("ul",[s("li",[t._v("将模板"),s("code",[t._v("template")]),t._v("转为"),s("code",[t._v("ast")]),t._v("结构的"),s("code",[t._v("JS")]),t._v("对象")]),t._v(" "),s("li",[t._v("用"),s("code",[t._v("ast")]),t._v("得到的"),s("code",[t._v("JS")]),t._v("对象拼装"),s("code",[t._v("render")]),t._v("和"),s("code",[t._v("staticRenderFns")]),t._v("函数")]),t._v(" "),s("li",[s("code",[t._v("render")]),t._v("和"),s("code",[t._v("staticRenderFns")]),t._v("函数被调用后生成虚拟"),s("code",[t._v("VNODE")]),t._v("节点，该节点包含创建"),s("code",[t._v("DOM")]),t._v("节点所需信息")]),t._v(" "),s("li",[s("code",[t._v("vm.patch")]),t._v("函数通过虚拟"),s("code",[t._v("DOM")]),t._v("算法利用"),s("code",[t._v("VNODE")]),t._v("节点创建真实"),s("code",[t._v("DOM")]),t._v("节点")])]),t._v(" "),s("h3",{attrs:{id:"v-show原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-show原理"}},[t._v("#")]),t._v(" v-show原理")]),t._v(" "),s("p",[t._v("不管初始条件是什么，元素总是会被渲染")]),t._v(" "),s("p",[t._v("我们看一下在"),s("code",[t._v("vue")]),t._v("中是如何实现的")]),t._v(" "),s("p",[t._v("代码很好理解，有"),s("code",[t._v("transition")]),t._v("就执行"),s("code",[t._v("transition")]),t._v("，没有就直接设置"),s("code",[t._v("display")]),t._v("属性")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://github.com/vuejs/vue-next/blob/3cd30c5245da0733f9eb6f29d220f39c46518162/packages/runtime-dom/src/directives/vShow.ts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("vShow")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ObjectDirective"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VShowElement"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeMount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" transition "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_vod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("transition "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      transition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEnter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDisplay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" transition "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("transition "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      transition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updated")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldValue "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" transition "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeUnmount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDisplay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"v-if原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-if原理"}},[t._v("#")]),t._v(" v-if原理")]),t._v(" "),s("p",[s("code",[t._v("v-if")]),t._v("在实现上比"),s("code",[t._v("v-show")]),t._v("要复杂的多，因为还有"),s("code",[t._v("else")]),t._v(" "),s("code",[t._v("else-if")]),t._v(" 等条件需要处理，这里我们也只摘抄源码中处理 "),s("code",[t._v("v-if")]),t._v(" 的一小部分")]),t._v(" "),s("p",[t._v("返回一个"),s("code",[t._v("node")]),t._v("节点，"),s("code",[t._v("render")]),t._v("函数通过表达式的值来决定是否生成"),s("code",[t._v("DOM")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://github.com/vuejs/vue-next/blob/cdc9f336fd/packages/compiler-core/src/transforms/vIf.ts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" transformIf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStructuralDirectiveTransform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("^(if|else|else-if)$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("processIf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ifNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isRoot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          ifNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("codegenNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCodegenNodeForBranch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            context\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" IfConditionalExpression\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// attach this branch's codegen node to the v-if root.")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" parentCondition "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getParentCondition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ifNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("codegenNode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          parentCondition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alternate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCodegenNodeForBranch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" ifNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("branches"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            context\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"四、v-show与v-if的使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、v-show与v-if的使用场景"}},[t._v("#")]),t._v(" 四、v-show与v-if的使用场景")]),t._v(" "),s("p",[s("code",[t._v("v-if")]),t._v(" 与 "),s("code",[t._v("v-show")]),t._v(" 都能控制"),s("code",[t._v("dom")]),t._v("元素在页面的显示")]),t._v(" "),s("p",[s("code",[t._v("v-if")]),t._v(" 相比 "),s("code",[t._v("v-show")]),t._v(" 开销更大的（直接操作"),s("code",[t._v("dom")]),t._v("节点增加与删除）")]),t._v(" "),s("p",[t._v("如果需要非常频繁地切换，则使用 v-show 较好")]),t._v(" "),s("p",[t._v("如果在运行时条件很少改变，则使用 v-if 较好")]),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("ul",[s("li",[t._v("https://www.jianshu.com/p/7af8554d8f08")]),t._v(" "),s("li",[t._v("https://juejin.cn/post/6897948855904501768")]),t._v(" "),s("li",[t._v("https://vue3js/docs/zh")])])])}),[],!1,null,null,null);s.default=e.exports}}]);