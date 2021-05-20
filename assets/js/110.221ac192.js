(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{459:function(s,a,t){"use strict";t.r(a);var e=t(42),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"进制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进制"}},[s._v("#")]),s._v(" 进制")]),s._v(" "),t("h2",{attrs:{id:"十进制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十进制"}},[s._v("#")]),s._v(" 十进制")]),s._v(" "),t("p",[s._v("十进制可以以 0 开头，后面接其他十进制数字，但是假如下一个接的十进制数字小于 8，那么该数字将会被当做八进制处理。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0888")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 888 将被当做十进制处理")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0777")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在非严格格式下会被当做八进制处理 (用十进制表示就是511)")]),s._v("\n")])])]),t("h2",{attrs:{id:"二进制数字-binary-numbers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二进制数字-binary-numbers"}},[s._v("#")]),s._v(" 二进制数字(Binary numbers)")]),s._v(" "),t("p",[s._v('二进制数字语法是以零为开头，后面接一个小写或大写的拉丁文字母 B(0b 或者是 0B)。 假如 0b 后面的数字不是 0 或者 1，那么就会提示这样的语法错误（ SyntaxError）： "Missing binary digits after 0b(0b 之后缺失二有效的二进制数据)"。')]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FLT_SIGNBIT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0b10000000000000000000000000000000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2147483648")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FLT_EXPONENT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0b01111111100000000000000000000000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2139095040")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FLT_MANTISSA")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0b00000000011111111111111111111111")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 8388607")]),s._v("\n")])])]),t("h2",{attrs:{id:"八进制数字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八进制数字"}},[s._v("#")]),s._v(" 八进制数字")]),s._v(" "),t("p",[s._v("0 为开头的。假如 0 后面的数字不在 0 到 7 的范围内，该数字将会被转换成十进制数字。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0755")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 493")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" m "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0644")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 420")]),s._v("\n")])])]),t("h2",{attrs:{id:"十六进制-hexadecimal-numbers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十六进制-hexadecimal-numbers"}},[s._v("#")]),s._v(" 十六进制(Hexadecimal numbers)")]),s._v(" "),t("p",[s._v('十六进制数字语法是以零为开头，后面接一个小写或大写的拉丁文字母 X(0x 或者是 0X)。假如 0x 后面的数字超出规定范围(0123456789ABCDEF)，那么就会提示这样的语法错误(SyntaxError)："Identifier starts immediately after numeric literal".')]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xfffffffffffffffff")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 295147905179352830000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x123456789abcdef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 81985529216486900")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xa")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 10")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);