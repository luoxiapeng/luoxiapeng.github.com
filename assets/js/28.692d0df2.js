(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{382:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"flutter-开发利器-hot-reload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flutter-开发利器-hot-reload"}},[t._v("#")]),t._v(" Flutter 开发利器 —— Hot Reload")]),t._v(" "),s("p",[t._v("前面已经将 Flutter 运行起来了，然后打开 main.dart ，看到如下的代码：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('class MyApp extends StatelessWidget {\n  // This widget is the root of your application.\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: \'Flutter Demo\',\n      theme: ThemeData(\n        // This is the theme of your application.\n        //\n        // Try running your application with "flutter run". You\'ll see the\n        // application has a blue toolbar. Then, without quitting the app, try\n        // changing the primarySwatch below to Colors.green and then invoke\n        // "hot reload" (press "r" in the console where you ran "flutter run",\n        // or simply save your changes to "hot reload" in a Flutter IDE).\n        // Notice that the counter didn\'t reset back to zero; the application\n        // is not restarted.\n        primarySwatch: Colors.blue,\n      ),\n      home: MyHomePage(title: \'Flutter Demo Home Page\'),\n    );\n  }\n}\n')])])]),s("p",[t._v("找到下面的代码：")]),t._v(" "),s("div",{staticClass:"language-Dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("home"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyHomePage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Flutter Demo Home Page'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("将这行代码改为：")]),t._v(" "),s("div",{staticClass:"language-Dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("home"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyHomePage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("使用快捷键 "),s("strong",[t._v("ctrl+s")]),t._v("（Windows、Linux）或者 "),s("strong",[t._v("cmd+s")]),t._v("（MacOS），这个快捷键其实是保存代码，但是可以触发 Hot Reload；")]),t._v(" "),s("p",[t._v("或者点击 "),s("strong",[t._v("Hot Reload")]),t._v(" 的按钮：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Android Studio 的 "),s("strong",[t._v("Hot Reload")]),t._v(" 按钮：\n"),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/2/20/1690b3ec2bfd35bb?w=1050&h=88&f=jpeg&s=25400",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("VS Code 的 "),s("strong",[t._v("Hot Reload")]),t._v(" 按钮：\n"),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/2/20/1690b3fb4170c0a2?w=458&h=102&f=jpeg&s=12386",alt:""}})])])]),t._v(" "),s("p",[t._v("就可以看到运行的 Flutter APP 的 TitleBar 的内容发生了变化：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/169ffee0086d64b8?w=292&h=524&f=png&s=25779",alt:""}})]),t._v(" "),s("p",[t._v("是不是很神奇，不需要重新编译，就能实时看到代码的变更，这个功能就是 Flutter 的 Hot Reload。")]),t._v(" "),s("p",[t._v("Flutter 的 Hot Reload 功能可以帮助开发者方便快速的调试代码，构建 UI，添加功能和修复 bug。")]),t._v(" "),s("h2",{attrs:{id:"使用-hot-reload-的步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-hot-reload-的步骤"}},[t._v("#")]),t._v(" 使用 Hot Reload 的步骤")]),t._v(" "),s("p",[t._v("1.连接真机或虚拟机，运行 Flutter APP，且必须以 Debug 模式启动。因为只有 Debug 模式才能使用 Hot Reload。")]),t._v(" "),s("p",[t._v("2.修改 Flutter APP 工程里的 Dart 代码，但并不是所有 Dart 代码的修改都可以使用 Hot Reload，有一些情况下 Hot Reload 并不能生效，只能使用 Hot Restart（重新启动）。")]),t._v(" "),s("p",[t._v("3.然后使用快捷键 "),s("strong",[t._v("ctrl+s")]),t._v("（Windows、Linux）或者 "),s("strong",[t._v("cmd+s")]),t._v("（MacOS），或者点击 Hot Reload 的按钮。就完成了 Hot Reload 的操作，Hot Reload 成功后，会在 Debug Consol 中看到输出如下类似的消息：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Reloaded 1 of 419 libraries in 1,165ms.\n")])])]),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/19/169962124fc8cc37?w=1566&h=288&f=jpeg&s=102224",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"hot-reload-的工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hot-reload-的工作原理"}},[t._v("#")]),t._v(" Hot Reload 的工作原理")]),t._v(" "),s("p",[t._v("Hot Reload 只能在 Debug 模式下使用，是因为 Debug 模式下，Flutter 采用的是 JIT 动态编译，代码是运行在 Dart VM 上，JIT 将 Dart 编译成可以运行在 Dart VM 上的 Dart Kernel，Dart Kernel 可以动态更新，所以就实现了代码的实时更新功能。")]),t._v(" "),s("p",[t._v("当调用 Hot Reload 时：")]),t._v(" "),s("ol",[s("li",[t._v("首先会扫描代码，找到上次编译之后有变化的 Dart 代码。")]),t._v(" "),s("li",[t._v("在将这些变化的 Dart 代码转化为增量的 Dart Kernel 文件。")]),t._v(" "),s("li",[t._v("将增量的 Dart Kernel 文件发送到正在移动设备上运行的 Dart VM。")]),t._v(" "),s("li",[t._v("Dart VM 会将发来的增量 Dart Kernel 文件和原有的 Dart Kernel 文件合并，然后重新加载全新的 Dart Kernel。")]),t._v(" "),s("li",[t._v("这个时候，虽然重新加载了 Dart Kernel，"),s("strong",[t._v("却不会重新执行代码")]),t._v("，而是通知 Flutter Framework 重建 Widget。")])]),t._v(" "),s("p",[t._v("所以 Flutter 的 Hot Reload 并不会重新执行一遍代码，而是触发 Flutter 重新绘制，并且会保留 Flutter 之前的状态，所以 Hot Reload 也被称为有状态的热重载。")]),t._v(" "),s("p",[t._v("这里你可能会有点难以理解，什么是重建 Widget？什么是状态？没有关系，后面都会讲到，你可以继续往下看。")]),t._v(" "),s("h2",{attrs:{id:"不能使用-hot-reload-的场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不能使用-hot-reload-的场景"}},[t._v("#")]),t._v(" 不能使用 Hot Reload 的场景")]),t._v(" "),s("p",[t._v("在理解了 Hot Reload 的原理之后，可以看到 Hot Reload 的使用场景是有一些限制的，接下来我们在看一下不能使用 Hot Reload 的 场景（这里可能会有你不太理解的内容，那你可以大致看一下，有个印象，等你看完后面的内容，在来看这部分内容，就会好理解了）：")]),t._v(" "),s("h4",{attrs:{id:"_1-代码出现编译错误的不能使用-hot-reload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-代码出现编译错误的不能使用-hot-reload"}},[t._v("#")]),t._v(" 1. 代码出现编译错误的不能使用 Hot Reload")]),t._v(" "),s("p",[t._v("当代码更改引入编译错误时，肯定不能使用 Hot Reload。")]),t._v(" "),s("p",[t._v("所以要先解决编译错误，在使用 Hot Reload。")]),t._v(" "),s("h4",{attrs:{id:"_2-代码更改会影响-app-状态的不能使用-hot-reload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-代码更改会影响-app-状态的不能使用-hot-reload"}},[t._v("#")]),t._v(" 2. 代码更改会影响 APP 状态的不能使用 Hot Reload")]),t._v(" "),s("p",[t._v("如果你的代码更改会影响 APP 的状态，使得代码更改之后的状态和代码更改之前的状态不一样，那么 Hot Reload 就不会生效，例如：")]),t._v(" "),s("div",{staticClass:"language-Dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyWidget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StatelessWidget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Widget "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GestureDetector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("onTap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'T'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这段代码，运行 App 之后，将 "),s("strong",[t._v("StatelessWidget")]),t._v(" 改为 "),s("strong",[t._v("StatefulWidget")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-Dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyWidget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StatefulWidget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  State"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MyWidget"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyWidgetState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyWidgetState")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("State")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MyWidget"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*...*/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("因为 Hot Reload 会保留状态，在代码更改之前，"),s("code",[t._v("MyWidget")]),t._v(" 是 "),s("strong",[t._v("StatelessWidget")]),t._v(" ，将 "),s("strong",[t._v("StatelessWidget")]),t._v(" 改为 "),s("strong",[t._v("StatefulWidget")]),t._v(" ，如果 Hot Reload 成功，那么 "),s("code",[t._v("MyWidget")]),t._v(" 会变成 "),s("strong",[t._v("StatefulWidget")]),t._v(" ，与它之前的状态就会不兼容的，所以 Hot Reload 是不会成功的。")]),t._v(" "),s("h4",{attrs:{id:"_3-全局变量-global-variables-和静态字段-static-fields-的更改不能使用-hot-reload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-全局变量-global-variables-和静态字段-static-fields-的更改不能使用-hot-reload"}},[t._v("#")]),t._v(" 3. 全局变量（ global variables）和静态字段（static fields）的更改不能使用 Hot Reload")]),t._v(" "),s("p",[t._v("在 Flutter 中，全局变量和静态字段被视为状态，因此在 Hot Reload 期间不会重新初始化。")]),t._v(" "),s("p",[t._v("如下的代码：")]),t._v(" "),s("div",{staticClass:"language-Dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" sampleTable "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"T1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"T2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"T3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"T4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("运行 App 之后，如果做了如下的更改：")]),t._v(" "),s("div",{staticClass:"language-Dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" sampleTable "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"T1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"T2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"T3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"T10"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改这里的值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("运行 Hot Reload，是不会成功的，所以全局变量和静态字段不能使用 Hot Reload。")]),t._v(" "),s("h4",{attrs:{id:"_4-main-方法里的更改不能使用-hot-reload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-main-方法里的更改不能使用-hot-reload"}},[t._v("#")]),t._v(" 4. main() 方法里的更改不能使用 Hot Reload")]),t._v(" "),s("p",[t._v("因为 "),s("code",[t._v("main()")]),t._v(" 方法不会因重建窗口小部件树而重新执行，所以更改 "),s("code",[t._v("main()")]),t._v(" 方法里的代码，不会在 Hot Reload 之后看到效果。")]),t._v(" "),s("p",[t._v("例如，如下的代码：")]),t._v(" "),s("div",{staticClass:"language-Dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package:flutter/material.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("runApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyApp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StatelessWidget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Widget "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GestureDetector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("onTap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tapped'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在运行 App 后，更改如下：")]),t._v(" "),s("div",{staticClass:"language-Dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package:flutter/widgets.dart'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("runApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Center")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" textDirection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TextDirection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ltr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Hot Reload 之后，不会看到任何变化。")]),t._v(" "),s("h4",{attrs:{id:"_5-枚举类型更改为常规的类或者常规的类变为枚举类型也不能使用-hotreload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-枚举类型更改为常规的类或者常规的类变为枚举类型也不能使用-hotreload"}},[t._v("#")]),t._v(" 5. 枚举类型更改为常规的类或者常规的类变为枚举类型也不能使用 HotReload")]),t._v(" "),s("p",[t._v("例如，如下的例子：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("enum Color {\n  red,\n  green,\n  blue\n}\n")])])]),s("p",[t._v("改为:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class Color {\n  Color(this.i, this.j);\n  final int i;\n  final int j;\n  }\n")])])]),s("h4",{attrs:{id:"_6-修改通用类型声明也不能使用-hotreload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-修改通用类型声明也不能使用-hotreload"}},[t._v("#")]),t._v(" 6. 修改通用类型声明也不能使用 HotReload")]),t._v(" "),s("p",[t._v("例如，如下的例子：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class A<T> {\n  T i;\n}\n")])])]),s("p",[t._v("改为:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class A<T, V> {\n  T i;\n  V v;\n}\n")])])]),s("h2",{attrs:{id:"hot-reload-vs-hot-restart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hot-reload-vs-hot-restart"}},[t._v("#")]),t._v(" "),s("code",[t._v("Hot Reload")]),t._v(" VS "),s("code",[t._v("Hot Restart")])]),t._v(" "),s("p",[t._v("针对上面不能使用 Hot Reload 的情况，就需要使用 Hot Restart。")]),t._v(" "),s("p",[t._v("Hot Restart 可以完全重启您的应用程序，但却不用结束调试会话。")]),t._v(" "),s("h4",{attrs:{id:"android-studio-里执行-hot-restart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#android-studio-里执行-hot-restart"}},[t._v("#")]),t._v(" Android Studio 里执行 Hot Restart")]),t._v(" "),s("p",[t._v("在 Android Studio 里，无需 stop，在 run 一下，就是 Hot Restart。")]),t._v(" "),s("h4",{attrs:{id:"vs-code-里执行-hot-restart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vs-code-里执行-hot-restart"}},[t._v("#")]),t._v(" VS Code 里执行 Hot Restart")]),t._v(" "),s("p",[t._v("在 VS Code 里，打开命令面板，输入 **Flutter: Hot Restart ** 或者 直接快捷键 Ctrl+F5，就可以使用 Hot Restart。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("最适合 Hot Reload 的场景就是写布局的时候，如果是其他场景，尤其是写业务逻辑的时候，一不小心就会碰到无法使用 Hot Reload 的场景，所以当你发现 Hot Reload 不生效的时候，就使用 Hot Restart 吧，Hot Restart 也一样很快。")])])}),[],!1,null,null,null);a.default=e.exports}}]);