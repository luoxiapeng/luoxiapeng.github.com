(window.webpackJsonp=window.webpackJsonp||[]).push([[444],{725:function(t,e,v){"use strict";v.r(e);var _=v(1),a=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"面试官-请描述下你对vue生命周期的理解-在created和mounted这两个生命周期中请求数据有什么区别呢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试官-请描述下你对vue生命周期的理解-在created和mounted这两个生命周期中请求数据有什么区别呢"}},[t._v("#")]),t._v(" 面试官：请描述下你对vue生命周期的理解？在created和mounted这两个生命周期中请求数据有什么区别呢？")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/3a119e10-3aca-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"一、生命周期是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、生命周期是什么"}},[t._v("#")]),t._v(" 一、生命周期是什么")]),t._v(" "),e("p",[t._v("生命周期"),e("code",[t._v("（Life Cycle）")]),t._v("的概念应用很广泛，特别是在政治、经济、环境、技术、社会等诸多领域经常出现，其基本涵义可以通俗地理解为“从摇篮到坟墓”"),e("code",[t._v("（Cradle-to-Grave）")]),t._v("的整个过程在"),e("code",[t._v("Vue")]),t._v("中实例从创建到销毁的过程就是生命周期，即指从创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程我们可以把组件比喻成工厂里面的一条流水线，每个工人（生命周期）站在各自的岗位，当任务流转到工人身边的时候，工人就开始工作PS：在"),e("code",[t._v("Vue")]),t._v("生命周期钩子会自动绑定 "),e("code",[t._v("this")]),t._v(" 上下文到实例中，因此你可以访问数据，对 "),e("code",[t._v("property")]),t._v(" 和方法进行运算这意味着"),e("strong",[t._v("你不能使用箭头函数来定义一个生命周期方法")]),t._v(" (例如 "),e("code",[t._v("created: () => this.fetchTodos()")]),t._v(")")]),t._v(" "),e("h2",{attrs:{id:"二、生命周期有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、生命周期有哪些"}},[t._v("#")]),t._v(" 二、生命周期有哪些")]),t._v(" "),e("p",[t._v("Vue生命周期总共可以分为8个阶段：创建前后, 载入前后,更新前后,销毁前销毁后，以及一些特殊场景的生命周期")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("生命周期")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("beforeCreate")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件实例被创建之初")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("created")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件实例已经完全创建")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("beforeMount")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件挂载之前")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("mounted")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件挂载到实例上去之后")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("beforeUpdate")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件数据发生变化，更新之前")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("updated")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件数据更新之后")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("beforeDestroy")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件实例销毁之前")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("destroyed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件实例销毁之后")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("activated")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("keep-alive 缓存的组件激活时")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("deactivated")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("keep-alive 缓存的组件停用时调用")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("errorCaptured")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("捕获一个来自子孙组件的错误时被调用")])])])]),t._v(" "),e("h2",{attrs:{id:"三、生命周期整体流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、生命周期整体流程"}},[t._v("#")]),t._v(" 三、生命周期整体流程")]),t._v(" "),e("p",[e("code",[t._v("Vue")]),t._v("生命周期流程图")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/44114780-3aca-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),e("h4",{attrs:{id:"具体分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#具体分析"}},[t._v("#")]),t._v(" 具体分析")]),t._v(" "),e("p",[e("strong",[t._v("beforeCreate -> created")])]),t._v(" "),e("ul",[e("li",[t._v("初始化"),e("code",[t._v("vue")]),t._v("实例，进行数据观测")])]),t._v(" "),e("p",[e("strong",[t._v("created")])]),t._v(" "),e("ul",[e("li",[t._v("完成数据观测，属性与方法的运算，"),e("code",[t._v("watch")]),t._v("、"),e("code",[t._v("event")]),t._v("事件回调的配置")]),t._v(" "),e("li",[t._v("可调用"),e("code",[t._v("methods")]),t._v("中的方法，访问和修改data数据触发响应式渲染"),e("code",[t._v("dom")]),t._v("，可通过"),e("code",[t._v("computed")]),t._v("和"),e("code",[t._v("watch")]),t._v("完成数据计算")]),t._v(" "),e("li",[t._v("此时"),e("code",[t._v("vm.$el")]),t._v(" 并没有被创建")])]),t._v(" "),e("p",[e("strong",[t._v("created -> beforeMount")])]),t._v(" "),e("ul",[e("li",[t._v("判断是否存在"),e("code",[t._v("el")]),t._v("选项，若不存在则停止编译，直到调用"),e("code",[t._v("vm.$mount(el)")]),t._v("才会继续编译")]),t._v(" "),e("li",[t._v("优先级："),e("code",[t._v("render")]),t._v(" > "),e("code",[t._v("template")]),t._v(" > "),e("code",[t._v("outerHTML")])]),t._v(" "),e("li",[e("code",[t._v("vm.el")]),t._v("获取到的是挂载"),e("code",[t._v("DOM")]),t._v("的")])]),t._v(" "),e("p",[e("strong",[t._v("beforeMount")])]),t._v(" "),e("ul",[e("li",[t._v("在此阶段可获取到"),e("code",[t._v("vm.el")])]),t._v(" "),e("li",[t._v("此阶段"),e("code",[t._v("vm.el")]),t._v("虽已完成DOM初始化，但并未挂载在"),e("code",[t._v("el")]),t._v("选项上")])]),t._v(" "),e("p",[e("strong",[t._v("beforeMount -> mounted")])]),t._v(" "),e("ul",[e("li",[t._v("此阶段"),e("code",[t._v("vm.el")]),t._v("完成挂载，"),e("code",[t._v("vm.$el")]),t._v("生成的"),e("code",[t._v("DOM")]),t._v("替换了"),e("code",[t._v("el")]),t._v("选项所对应的"),e("code",[t._v("DOM")])])]),t._v(" "),e("p",[e("strong",[t._v("mounted")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("vm.el")]),t._v("已完成"),e("code",[t._v("DOM")]),t._v("的挂载与渲染，此刻打印"),e("code",[t._v("vm.$el")]),t._v("，发现之前的挂载点及内容已被替换成新的DOM")])]),t._v(" "),e("p",[e("strong",[t._v("beforeUpdate")])]),t._v(" "),e("ul",[e("li",[t._v("更新的数据必须是被渲染在模板上的（"),e("code",[t._v("el")]),t._v("、"),e("code",[t._v("template")]),t._v("、"),e("code",[t._v("render")]),t._v("之一）")]),t._v(" "),e("li",[t._v("此时"),e("code",[t._v("view")]),t._v("层还未更新")]),t._v(" "),e("li",[t._v("若在"),e("code",[t._v("beforeUpdate")]),t._v("中再次修改数据，不会再次触发更新方法")])]),t._v(" "),e("p",[e("strong",[t._v("updated")])]),t._v(" "),e("ul",[e("li",[t._v("完成"),e("code",[t._v("view")]),t._v("层的更新")]),t._v(" "),e("li",[t._v("若在"),e("code",[t._v("updated")]),t._v("中再次修改数据，会再次触发更新方法（"),e("code",[t._v("beforeUpdate")]),t._v("、"),e("code",[t._v("updated")]),t._v("）")])]),t._v(" "),e("p",[e("strong",[t._v("beforeDestroy")])]),t._v(" "),e("ul",[e("li",[t._v("实例被销毁前调用，此时实例属性与方法仍可访问")])]),t._v(" "),e("p",[e("strong",[t._v("destroyed")])]),t._v(" "),e("ul",[e("li",[t._v("完全销毁一个实例。可清理它与其它实例的连接，解绑它的全部指令及事件监听器")]),t._v(" "),e("li",[t._v("并不能清除DOM，仅仅销毁实例")])]),t._v(" "),e("p",[e("strong",[t._v("使用场景分析")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("生命周期")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("beforeCreate")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("created")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件初始化完毕，各种数据可以使用，常用于异步数据获取")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("beforeMount")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("未执行渲染、更新，dom未创建")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("mounted")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("初始化结束，dom已创建，可用于获取访问数据和dom元素")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("beforeUpdate")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("更新前，可用于获取更新前各种状态")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("updated")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("更新后，所有状态已是最新")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("beforeDestroy")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("销毁前，可用于一些定时器或订阅的取消")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("destroyed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("组件已销毁，作用同上")])])])]),t._v(" "),e("h2",{attrs:{id:"四、题外话-数据请求在created和mouted的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、题外话-数据请求在created和mouted的区别"}},[t._v("#")]),t._v(" 四、题外话：数据请求在created和mouted的区别")]),t._v(" "),e("p",[e("code",[t._v("created")]),t._v("是在组件实例一旦创建完成的时候立刻调用，这时候页面"),e("code",[t._v("dom")]),t._v("节点并未生成；"),e("code",[t._v("mounted")]),t._v("是在页面"),e("code",[t._v("dom")]),t._v("节点渲染完毕之后就立刻执行的。触发时机上"),e("code",[t._v("created")]),t._v("是比"),e("code",[t._v("mounted")]),t._v("要更早的，两者的相同点：都能拿到实例对象的属性和方法。\n讨论这个问题本质就是触发的时机，放在"),e("code",[t._v("mounted")]),t._v("中的请求有可能导致页面闪动（因为此时页面"),e("code",[t._v("dom")]),t._v("结构已经生成），但如果在页面加载前完成请求，则不会出现此情况。建议对页面内容的改动放在"),e("code",[t._v("created")]),t._v("生命周期当中。")]),t._v(" "),e("h2",{attrs:{id:"参考文献"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),e("ul",[e("li",[t._v("https://juejin.cn/post/6844903811094413320")]),t._v(" "),e("li",[t._v("https://baike.baidu.com/")]),t._v(" "),e("li",[t._v("http://cn.vuejs.org/")])]),t._v(" "),e("p",[t._v("面试官VUE系列总进度：4／33")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247484101&idx=1&sn=83b0983f0fca7d7c556e4cb0bff8c9b8&chksm=fc10c093cb674985ef3bd2966f66fc28c5eb70b0037e4be1af4bf54fb6fa9571985abd31d52f&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官：说说你对vue的理解?"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247484119&idx=1&sn=d171b28a00d42549d279498944a98519&chksm=fc10c081cb6749976814aaeda6a6433db418223cec57edda7e15b9e5a0ca69ad549655639c61&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官：说说你对SPA（单页应用）的理解?"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247484167&idx=1&sn=7b00b4333ab2722f25f12586b70667ca&chksm=fc10c151cb6748476008dab2f4e6c6264f5d19678305955c85cec1b619e56e8f7457b7357fb9&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官：说说你对双向绑定的理解?"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/821b87b0-3ac6-11eb-ab90-d9ae814b240d.png",alt:""}})])])}),[],!1,null,null,null);e.default=a.exports}}]);