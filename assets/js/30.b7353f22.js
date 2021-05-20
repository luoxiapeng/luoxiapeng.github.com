(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{383:function(t,e,i){"use strict";i.r(e);var a=i(42),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"flutter-的基础-widget"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flutter-的基础-widget"}},[t._v("#")]),t._v(" Flutter 的基础 —— Widget")]),t._v(" "),i("p",[t._v("要进行 Flutter 的开发，一定离不开 Widget，Widget 是 Flutter 的基础。")]),t._v(" "),i("h2",{attrs:{id:"widget-是什么"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#widget-是什么"}},[t._v("#")]),t._v(" Widget 是什么？")]),t._v(" "),i("p",[t._v("Flutter 中的 Widget 相当于 Android 里的 View，iOS 里的 UIView。")]),t._v(" "),i("p",[t._v("在 Flutter 中要用 Widget 构件 UI。Flutter 的 Widget 渲染采用的是类似 React 的框架：当 Widget 状态发生变化，需要更新界面时，框架会先计算从上一个状态转换到下一个状态所需的最小更改，然后再去刷新界面。")]),t._v(" "),i("h2",{attrs:{id:"flutter-framework-里的-widget"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flutter-framework-里的-widget"}},[t._v("#")]),t._v(" Flutter Framework 里的 Widget")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/2/14/168eb1ddc1f9a6c0?w=2685&h=601&f=png&s=105101",alt:""}})]),t._v(" "),i("p",[t._v("这是 Flutter Framework 层的架构图，可以看到 Framework 里面有一层是 Widgets。")]),t._v(" "),i("p",[t._v("在 Widgets 层下面，有：")]),t._v(" "),i("ul",[i("li",[t._v("Rendering（渲染层）")]),t._v(" "),i("li",[t._v("Animation、Painting、Gestures（动画、绘制、手势）")]),t._v(" "),i("li",[t._v("Foundation（基础库层）")])]),t._v(" "),i("p",[t._v("Widgets 下面的层提供的是最基本的功能，但是这些平时很少使用到，因为要使用这些的话会比较复杂。我们在开发中使用的都是封装好的东西，也就是 Widgets 上面的那层：")]),t._v(" "),i("ul",[i("li",[t._v("Material & Cupertino\nMaterial & Cupertino 指的 Widget 的风格是 Material 或 Cupertino 。Flutter 为了减轻开发人员的工作量，实现了两种不同风格的组件：Material 和 Cupertino 。Material 用于 Android，Cupertino 用于 iOS。有了这些组件，开发人员不需要再做额外的工作，就可以让 Flutter 的 UI 风格适应不同的平台，让 Flutter UI 获得和 Native UI 一样的使用体验。")])]),t._v(" "),i("h2",{attrs:{id:"widget-的结构-widget-树"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#widget-的结构-widget-树"}},[t._v("#")]),t._v(" Widget 的结构：Widget 树")]),t._v(" "),i("p",[t._v("Widget 组合的结构是树，所以叫做 Widget 树。")]),t._v(" "),i("p",[t._v("Widget 树 结构如下图：\n"),i("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/3/1694414ab4da9231?w=768&h=480&f=png&s=6656",alt:""}})]),t._v(" "),i("h4",{attrs:{id:"父-widget-和-子-widget"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#父-widget-和-子-widget"}},[t._v("#")]),t._v(" 父 Widget 和 子 Widget")]),t._v(" "),i("p",[t._v("在 Widget 树里，Widget 有包含和被包含的关系：")]),t._v(" "),i("ul",[i("li",[t._v("父 Widget：包含其他 Widget 的就叫 父 Widget。")]),t._v(" "),i("li",[t._v("子 Widget：被 父 Widget 包含的 Widget 就叫 子 Widget。")])]),t._v(" "),i("h4",{attrs:{id:"根-widget"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#根-widget"}},[t._v("#")]),t._v(" 根 Widget")]),t._v(" "),i("p",[t._v("根 Widget 也叫 Root Widget。")]),t._v(" "),i("p",[t._v("在前面创建的 Flutter 工程里找到 "),i("code",[t._v("main.dart")]),t._v(","),i("code",[t._v("main.dart")]),t._v(" 是 Flutter 的入口文件。")]),t._v(" "),i("p",[t._v("里面有一个 "),i("code",[t._v("main()")]),t._v(" 方法，是 Flutter 的入口方法：")]),t._v(" "),i("div",{staticClass:"language-Dart extra-class"},[i("pre",{pre:!0,attrs:{class:"language-dart"}},[i("code",[i("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),i("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),i("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("runApp")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyApp")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),i("p",[i("code",[t._v("runApp（MyApp()）")]),t._v(" 里的参数 "),i("code",[t._v("MyApp()")]),t._v(" 就是一个 Widget，MyApp 的作用只是封装一下，实际使用的 Widget 是 MaterialApp，这里的 MaterialApp 就是 "),i("code",[t._v("根(Root)Widget")]),t._v("，Flutter 会默认把 "),i("strong",[t._v("根 Widget")]),t._v(" 充满屏幕。")]),t._v(" "),i("p",[t._v("在 Flutter 中，根 Widget 只能是以下三个：")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("WidgetsApp")]),t._v(" "),i("p",[t._v("WidgetsApp 是可以自定义风格的 根 Widget。")])]),t._v(" "),i("li",[i("p",[t._v("MaterialApp\nMaterialApp 是在 WidgetsApp 上添加了很多 material-design 的功能，是 Material Design 风格的 根 Widget。")])]),t._v(" "),i("li",[i("p",[t._v("CupertinoApp")]),t._v(" "),i("p",[t._v("CupertinoApp 也是基于 WidgetsApp 实现的 iOS 风格的 根 Widget。")])])]),t._v(" "),i("p",[t._v("这三个中最常用的是 MaterialApp，因为 MaterialApp 的功能最完善。MaterialApp 经常与 Scaffold 一起使用。")]),t._v(" "),i("h2",{attrs:{id:"widget-的标识符-key"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#widget-的标识符-key"}},[t._v("#")]),t._v(" Widget 的标识符：Key")]),t._v(" "),i("p",[t._v("因为 Flutter 采用的是 react-style 的框架，每次刷新 UI 的时候，都会重新构建新的 Widget 树，然后和之前的 Widget 树 进行对比，计算出变化的部分，这个计算过程叫做 diff，在 diff 过程中，如果能提前知道哪些 Widget 没有变化，无疑会提高 diff 的性能，这时候就需要使用到标识符。")]),t._v(" "),i("h3",{attrs:{id:"在-diff-过程中-如何知道哪些-widget-没有变化呢"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#在-diff-过程中-如何知道哪些-widget-没有变化呢"}},[t._v("#")]),t._v(" 在 diff 过程中，如何知道哪些 Widget 没有变化呢？")]),t._v(" "),i("p",[t._v("为了在 diff 过程中，知道 Widget 有没有变化，就需要给 Widget 添加一个唯一的标识符，然后在 Widget 树 的 diff 过程中，查看刷新前后的 Widget 树 有没有相同标识符的 Widget，如果标识符相同，则说明 Widget 没有变化，否则说明 Widget 有变化。")]),t._v(" "),i("p",[t._v("假设 UI 刷新前，Widget 树 是 A，在 A 里有一个标识符为 a 的 Widget,在 UI 刷新后，重建的 Widget 树 是 B，如果 B 里还有标识符为 a 的 Widget，则说明这个 Widget 没变，但是如果 B 里没有标识符为 a 的 Widget，那么说明这个 Widget 发生了变化。")]),t._v(" "),i("div",{staticClass:"language-! extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("这个标识符在 Flutter 中就是 Key，所有 Widget 都有 Key 这一个属性。\n")])])]),i("h3",{attrs:{id:"flutter-中如何在-diff-过程中判断哪些-widget-没有变化"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flutter-中如何在-diff-过程中判断哪些-widget-没有变化"}},[t._v("#")]),t._v(" Flutter 中如何在 diff 过程中判断哪些 Widget 没有变化？")]),t._v(" "),i("p",[t._v("Flutter 在 diff 过程中判断哪些 Widget 没有变化，稍微有些复杂，有两种情况：")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("默认情况下（ Widget 没有设置 Key）")]),t._v(" "),i("p",[t._v("当没有给 Widget 设置 Key 时，Flutter 会根据 Widget 的 runtimeType 和显示顺序是否相同来判断 Widget 是否有变化。")]),t._v(" "),i("p",[t._v("runtimeType 是 Widget 的类型，例如 Text 和 RaisedButton 就是不同的类型。")])]),t._v(" "),i("li",[i("p",[t._v("Widget 有 Key")]),t._v(" "),i("p",[t._v("当给 Widget 设置了 Key 时，Flutter 是根据 Key 和 runtimeType 是否相同来判断 Widget 是否有变化。")])])]),t._v(" "),i("h3",{attrs:{id:"key-的分类"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#key-的分类"}},[t._v("#")]),t._v(" Key 的分类")]),t._v(" "),i("p",[t._v("Key 总共分为两类：")]),t._v(" "),i("ol",[i("li",[t._v("Local Key（局部 Key）")]),t._v(" "),i("li",[t._v("Global Key（全局 Key）")])]),t._v(" "),i("h4",{attrs:{id:"_1-local-key-局部-key"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-local-key-局部-key"}},[t._v("#")]),t._v(" 1. Local Key（局部 Key）")]),t._v(" "),i("p",[t._v("在有相同父级的 Widget 中，Key 必须是唯一的，这样的 Key 叫做 局部 Key。")]),t._v(" "),i("p",[t._v("局部 Key 在 Flutter 中对应的抽象类是 LocalKey。LocalKey 有不同的实现，主要的区别就是使用什么值来作为 Key 的值：")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("ObjectKey")]),t._v(" "),i("p",[t._v("将对象作为 Key 的值。")])]),t._v(" "),i("li",[i("p",[t._v("ValueKey")]),t._v(" "),i("p",[t._v("使用特定类型的值来作为 Key 的值。")])]),t._v(" "),i("li",[i("p",[t._v("UniqueKey")]),t._v(" "),i("p",[t._v("使用 UniqueKey 自己的对象作为 Key 的值，所以只与自身相等，称为 唯一 Key。")])])]),t._v(" "),i("h4",{attrs:{id:"_2-global-key-全局-key"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-global-key-全局-key"}},[t._v("#")]),t._v(" 2. Global Key（全局 Key）")]),t._v(" "),i("p",[t._v("全局 Key 是在整个 APP 中唯一的 Key。")]),t._v(" "),i("p",[t._v("全局 Key 在 Flutter 中对应的抽象类是 GlobalKey。GlobalKey 有不同的实现，主要区别是使用的场景不同：")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("LabeledGlobalKey")]),t._v(" "),i("p",[t._v("LabeledGlobalKey 用于调试，不会用来比较 Widget 是否有变化。")])]),t._v(" "),i("li",[i("p",[t._v("GlobalObjectKey")]),t._v(" "),i("p",[t._v("将对象作为 Global Key 的值。")])])]),t._v(" "),i("h3",{attrs:{id:"key-的使用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#key-的使用"}},[t._v("#")]),t._v(" Key 的使用")]),t._v(" "),i("p",[t._v("一般情况下我们不需要使用 Key，但是当页面比较复杂时，就需要使用 Key 去提升渲染性能。")]),t._v(" "),i("h2",{attrs:{id:"widget-的分类-statelesswidget-和-statefulwidget"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#widget-的分类-statelesswidget-和-statefulwidget"}},[t._v("#")]),t._v(" Widget 的分类：StatelessWidget 和 StatefulWidget")]),t._v(" "),i("p",[t._v("因为渲染是很耗性能的，为了提高 Flutter 的帧率，就要尽量减少不必要的 UI 渲染，所以 Flutter 根据 UI 是否有变化，将 Widget 分为：")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("StatefulWidget")]),t._v(" "),i("p",[t._v("StatefulWidget 是 UI 可以变化的 Widget，创建完后 UI 还可以在更改。")])]),t._v(" "),i("li",[i("p",[t._v("StatelessWidget")]),t._v(" "),i("p",[t._v("StatelessWidget 是 UI 不可以变化的 Widget，创建完后 UI 就不可以在更改。")])])]),t._v(" "),i("h2",{attrs:{id:"widget-大全"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#widget-大全"}},[t._v("#")]),t._v(" Widget 大全")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://flutter.dev/docs/development/ui/widgets",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter 官网"),i("OutboundLink")],1),t._v(" 上将 Widget 分为 14 类，总共有上百个 Widget：")]),t._v(" "),i("ol",[i("li",[t._v("Accessibility")]),t._v(" "),i("li",[t._v("Animation and Motion")]),t._v(" "),i("li",[t._v("Assets, Images, and Icons")]),t._v(" "),i("li",[t._v("Async")]),t._v(" "),i("li",[t._v("Basics")]),t._v(" "),i("li",[t._v("Cupertino (iOS-style widgets)")]),t._v(" "),i("li",[t._v("Input")]),t._v(" "),i("li",[t._v("Interaction Models")]),t._v(" "),i("li",[t._v("Layout")]),t._v(" "),i("li",[t._v("Material Components")]),t._v(" "),i("li",[t._v("Painting and effects")]),t._v(" "),i("li",[t._v("Scrolling")]),t._v(" "),i("li",[t._v("Styling")]),t._v(" "),i("li",[t._v("Text")]),t._v(" "),i("li",[t._v("Text")])]),t._v(" "),i("p",[t._v("可以看到，Widget 几乎实现了所有的功能，除了 UI、布局之外，还有交互、动画等，也可见 Widget 在 Flutter 中的地位。")]),t._v(" "),i("p",[t._v("可以在 "),i("a",{attrs:{href:"https://flutter.dev/docs/development/ui/widgets",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),i("OutboundLink")],1),t._v(" 查看所有的 Widget。")]),t._v(" "),i("h2",{attrs:{id:"flutter-中-widget-的使用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flutter-中-widget-的使用"}},[t._v("#")]),t._v(" Flutter 中 Widget 的使用")]),t._v(" "),i("p",[t._v("我们在 Flutter 中使用 Widget 的时候，有以下两点：")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("StatefulWidget 与 StatelessWidget")]),t._v(" "),i("p",[t._v("Flutter 的大部分 Widget 都可以分为 StatefulWidget 和 StatelessWidget 这两类，所以要弄懂 StatefulWidget 与 StatelessWidget 的区别和使用范围。")])]),t._v(" "),i("li",[i("p",[t._v("MaterialApp 与 Scaffold")]),t._v(" "),i("p",[t._v("MaterialApp 大部分情况下要作为 Flutter 的 根 Widget，并且 MaterrialApp 经常和 Scaffold 搭配一起使用。")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);