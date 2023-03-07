(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{359:function(l,t,e){"use strict";e.r(t);var r=e(1),i=Object(r.a)({},(function(){var l=this,t=l._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[t("h1",{attrs:{id:"flutter-可滚动-widget-singlechildscrollview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flutter-可滚动-widget-singlechildscrollview"}},[l._v("#")]),l._v(" Flutter 可滚动 Widget —— SingleChildScrollView")]),l._v(" "),t("p",[l._v("本节讲 Flutter SingleChildScrollView。")]),l._v(" "),t("p",[l._v("SingleChildScrollView 是只能包含一个 子 Widget 的可滚动 Widget。")]),l._v(" "),t("h2",{attrs:{id:"代码所在位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置"}},[l._v("#")]),l._v(" 代码所在位置")]),l._v(" "),t("p",[l._v("flutter_widget_demo/lib/singlechildscrollview/SingleChildScrollViewWidget.dart")]),l._v(" "),t("h2",{attrs:{id:"singlechildscrollview-的快速上手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#singlechildscrollview-的快速上手"}},[l._v("#")]),l._v(" SingleChildScrollView 的快速上手")]),l._v(" "),t("p",[l._v("SingleChildScroolView 可以让 Widget 具有滑动的功能，而且可以指定滚动的方向，其 child 参数就是你想要添加滚动功能的 Widget，例如：")]),l._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[l._v("SingleChildScrollView(\n  scrollDirection: Axis.horizontal,\n  child: Row(\n    children: <Widget>[Text('Hello Flutter ' * 100)],\n  ),\n)\n")])])]),t("p",[l._v("可以将前面 子 Widget 超过父容器时出现 overflowed 错误的代码更改为：")]),l._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[l._v("import 'package:flutter/material.dart';\n\nmain() {\n  runApp(new MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return new MaterialApp(\n        title: 'Test',\n        home: new Scaffold(\n            appBar: new AppBar(title: new Text('Flutter 可滚动Widget -- SingleChildScrollView')),\n            body: SingleChildScrollView(\n              scrollDirection: Axis.horizontal,\n              child: Row(\n                children: <Widget>[Text('Hello Flutter ' * 100)],\n              ),\n            )));\n  }\n}\n")])])]),t("p",[l._v("运行效果为：")]),l._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a002e5a827b677?w=852&h=350&f=jpeg&s=55063",alt:""}})]),l._v(" "),t("p",[l._v("这里的文本内容没有了 overflowed 错误的黄黑色的条，而且可以在水平方向上滑动。")]),l._v(" "),t("h2",{attrs:{id:"singlechildscrollview-的构造函数及参数说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#singlechildscrollview-的构造函数及参数说明"}},[l._v("#")]),l._v(" SingleChildScrollView 的构造函数及参数说明")]),l._v(" "),t("p",[l._v("先看 SingleChildScrollView 的构造函数：")]),l._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[l._v("class SingleChildScrollView extends StatelessWidget {\n  const SingleChildScrollView({\n    Key key,\n    this.scrollDirection = Axis.vertical,\n    this.reverse = false,\n    this.padding,\n    bool primary,\n    this.physics,\n    this.controller,\n    this.child,\n    this.dragStartBehavior = DragStartBehavior.down,\n  })\n  ...\n}\n")])])]),t("table",[t("thead",[t("tr",[t("th",[l._v("参数名字")]),l._v(" "),t("th",[l._v("参数类型")]),l._v(" "),t("th",[l._v("意义")]),l._v(" "),t("th",[l._v("必选 or 可选")])])]),l._v(" "),t("tbody",[t("tr",[t("td",[l._v("key")]),l._v(" "),t("td",[l._v("Key")]),l._v(" "),t("td",[l._v("Widget 的标识")]),l._v(" "),t("td",[l._v("可选")])]),l._v(" "),t("tr",[t("td",[l._v("scrollDirection")]),l._v(" "),t("td",[l._v("Axis")]),l._v(" "),t("td",[l._v("滑动的方向"),t("br"),l._v("默认为 Axis.vertical，垂直方向可滑动")]),l._v(" "),t("td",[l._v("可选")])]),l._v(" "),t("tr",[t("td",[l._v("padding")]),l._v(" "),t("td",[l._v("EdgeInsetsGeometry")]),l._v(" "),t("td",[l._v("SingleChildScrollView 插入 子 Widget 时的内边距")]),l._v(" "),t("td",[l._v("可选")])]),l._v(" "),t("tr",[t("td",[l._v("reverse")]),l._v(" "),t("td",[l._v("bool")]),l._v(" "),t("td",[l._v("控制 SingleChildScrollView 是从头开始滑，还是从尾开始滑，默认为 false，就是从头开始滑"),t("br"),l._v("例如当 scrollDirection 为 Axis.vertical,即垂直方向可滑动，那么 reverse 为 false，就是从头部滑到底部，当 reverse 为 true 时，就是从底部滑到头部")]),l._v(" "),t("td",[l._v("可选")])]),l._v(" "),t("tr",[t("td",[l._v("primary")]),l._v(" "),t("td",[l._v("bool")]),l._v(" "),t("td",[l._v("是否是与父级关联的主滚动视图"),t("br"),l._v("当为 true 时，即使 SingleChildScrollView 里没有足够的内容也能滑动，"),t("br"),l._v("当 scrollDirection 为 Axis.vertical，且 controller 为 null 时，默认为 true")]),l._v(" "),t("td")]),l._v(" "),t("tr",[t("td",[l._v("可选")]),l._v(" "),t("td"),l._v(" "),t("td"),l._v(" "),t("td")]),l._v(" "),t("tr",[t("td",[l._v("physics")]),l._v(" "),t("td",[l._v("ScrollPhysics")]),l._v(" "),t("td",[l._v("设置 SingleChildScrollView 的滚动效果"),t("br"),l._v("如果想让 SingleChildScrollView 里没有足够的内容也能滑动，则设置为 AlwaysScrollableScrollPhysics()"),t("br"),l._v("如果想让 SingleChildScrollView 在没有足够的内容的时候不能滑动，则设置为 ScrollPhysics()")]),l._v(" "),t("td",[l._v("可选")])]),l._v(" "),t("tr",[t("td",[l._v("controller")]),l._v(" "),t("td",[l._v("ScrollController")]),l._v(" "),t("td",[l._v("可以控制 SingleChildScrollView 滚动的位置"),t("br"),l._v("当 primary 为 true 时，controller 必须为 null"),t("br"),l._v("ScrollController 提供以下的几个功能："),t("br"),l._v("1.设置 SingleChildScrollView 滑动的初始位置"),t("br"),l._v("2.可以控制 SingleChildScrollView 是否存储和恢复滑动的位置"),t("br"),l._v("3.可以读取、设置当前滑动的位置")]),l._v(" "),t("td",[l._v("可选")])]),l._v(" "),t("tr",[t("td",[l._v("children")]),l._v(" "),t("td",[l._v("List<Widget>")]),l._v(" "),t("td",[l._v("SingleChildScrollView 的列表项")]),l._v(" "),t("td",[l._v("可选")])]),l._v(" "),t("tr",[t("td",[l._v("dragStartBehavior")]),l._v(" "),t("td",[l._v("DragStartBehavior")]),l._v(" "),t("td",[l._v("确定处理拖动开始行为的方式。"),t("br"),l._v("如果设置为[DragStartBehavior.start]，则在检测到拖动手势时将开始滚动拖动行为"),t("br"),l._v("如果设置为[DragStartBehavior.down]，它将在首次检测到向下事件时开始")]),l._v(" "),t("td",[l._v("可选")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);