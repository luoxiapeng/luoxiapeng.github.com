(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{516:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"面试官-javascript中执行上下文和执行栈是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试官-javascript中执行上下文和执行栈是什么"}},[t._v("#")]),t._v(" 面试官：JavaScript中执行上下文和执行栈是什么？")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/8652b710-74c1-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"一、执行上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、执行上下文"}},[t._v("#")]),t._v(" 一、执行上下文")]),t._v(" "),s("p",[t._v("简单的来说，执行上下文是一种对"),s("code",[t._v("Javascript")]),t._v("代码执行环境的抽象概念，也就是说只要有"),s("code",[t._v("Javascript")]),t._v("代码运行，那么它就一定是运行在执行上下文中")]),t._v(" "),s("p",[t._v("执行上下文的类型分为三种：")]),t._v(" "),s("ul",[s("li",[t._v("全局执行上下文：只有一个，浏览器中的全局对象就是 "),s("code",[t._v("window")]),t._v("对象，"),s("code",[t._v("this")]),t._v(" 指向这个全局对象")]),t._v(" "),s("li",[t._v("函数执行上下文：存在无数个，只有在函数被调用的时候才会被创建，每次调用函数都会创建一个新的执行上下文")]),t._v(" "),s("li",[t._v("Eval 函数执行上下文： 指的是运行在 "),s("code",[t._v("eval")]),t._v(" 函数中的代码，很少用而且不建议使用")])]),t._v(" "),s("p",[t._v("下面给出全局上下文和函数上下文的例子：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/90dd3b60-74c1-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),s("p",[t._v("紫色框住的部分为全局上下文，蓝色和橘色框起来的是不同的函数上下文。只有全局上下文（的变量）能被其他任何上下文访问")]),t._v(" "),s("p",[t._v("可以有任意多个函数上下文，每次调用函数创建一个新的上下文，会创建一个私有作用域，函数内部声明的任何变量都不能在当前函数作用域外部直接访问")]),t._v(" "),s("h2",{attrs:{id:"二、生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、生命周期"}},[t._v("#")]),t._v(" 二、生命周期")]),t._v(" "),s("p",[t._v("执行上下文的生命周期包括三个阶段：创建阶段 → 执行阶段 → 回收阶段")]),t._v(" "),s("h3",{attrs:{id:"创建阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建阶段"}},[t._v("#")]),t._v(" 创建阶段")]),t._v(" "),s("p",[t._v("创建阶段即当函数被调用，但未执行任何其内部代码之前")]),t._v(" "),s("p",[t._v("创建阶段做了三件事：")]),t._v(" "),s("ul",[s("li",[t._v("确定 this 的值，也被称为 "),s("code",[t._v("This Binding")])]),t._v(" "),s("li",[t._v("LexicalEnvironment（词法环境） 组件被创建")]),t._v(" "),s("li",[t._v("VariableEnvironment（变量环境） 组件被创建")])]),t._v(" "),s("p",[t._v("伪代码如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ExecutionContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  ThisBinding "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 确定this ")]),t._v("\n  LexicalEnvironment "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 词法环境")]),t._v("\n  VariableEnvironment "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量环境")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"this-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this-binding"}},[t._v("#")]),t._v(" This Binding")]),t._v(" "),s("p",[t._v("确定"),s("code",[t._v("this")]),t._v("的值我们前面讲到，"),s("code",[t._v("this")]),t._v("的值是在执行的时候才能确认，定义的时候不能确认")]),t._v(" "),s("h4",{attrs:{id:"词法环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#词法环境"}},[t._v("#")]),t._v(" 词法环境")]),t._v(" "),s("p",[t._v("词法环境有两个组成部分：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("全局环境：是一个没有外部环境的词法环境，其外部环境引用为"),s("code",[t._v("null")]),t._v("，有一个全局对象，"),s("code",[t._v("this")]),t._v(" 的值指向这个全局对象")])]),t._v(" "),s("li",[s("p",[t._v("函数环境：用户在函数中定义的变量被存储在环境记录中，包含了"),s("code",[t._v("arguments")]),t._v(" 对象，外部环境的引用可以是全局环境，也可以是包含内部函数的外部函数环境")])])]),t._v(" "),s("p",[t._v("伪代码如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("GlobalExectionContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局执行上下文")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("LexicalEnvironment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 词法环境")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("EnvironmentRecord")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 环境记录")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局环境")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里 ")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对外部环境的引用")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nFunctionExectionContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数执行上下文")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("LexicalEnvironment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 词法环境")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("EnvironmentRecord")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 环境记录")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Declarative"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数环境")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里      // 对外部环境的引用")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Global or outer "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" environment reference"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"变量环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量环境"}},[t._v("#")]),t._v(" 变量环境")]),t._v(" "),s("p",[t._v("变量环境也是一个词法环境，因此它具有上面定义的词法环境的所有属性")]),t._v(" "),s("p",[t._v("在 ES6 中，词法环境和变量环境的区别在于前者用于存储函数声明和变量（ "),s("code",[t._v("let")]),t._v(" 和 "),s("code",[t._v("const")]),t._v(" ）绑定，而后者仅用于存储变量（ "),s("code",[t._v("var")]),t._v(" ）绑定")]),t._v(" "),s("p",[t._v("举个例子")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" g "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" f "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" g"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("执行上下文如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("GlobalExectionContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ThisBinding")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Global Object"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("LexicalEnvironment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 词法环境")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("EnvironmentRecord")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里  ")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" uninitialized "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" uninitialized "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("multiply")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" func "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("VariableEnvironment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量环境")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("EnvironmentRecord")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里  ")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("c")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nFunctionExectionContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n   \n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ThisBinding")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Global Object"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("LexicalEnvironment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("EnvironmentRecord")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Declarative"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里  ")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Arguments")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("GlobalLexicalEnvironment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("VariableEnvironment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("EnvironmentRecord")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Declarative"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里  ")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("g")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("GlobalLexicalEnvironment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("留意上面的代码，"),s("code",[t._v("let")]),t._v("和"),s("code",[t._v("const")]),t._v("定义的变量"),s("code",[t._v("a")]),t._v("和"),s("code",[t._v("b")]),t._v("在创建阶段没有被赋值，但"),s("code",[t._v("var")]),t._v("声明的变量从在创建阶段被赋值为"),s("code",[t._v("undefined")])]),t._v(" "),s("p",[t._v("这是因为，创建阶段，会在代码中扫描变量和函数声明，然后将函数声明存储在环境中")]),t._v(" "),s("p",[t._v("但变量会被初始化为"),s("code",[t._v("undefined")]),t._v("("),s("code",[t._v("var")]),t._v("声明的情况下)和保持"),s("code",[t._v("uninitialized")]),t._v("(未初始化状态)(使用"),s("code",[t._v("let")]),t._v("和"),s("code",[t._v("const")]),t._v("声明的情况下)")]),t._v(" "),s("p",[t._v("这就是变量提升的实际原因")]),t._v(" "),s("h3",{attrs:{id:"执行阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行阶段"}},[t._v("#")]),t._v(" 执行阶段")]),t._v(" "),s("p",[t._v("在这阶段，执行变量赋值、代码执行")]),t._v(" "),s("p",[t._v("如果 "),s("code",[t._v("Javascript")]),t._v(" 引擎在源代码中声明的实际位置找不到变量的值，那么将为其分配 "),s("code",[t._v("undefined")]),t._v(" 值")]),t._v(" "),s("h3",{attrs:{id:"回收阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回收阶段"}},[t._v("#")]),t._v(" 回收阶段")]),t._v(" "),s("p",[t._v("执行上下文出栈等待虚拟机回收执行上下文")]),t._v(" "),s("h2",{attrs:{id:"二、执行栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、执行栈"}},[t._v("#")]),t._v(" 二、执行栈")]),t._v(" "),s("p",[t._v("执行栈，也叫调用栈，具有 LIFO（后进先出）结构，用于存储在代码执行期间创建的所有执行上下文")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/9eda0310-74c1-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),s("p",[t._v("当"),s("code",[t._v("Javascript")]),t._v("引擎开始执行你第一行脚本代码的时候，它就会创建一个全局执行上下文然后将它压到执行栈中")]),t._v(" "),s("p",[t._v("每当引擎碰到一个函数的时候，它就会创建一个函数执行上下文，然后将这个执行上下文压到执行栈中")]),t._v(" "),s("p",[t._v("引擎会执行位于执行栈栈顶的执行上下文(一般是函数执行上下文)，当该函数执行结束后，对应的执行上下文就会被弹出，然后控制流程到达执行栈的下一个执行上下文")]),t._v(" "),s("p",[t._v("举个例子：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("first")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Inside first function'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("second")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Again inside first function'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("second")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Inside second function'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("first")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Inside Global Execution Context'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("转化成图的形式")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/ac11a600-74c1-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),s("p",[t._v("简单分析一下流程：")]),t._v(" "),s("ul",[s("li",[t._v("创建全局上下文请压入执行栈")]),t._v(" "),s("li",[s("code",[t._v("first")]),t._v("函数被调用，创建函数执行上下文并压入栈")]),t._v(" "),s("li",[t._v("执行"),s("code",[t._v("first")]),t._v("函数过程遇到"),s("code",[t._v("second")]),t._v("函数，再创建一个函数执行上下文并压入栈")]),t._v(" "),s("li",[s("code",[t._v("second")]),t._v("函数执行完毕，对应的函数执行上下文被推出执行栈，执行下一个执行上下文"),s("code",[t._v("first")]),t._v("函数")]),t._v(" "),s("li",[s("code",[t._v("first")]),t._v("函数执行完毕，对应的函数执行上下文也被推出栈中，然后执行全局上下文")]),t._v(" "),s("li",[t._v("所有代码执行完毕，全局上下文也会被推出栈中，程序结束")])]),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("ul",[s("li",[t._v("https://zhuanlan.zhihu.com/p/107552264")])])])}),[],!1,null,null,null);s.default=r.exports}}]);