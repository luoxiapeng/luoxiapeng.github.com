(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{342:function(t,e,i){"use strict";i.r(e);var a=i(1),d=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"widget-的深度理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#widget-的深度理解"}},[t._v("#")]),t._v(" Widget 的深度理解")]),t._v(" "),e("p",[t._v("为了更好的使用 Widget，还需要深入了解以下有关 Widget 的特点。")]),t._v(" "),e("h2",{attrs:{id:"everything-is-a-widget"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#everything-is-a-widget"}},[t._v("#")]),t._v(" Everything is a Widget")]),t._v(" "),e("p",[t._v("在 Android 中，UI 显示的容器是 Activity，iOS 显示 UI 的容器是 ViewController，在 Flutter 中，这些都是 Widget 的功能，Widget 不仅是 View，也是 Flutter UI 的容器，而且布局也是使用的 Widget，监听点击事件也是 Widget，实现动画也是用 Widget，设置 Padding 也是用 Widget，设置透明度也是用 Widget，所以说 Everything is a Widget。")]),t._v(" "),e("h2",{attrs:{id:"组合大于继承"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组合大于继承"}},[t._v("#")]),t._v(" 组合大于继承")]),t._v(" "),e("p",[t._v("在 Android 中，要想实现自定义的 View 时，都是实现一个 View 的子类，或者继承已有的 View。iOS 也是同样的，要想实现自定义的 View 时，要么实现一个 UIView 的子类，或者继承已有的 View。")]),t._v(" "),e("p",[t._v("但在 Flutter 中，要实现一个自定义的 Widget，最好通过组合其他 Widget 来实现，而不是用继承。")]),t._v(" "),e("p",[t._v("因为在 Flutter 中，Widget 组合大于继承。")]),t._v(" "),e("h2",{attrs:{id:"widget-是-ui-的配置信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#widget-是-ui-的配置信息"}},[t._v("#")]),t._v(" Widget 是 "),e("code",[t._v("UI 的配置信息")])]),t._v(" "),e("p",[t._v("Flutter 的 UI 渲染采用的是 react-style 的框架，所以 Widget 并不会直接用于渲染，而只是 "),e("code",[t._v("UI 的配置信息")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"widget-是-一次性的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#widget-是-一次性的"}},[t._v("#")]),t._v(" Widget 是 "),e("code",[t._v("一次性的")])]),t._v(" "),e("p",[t._v("当 Flutter App 启动时，会 build 一个 Widget 树，然后读取 Widget 树的配置去渲染 UI，当你想要改变 UI 时，并不能通过更改 Widget 的值来刷新 UI，而是通过更改状态，触发 build ，重新新建一个全新的 Widget 树，通过和原来的 Widget 树进行对比，来刷新 UI，所以每次刷新 UI，Widget 都会重建，所以 Widget 是 "),e("code",[t._v("一次性的")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"widget-是-不可变的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#widget-是-不可变的"}},[t._v("#")]),t._v(" Widget 是 "),e("code",[t._v("不可变的")])]),t._v(" "),e("p",[t._v("根据 Flutter UI 的渲染过程，会首先建立一个 Widget 树，而且这个 Widget 树只会创建一次，当状态发生变化时，不是更改原来的 Widget，而是重新创建，所以 Widget 是 "),e("code",[t._v("不可变的")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"widget-是-轻量的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#widget-是-轻量的"}},[t._v("#")]),t._v(" Widget 是 "),e("code",[t._v("轻量的")])]),t._v(" "),e("p",[t._v("如果要改变 UI ，就调用方法重新 build 一个 Widget 树，虽然 Widget 树重新创建了，但是并不会引起 UI 的全部刷新，而是会对比前后 Widget 树变化的部分，只刷新变的部分，因此即使 Widget 随便创建消耗，也不会影响性能，所以 Widget 是 "),e("code",[t._v("轻量的")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"根据有无状态来区分-widget"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根据有无状态来区分-widget"}},[t._v("#")]),t._v(" 根据有无状态来区分 Widget")]),t._v(" "),e("p",[t._v("Widget 根据有无 State(状态) 分为：")]),t._v(" "),e("ul",[e("li",[t._v("StatelessWidget：无状态信息的 Widget")]),t._v(" "),e("li",[t._v("StatefulWidget：有状态信息的 Widget")])]),t._v(" "),e("h4",{attrs:{id:"statelesswidget"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#statelesswidget"}},[t._v("#")]),t._v(" StatelessWidget")]),t._v(" "),e("p",[t._v("StatelessWidget 没有 State。")]),t._v(" "),e("h4",{attrs:{id:"statefulwidget"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#statefulwidget"}},[t._v("#")]),t._v(" StatefulWidget")]),t._v(" "),e("p",[t._v("StatefulWidget 有两部分组成：")]),t._v(" "),e("ol",[e("li",[t._v("Widget")]),t._v(" "),e("li",[t._v("State")])]),t._v(" "),e("h4",{attrs:{id:"为什么要有-statelesswidget-和-statefulwidget"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有-statelesswidget-和-statefulwidget"}},[t._v("#")]),t._v(" 为什么要有 StatelessWidget 和 StatefulWidget ？")]),t._v(" "),e("p",[t._v("StatelessWidget 没有状态，创建完后 UI 就不可以在更改。")]),t._v(" "),e("p",[t._v("但在实际中，往往会有这样的场景：点击一个 Button，然后引起了 UI 界面的变化，所以还需要 UI 可以变化的 Widget。UI 可以变化的 Widget 就是 StatefulWidget。")]),t._v(" "),e("h4",{attrs:{id:"statelesswidget-为什么无法让-ui-发生变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#statelesswidget-为什么无法让-ui-发生变化"}},[t._v("#")]),t._v(" StatelessWidget 为什么无法让 UI 发生变化？")]),t._v(" "),e("p",[t._v("因为 StatelessWidget 没有 State ，所以无法触发 build Widget，导致 Widget 树不会创建，因此就无法让 UI 发生变化。")]),t._v(" "),e("h4",{attrs:{id:"statefulwidget-为什么可以让-ui-发生变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#statefulwidget-为什么可以让-ui-发生变化"}},[t._v("#")]),t._v(" StatefulWidget 为什么可以让 UI 发生变化？")]),t._v(" "),e("p",[t._v("那么如何让 UI 发生变化呢？")]),t._v(" "),e("p",[t._v("Flutter 是这么做的，引入了 State(状态) ，Widget 是不可变的，那么把可变的部分存在 State 里，当 State 变化时，会重新 build Widget，让 Widget 树 发生变化，从而更新 UI。")]),t._v(" "),e("h4",{attrs:{id:"如果-statefulwidget-的-子-widget-里有-statelesswidget-那么能不能让这个-statelesswidget-的-ui-发生改变"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果-statefulwidget-的-子-widget-里有-statelesswidget-那么能不能让这个-statelesswidget-的-ui-发生改变"}},[t._v("#")]),t._v(" 如果 StatefulWidget 的 子 Widget 里有 StatelessWidget，那么能不能让这个 StatelessWidget 的 UI 发生改变？")]),t._v(" "),e("p",[t._v("当然可以。当一个 StatelessWidget 的 父 Widget 是 StatefulWidget 时，StatefulWidget 的状态发生变化触发 build Widget 的时候，StatelessWidget 也可以重建，所以当然是可以的。")]),t._v(" "),e("h4",{attrs:{id:"statefulwidget-和-statelesswidget-之间如何选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#statefulwidget-和-statelesswidget-之间如何选择"}},[t._v("#")]),t._v(" StatefulWidget 和 StatelessWidget 之间如何选择")]),t._v(" "),e("p",[t._v("StatefulWidget 和 StatelessWidget 的区别：")]),t._v(" "),e("div",{staticClass:"language-! extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("StatefulWidget 是有 State 的，StatelessWidget 是无 State 的。\n")])])]),e("p",[t._v("当你以后选择用 StatelessWidget 还是 StatefulWidget 时，只要考虑 UI 是否需要改变，如果需要改变，就用 StatefulWidget，不需要改变，就用 StatelessWidget。")]),t._v(" "),e("h1",{attrs:{id:"widget-的使用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#widget-的使用方法"}},[t._v("#")]),t._v(" Widget 的使用方法")]),t._v(" "),e("p",[t._v("接下来开始介绍 Widget 如何使用，因为 Widget 有上百个，无法一一介绍，所以我只会介绍经常用到的 Widget，这些经常用到的 Widget 可以分为以下五类：")]),t._v(" "),e("ul",[e("li",[t._v("基础 Widget")]),t._v(" "),e("li",[t._v("手势识别 Widget")]),t._v(" "),e("li",[t._v("布局 Widget")]),t._v(" "),e("li",[t._v("容器类 Widget")]),t._v(" "),e("li",[t._v("可滚动 Widget")])]),t._v(" "),e("p",[t._v("虽然只会介绍一部分 Widget 的使用方法，但是使用 Widget 的步骤都是一样的，只要掌握了这些步骤，就可以熟练使用 Flutter 中的所有 Widget。")]),t._v(" "),e("h2",{attrs:{id:"使用-widget-的步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-widget-的步骤"}},[t._v("#")]),t._v(" 使用 Widget 的步骤")]),t._v(" "),e("p",[t._v("所以使用 Widget 我们要遵照以下三个步骤：")]),t._v(" "),e("ol",[e("li",[t._v("先找到 Widget 的构造函数。")]),t._v(" "),e("li",[t._v("看构造函数的哪些参数是必选的，哪些参数是可选的，必选的参数必须要赋值，可选的根据需要来赋值。")]),t._v(" "),e("li",[t._v("为了更灵活的使用 Widget，需要知道 Widget 每个参数的作用和使用方法。")])]),t._v(" "),e("h2",{attrs:{id:"本手册里的示例代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本手册里的示例代码"}},[t._v("#")]),t._v(" 本手册里的示例代码")]),t._v(" "),e("p",[t._v("本手册里的所有示例代码，都上传到 "),e("a",{attrs:{href:"https://github.com/koudle/The-Guide-to-the-Flutter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),e("OutboundLink")],1),t._v(" 上了，"),e("a",{attrs:{href:"https://github.com/koudle/The-Guide-to-the-Flutter",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击"),e("OutboundLink")],1),t._v(" 下载代码。")]),t._v(" "),e("p",[t._v("代码里有两个目录：")]),t._v(" "),e("ul",[e("li",[t._v("flutter_widget_demo")]),t._v(" "),e("li",[t._v("flutter_doubanmovie")])]),t._v(" "),e("h3",{attrs:{id:"flutter-widget-demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flutter-widget-demo"}},[t._v("#")]),t._v(" flutter_widget_demo")]),t._v(" "),e("p",[t._v("flutter_widget_demo 目录下的 Flutter 工程是手册里介绍的 Widget 的 Demo 代码。")]),t._v(" "),e("h4",{attrs:{id:"使用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),e("p",[t._v("在 VS Code 中，打开本目录下的工程即可。")]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v("File")]),t._v(" -> "),e("code",[t._v("Open...")])])]),t._v(" "),e("li",[e("p",[t._v("选中 flutter_widget_demo 目录，然后点击 "),e("code",[t._v("Open")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/17/16a2aa70cc13bdcf?w=1690&h=988&f=jpeg&s=194514",alt:""}})])])]),t._v(" "),e("h4",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),e("p",[t._v("Demo 代码里都有 "),e("code",[t._v("main()")]),t._v(" 方法 和 "),e("code",[t._v("MaterialApp")]),t._v(" ，主要是为了方便读者复制代码，在自己的独立 Flutter APP 里运行，在实际开发 APP 过程中，不会这样子开发。")]),t._v(" "),e("p",[t._v("想要知道 Flutter APP 实际如何开发，请看 "),e("code",[t._v("Flutter实战篇")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"flutter-doubanmovie"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flutter-doubanmovie"}},[t._v("#")]),t._v(" flutter_doubanmovie")]),t._v(" "),e("p",[t._v("flutter_doubanmovie 目录下的 Flutter 工程是 Flutter 实战里仿写的豆瓣电影 APP 的代码。")]),t._v(" "),e("h4",{attrs:{id:"使用方法-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方法-2"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),e("p",[t._v("在 VS Code 中，打开本目录下的工程即可。")]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v("File")]),t._v(" -> "),e("code",[t._v("Open...")])])]),t._v(" "),e("li",[e("p",[t._v("选中 flutter_doubanmovie 目录，然后点击 "),e("code",[t._v("Open")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/17/16a2aa75ca9303cb?w=1690&h=988&f=jpeg&s=194659",alt:""}})])])])])}),[],!1,null,null,null);e.default=d.exports}}]);