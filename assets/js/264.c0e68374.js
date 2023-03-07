(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{551:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"面试官-谈谈-javascript-中的类型转换机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试官-谈谈-javascript-中的类型转换机制"}},[t._v("#")]),t._v(" 面试官：谈谈 JavaScript 中的类型转换机制")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/2abd00a0-6692-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"一、概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、概述"}},[t._v("#")]),t._v(" 一、概述")]),t._v(" "),s("p",[t._v("前面我们讲到，"),s("code",[t._v("JS")]),t._v("中有六种简单数据类型："),s("code",[t._v("undefined")]),t._v("、"),s("code",[t._v("null")]),t._v("、"),s("code",[t._v("boolean")]),t._v("、"),s("code",[t._v("string")]),t._v("、"),s("code",[t._v("number")]),t._v("、"),s("code",[t._v("symbol")]),t._v("，以及引用类型："),s("code",[t._v("object")])]),t._v(" "),s("p",[t._v("但是我们在声明的时候只有一种数据类型，只有到运行期间才会确定当前类型")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("上面代码中，"),s("code",[t._v("x")]),t._v("的值在编译阶段是无法获取的，只有等到程序运行时才能知道")]),t._v(" "),s("p",[t._v("虽然变量的数据类型是不确定的，但是各种运算符对数据类型是有要求的，如果运算子的类型与预期不符合，就会触发类型转换机制")]),t._v(" "),s("p",[t._v("常见的类型转换有：")]),t._v(" "),s("ul",[s("li",[t._v("强制转换（显示转换）")]),t._v(" "),s("li",[t._v("自动转换（隐式转换）")])]),t._v(" "),s("h2",{attrs:{id:"二、显示转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、显示转换"}},[t._v("#")]),t._v(" 二、显示转换")]),t._v(" "),s("p",[t._v("显示转换，即我们很清楚可以看到这里发生了类型的转变，常见的方法有：")]),t._v(" "),s("ul",[s("li",[t._v("Number()")]),t._v(" "),s("li",[t._v("parseInt()")]),t._v(" "),s("li",[t._v("String()")]),t._v(" "),s("li",[t._v("Boolean()")])]),t._v(" "),s("h3",{attrs:{id:"number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[t._v("#")]),t._v(" Number()")]),t._v(" "),s("p",[t._v("将任意类型的值转化为数值")]),t._v(" "),s("p",[t._v("先给出类型转换规则：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/915b7300-6692-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),s("p",[t._v("实践一下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("324")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 324")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字符串：如果可以被解析为数值，则转换为相应的数值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'324'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 324")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字符串：如果不可以被解析为数值，返回 NaN")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'324abc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 空字符串转为0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 布尔值：true 转成 1，false 转成 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined：转成 NaN")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// null：转成0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象：通常转换成NaN(除了只包含单个数值的数组)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5")]),t._v("\n")])])]),s("p",[t._v("从上面可以看到，"),s("code",[t._v("Number")]),t._v("转换的时候是很严格的，只要有一个字符无法转成数值，整个字符串就会被转为"),s("code",[t._v("NaN")])]),t._v(" "),s("h3",{attrs:{id:"parseint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parseint"}},[t._v("#")]),t._v(" parseInt()")]),t._v(" "),s("p",[s("code",[t._v("parseInt")]),t._v("相比"),s("code",[t._v("Number")]),t._v("，就没那么严格了，"),s("code",[t._v("parseInt")]),t._v("函数逐个解析字符，遇到不能转换的字符就停下来")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'32a3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//32")]),t._v("\n")])])]),s("h3",{attrs:{id:"string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" String()")]),t._v(" "),s("p",[t._v("可以将任意类型的值转化成字符串")]),t._v(" "),s("p",[t._v("给出转换规则图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/48dd8eb0-6692-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),s("p",[t._v("实践一下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数值：转为相应的字符串")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "1"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//字符串：转换后还是原来的值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "a"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//布尔值：true转为字符串"true"，false转为字符串"false"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "true"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//undefined：转为字符串"undefined"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "undefined"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//null：转为字符串"null"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "null"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "[object Object]"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "1,2,3"')]),t._v("\n")])])]),s("h3",{attrs:{id:"boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boolean"}},[t._v("#")]),t._v(" Boolean()")]),t._v(" "),s("p",[t._v("可以将任意类型的值转为布尔值，转换规则如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/53bdad10-6692-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),s("p",[t._v("实践一下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("h2",{attrs:{id:"三、隐式转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、隐式转换"}},[t._v("#")]),t._v(" 三、隐式转换")]),t._v(" "),s("p",[t._v("在隐式转换中，我们可能最大的疑惑是 ：何时发生隐式转换？")]),t._v(" "),s("p",[t._v("我们这里可以归纳为两种情况发生隐式转换的场景：")]),t._v(" "),s("ul",[s("li",[t._v("比较运算（"),s("code",[t._v("==")]),t._v("、"),s("code",[t._v("!=")]),t._v("、"),s("code",[t._v(">")]),t._v("、"),s("code",[t._v("<")]),t._v("）、"),s("code",[t._v("if")]),t._v("、"),s("code",[t._v("while")]),t._v("需要布尔值地方")]),t._v(" "),s("li",[t._v("算术运算（"),s("code",[t._v("+")]),t._v("、"),s("code",[t._v("-")]),t._v("、"),s("code",[t._v("*")]),t._v("、"),s("code",[t._v("/")]),t._v("、"),s("code",[t._v("%")]),t._v("）")])]),t._v(" "),s("p",[t._v("除了上面的场景，还要求运算符两边的操作数不是同一类型")]),t._v(" "),s("h3",{attrs:{id:"自动转换为布尔值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动转换为布尔值"}},[t._v("#")]),t._v(" 自动转换为布尔值")]),t._v(" "),s("p",[t._v("在需要布尔值的地方，就会将非布尔值的参数自动转为布尔值，系统内部会调用"),s("code",[t._v("Boolean")]),t._v("函数")]),t._v(" "),s("p",[t._v("可以得出个小结：")]),t._v(" "),s("ul",[s("li",[t._v("undefined")]),t._v(" "),s("li",[t._v("null")]),t._v(" "),s("li",[t._v("false")]),t._v(" "),s("li",[t._v("+0")]),t._v(" "),s("li",[t._v("-0")]),t._v(" "),s("li",[t._v("NaN")]),t._v(" "),s("li",[t._v('""')])]),t._v(" "),s("p",[t._v("除了上面几种会被转化成"),s("code",[t._v("false")]),t._v("，其他都换被转化成"),s("code",[t._v("true")])]),t._v(" "),s("h3",{attrs:{id:"自动转换成字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动转换成字符串"}},[t._v("#")]),t._v(" 自动转换成字符串")]),t._v(" "),s("p",[t._v("遇到预期为字符串的地方，就会将非字符串的值自动转为字符串")]),t._v(" "),s("p",[t._v("具体规则是：先将复合类型的值转为原始类型的值，再将原始类型的值转为字符串")]),t._v(" "),s("p",[t._v("常发生在"),s("code",[t._v("+")]),t._v("运算中，一旦存在字符串，则会进行字符串拼接操作")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '51'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "5true"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "5false"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "5[object Object]"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "5"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "5function (){}"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "5undefined"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "5null"')]),t._v("\n")])])]),s("h3",{attrs:{id:"自动转换成数值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动转换成数值"}},[t._v("#")]),t._v(" 自动转换成数值")]),t._v(" "),s("p",[t._v("除了"),s("code",[t._v("+")]),t._v("有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n")])])]),s("p",[s("code",[t._v("null")]),t._v("转为数值时，值为"),s("code",[t._v("0")]),t._v(" 。"),s("code",[t._v("undefined")]),t._v("转为数值时，值为"),s("code",[t._v("NaN")])])])}),[],!1,null,null,null);s.default=e.exports}}]);