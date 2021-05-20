(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{462:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[t._v("#")]),t._v(" 字符串")]),t._v(" "),a("p",[t._v("JavaScript 中的 String 类型用于表示文本型的数据. 它是由无符号整数值（16bit）作为元素而组成的集合. 字符串中的每个元素在字符串中占据一个位置. 第一个元素的 index 值是 0, 下一个元素的 index 值是 1, 以此类推. 字符串的长度就是字符串中所含的元素个数.你可以通过 String 字面值或者 String 对象两种方式创建一个字符串。")]),t._v(" "),a("h2",{attrs:{id:"string-字面量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-字面量"}},[t._v("#")]),t._v(" String 字面量")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),t._v("\n\n")])])]),a("p",[t._v("16 进制转义序列\n\\x 之后的数值将被认为是一个 16 进制数.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\xA9'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "©"')]),t._v("\n\n")])])]),a("h2",{attrs:{id:"unicode-转义序列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unicode-转义序列"}},[t._v("#")]),t._v(" Unicode 转义序列")]),t._v(" "),a("p",[t._v("Unicode 转义序列在\\u 之后需要至少 4 个字符")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\u00A9'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "©"')]),t._v("\n\n")])])]),a("h2",{attrs:{id:"unicode-字元逸出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unicode-字元逸出"}},[t._v("#")]),t._v(" Unicode 字元逸出")]),t._v(" "),a("p",[t._v("这是 ECMAScript 6 中的新特性。有了 Unicode 字元逸出，任何字符都可以用 16 进制数转义, 这使得通过 Unicode 转义表示大于 0x10FFFF 的字符成为可能。使用简单的 Unicode 转义时通常需要分别写字符相应的两个部分（译注：大于 0x10FFFF 的字符需要拆分为相应的两个小于 0x10FFFF 的部分）来达到同样的效果。")]),t._v(" "),a("p",[a("code",[t._v("String.fromCodePoint()")]),t._v(" 或 "),a("code",[t._v("String.prototype.codePointAt()")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\u{2F804}'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the same with simple Unicode escapes")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\uD87E\\uDC04'")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"字符串对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串对象"}},[t._v("#")]),t._v(" 字符串对象")]),t._v(" "),a("p",[t._v("String 对象是对原始 string 类型的封装 .")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Creates a String object")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Displays: { '0': 'f', '1': 'o', '2': 'o'}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns 'object'")]),t._v("\n")])])]),a("p",[t._v("String 字面值上使用 String 对象的任何方法—JavaScript 自动把 String 字面值转换为一个临时的 String 对象, 然后调用其相应方法,最后丢弃此临时对象.在 String 字面值上也可以使用 String.length 属性.")]),t._v(" "),a("h2",{attrs:{id:"eval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eval"}},[t._v("#")]),t._v(" eval")]),t._v(" "),a("p",[t._v("将字符串转为数字相加")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2 + 2'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Creates a string literal value")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2 + 2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Creates a String object")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns the number 4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Returns the string "2 + 2"')]),t._v("\n")])])]),a("p",[t._v('String 对象有一个属性, length, 标识了字符串中的字符个数.举例, 下面的代码把 13 赋值给了 x, 因为"Hello, World!"包含了 13 个字符（译注：注意 W 之前有个空格）:')]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mystring "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello, World!'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mystring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n")])])]),a("p",[t._v("String 对象有许多方法: 举例来说有些方法返回字符串本身的变体, 如 substring 和 toUpperCase.")]),t._v(" "),a("h2",{attrs:{id:"string-对象方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-对象方法"}},[t._v("#")]),t._v(" String 对象方法")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("charAt")]),t._v(", "),a("code",[t._v("charCodeAt")]),t._v(", "),a("code",[t._v("codePointAt")]),t._v(" 返回字符串指定位置的字符或者字符编码。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("indexOf")]),t._v(", "),a("code",[t._v("lastIndexOf")]),t._v(" 分别返回字符串中指定子串的位置或最后位置。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("startsWith")]),t._v(", "),a("code",[t._v("endsWith")]),t._v(", "),a("code",[t._v("includes")]),t._v(" 返回字符串是否以指定字符串开始、结束或包含指定字符串。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("concat")]),t._v(" 连接两个字符串并返回新的字符串。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("fromCharCode")]),t._v(", "),a("code",[t._v("fromCodePoint")]),t._v(" 从指定的 Unicode 值序列构造一个字符串。这是一个 String 类方法，不是实例方法。 -"),a("code",[t._v("split")]),t._v(" 通过将字符串分离成一个个子串来把一个 String 对象分裂到一个字符串数组中。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("slice")]),t._v(" 从一个字符串提取片段并作为新字符串返回。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("substring")]),t._v(", "),a("code",[t._v("substr")]),t._v(" 分别通过指定起始和结束位置，起始位置和长度来返回字符串的指定子集。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("match")]),t._v(", "),a("code",[t._v("replace")]),t._v(", "),a("code",[t._v("search")]),t._v(" 通过正则表达式来工作.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("toLowerCase")]),t._v(", "),a("code",[t._v("toUpperCase")]),t._v(" 分别返回字符串的小写表示和大写表示。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("normalize")]),t._v(" 按照指定的一种 Unicode 正规形式将当前字符串正规化。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("repeat")]),t._v(" 将字符串内容重复指定次数后返回。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("trim")]),t._v(" 去掉字符串开头和结尾的空白字符。")])])]),t._v(" "),a("h2",{attrs:{id:"多行模板字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多行模板字符串"}},[t._v("#")]),t._v(" 多行模板字符串")]),t._v(" "),a("h2",{attrs:{id:"多行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多行"}},[t._v("#")]),t._v(" 多行")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string text line 1\\n\\\nstring text line 2'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "string text line 1')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// string text line 2"')]),t._v("\n")])])]),a("p",[t._v("为了实现同样效果的多行字符串, 现在可以写成如下形式:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("string text line 1\nstring text line 2")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "string text line 1')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// string text line 2"')]),t._v("\n")])])]),a("h2",{attrs:{id:"嵌入表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌入表达式"}},[t._v("#")]),t._v(" 嵌入表达式")]),t._v(" "),a("p",[t._v("为了在一般的字符串中嵌入表达式, 需要使用如下语法:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fifteen is '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' and\\nnot '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Fifteen is 15 and')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// not 20."')]),t._v("\n")])])]),a("p",[t._v("现在, 使用模板字符串, 可以使用语法糖让类似功能的实现代码更具可读性:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("Fifteen is ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(" and\\nnot ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Fifteen is 15 and')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// not 20."')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);