(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{379:function(e,t,r){"use strict";r.r(t);var n=r(1),a=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"flutter-开发进阶篇"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flutter-开发进阶篇"}},[e._v("#")]),e._v(" Flutter 开发进阶篇")]),e._v(" "),t("p",[e._v("前面对 Flutter 的开发有了比较全面的介绍，但这些并不足以让我们掌握到 Flutter 的精髓，所以我们也需要对 Flutter 的一些特性进行深入的研究和分析。")]),e._v(" "),t("p",[e._v("Flutter 开发进阶篇就是对前面介绍过的 Flutter 特性的深入分析和理解。")]),e._v(" "),t("h2",{attrs:{id:"flutter-ui-渲染过程-widget-element-renderobject"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flutter-ui-渲染过程-widget-element-renderobject"}},[e._v("#")]),e._v(" Flutter UI 渲染过程 —— Widget，Element，RenderObject")]),e._v(" "),t("p",[e._v("前面讲了 Flutter  采用了 react-style 的框架，并不是直接将 Widget 绘制在屏幕上。Flutter 将 Widget 渲染到屏幕上，总共经过了三个步骤：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/8/1695dd3ad9e9ac16?w=337&h=500&f=png&s=10213",alt:""}})]),e._v(" "),t("ol",[t("li",[e._v("创建 Widget 树")]),e._v(" "),t("li",[e._v("根据 Widget 树创建 Element 树")]),e._v(" "),t("li",[e._v("根据 Element 树创建 RenderObject 树")])]),e._v(" "),t("p",[e._v("运行下面的Flutter代码：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import \'package:flutter/material.dart\';\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatefulWidget {\n\n  MyApp();\n\n  @override\n  State<StatefulWidget> createState() {\n    // TODO: implement createState\n    return MyAppState();\n  }\n}\n\nclass MyAppState extends State<MyApp> {\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n        title: \'Flutter Demo\',\n        theme: ThemeData(\n          primarySwatch: Colors.blue,\n        ),\n        home: Scaffold(\n          appBar: AppBar(title: Text("Flutter渲染 -- Widget，Element，RenderObject"),),\n          body: Column(\n            children: <Widget>[\n              RaisedButton(onPressed: (){},child: Text("Button"),),\n              Text("Hello Flutter!")\n            ],\n          )\n        )\n    );\n  }\n\n}\n')])])]),t("p",[e._v("可以看到如下的运行界面：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/169fffdf04c38ad4?w=438&h=786&f=png&s=41493",alt:""}}),e._v("\n对应的是如下的三种视图树：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/8/1695dc61558264df?w=1295&h=879&f=png&s=62135",alt:""}})]),e._v(" "),t("p",[e._v("这三种视图树是怎么形成的呢？请看下面的 Flutter UI  渲染流程，就能明白。")]),e._v(" "),t("h3",{attrs:{id:"flutter-ui-渲染流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flutter-ui-渲染流程"}},[e._v("#")]),e._v(" Flutter UI 渲染流程")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/8/1695dd3ad9e9ac16?w=337&h=500&f=png&s=10213",alt:""}})]),e._v(" "),t("p",[e._v("在 "),t("code",[e._v("runApp")]),e._v(" 运行之后，就开始执行 Flutter UI 的渲染流程：")]),e._v(" "),t("h4",{attrs:{id:"_1-首先会创建一个-widget-树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-首先会创建一个-widget-树"}},[e._v("#")]),e._v(" 1. 首先会创建一个 Widget 树")]),e._v(" "),t("p",[e._v("在 Flutter 中 Widget 只是为 Element 提供配置信息，并不用于真正的渲染。而且当 StatefulWidget 调用 "),t("code",[e._v("setState()")]),e._v(" 之后，Widget 都会重新创建；特别是当你使用动画的时候，Widget 甚至每帧都会重建。")]),e._v(" "),t("p",[e._v("那就有一个问题，Widget每帧都重建，不会有性能问题吗？")]),e._v(" "),t("p",[e._v("答案是不会，因为 Widget 只包含配置信息，不包含渲染，是很轻量的，所以即使每帧都重建，所以也不会有性能问题。")]),e._v(" "),t("p",[e._v("在 Flutter 开发 UI 界面都是使用 Widget。")]),e._v(" "),t("h4",{attrs:{id:"_2-创建-element-树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建-element-树"}},[e._v("#")]),e._v(" 2. 创建 Element 树")]),e._v(" "),t("p",[e._v("遍历 Widget 树时，通过调用 Widget 的 "),t("code",[e._v("createElement()")]),e._v(" 方法，会创建对应的 Element 树。")]),e._v(" "),t("p",[e._v("在上面的视图树的图中，MaterialApp 对应的 Element 我写得是 MaterialApp 内的所有 Element，是因为 MaterialApp 有很多 Widget 组合而成，因此包含很多 Element，所以这里省略成了 MaterialApp 内的所有 Element，Scaffold 同理。这里每一个 Widget对应一个 Element。")]),e._v(" "),t("p",[e._v("而且由上面的视图树可知，Element 与 Widget 和 RenderObject 都有联系，Element 持有 Widget 和 RenderObject 的实例。")]),e._v(" "),t("p",[e._v("Element 树是不会重建的，只会进行更新，因为旧的 Widget 保存在 Element 里，当状态发生变化 Widget树 重建的时候，新生成的 Widget树 就会与保存在 Element 里旧的 Widget树 进行对比，发现变化的时候会更新 Element，Element 在更新 RenderObject。Element 的主要工作就是对比，是三个视图树里的核心部分。这个机制保证了虽然 Widget 每帧都重建，但是 Element 却只会更新变化的部分，因此保证了性能没有问题。")]),e._v(" "),t("h4",{attrs:{id:"_3-创建-renderobject-树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建-renderobject-树"}},[e._v("#")]),e._v(" 3. 创建 RenderObject 树")]),e._v(" "),t("p",[e._v("当Element "),t("code",[e._v("mount")]),e._v(" 的时候，就会创建 RenderObject，RenderObject 就是实际负责渲染的部分，因此 RenderObject 的操作是很昂贵的，所以要尽可能的复用，而不是创建新的。")]),e._v(" "),t("p",[e._v("RenderObject 是通过 Widget 的 "),t("code",[e._v("createRenderObject()")]),e._v(" 方法创建的，但并不是每一个 Widget 都有 RenderObjcet，只有 RenderObjectWidget(Widget的一个子类) 类型的 Widget 才有 RenderObjcet，例如上面视图树的 MyApp Widget 就没有 RenderObject，因为 MyApp 只是一层包装而已，如果自己没 有RenderObject,就会使用子类的 RenderObject。")]),e._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("Flutter 使用三级视图树来渲染，就是为了提升渲染的性能。")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Widget")]),e._v(" "),t("p",[e._v("Widget 只含有配置信息，不负责渲染，非常轻量，因此可以大量频繁的创建。")])]),e._v(" "),t("li",[t("p",[e._v("Element")]),e._v(" "),t("p",[e._v("Element 负责 diff，只更新变化的部分。")])]),e._v(" "),t("li",[t("p",[e._v("RenderObject")]),e._v(" "),t("p",[e._v("RenderObject 负责渲染。")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);