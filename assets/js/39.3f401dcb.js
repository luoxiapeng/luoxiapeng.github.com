(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{391:function(t,e,a){"use strict";a.r(e);var n=a(42),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"flutter-基础-widget-snackbar-和-builder-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flutter-基础-widget-snackbar-和-builder-的使用"}},[t._v("#")]),t._v(" Flutter 基础 Widget —— SnackBar 和 Builder 的使用")]),t._v(" "),a("p",[t._v("本文讲 Flutter 的 SnackBar 及 Builder。")]),t._v(" "),a("p",[t._v("SnackBar 是 Flutter 的底部消息提示，在使用 SnackBar 的时候，需要用到 Builder ，Builder 也是 Widget，Builder 可以用闭包的方式创建 子 Widget，使得 子 Widget 可以使用 父 Widget 的上下文，这里你可能还不太好理解，下面看具体的案例。")]),t._v(" "),a("h1",{attrs:{id:"snackbar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snackbar"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://docs.flutter.io/flutter/material/SnackBar-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SnackBar"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/2/26/1692a75eadbc4ff0?w=3000&h=3000&f=png&s=33761",alt:""}}),t._v("\nSnackBar 是具有可选操作的轻量级消息提示，在屏幕的底部显示。")]),t._v(" "),a("h2",{attrs:{id:"snackbar-的快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snackbar-的快速上手"}},[t._v("#")]),t._v(" SnackBar 的快速上手")]),t._v(" "),a("p",[t._v("SnackBar 需要用 "),a("code",[t._v("Scaffold.of(context).showSnackBar()")]),t._v(" 来显示，使用方式如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Scaffold.of(context).showSnackBar(SnackBar(\n    content: Text('SnackBar'), duration: Duration(seconds: 5)));\n")])])]),a("p",[t._v("完整代码如下，点击按钮，然后弹出一个提示：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import 'package:flutter/cupertino.dart';\nimport 'package:flutter/material.dart';\n\nvoid main() => runApp(SnackBarBuilderWidget());\n\nclass SnackBarBuilderWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: \"Flutter Demo\",\n      theme: ThemeData(\n        primaryColor: Colors.blue,\n      ),\n      home: Scaffold(\n        appBar: AppBar(title: Text(\"Flutter UI Widget -- SnackBar 及 Builder\")),\n        body: RaisedButton(\n          child: Text('Show SnackBar'),\n          onPressed: () {\n            Scaffold.of(context).showSnackBar(SnackBar(\n                content: Text('SnackBar'), duration: Duration(seconds: 5)));\n          },\n        ),\n      ),\n    );\n  }\n}\n")])])]),a("p",[t._v("但是如果这么写，运行后，就会报如下的错误：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('I/flutter ( 8385): ══╡ EXCEPTION CAUGHT BY GESTURE ╞═══════════════════════════════════════════════════════════════════\nI/flutter ( 8385): The following assertion was thrown while handling a gesture:\nI/flutter ( 8385): Scaffold.of() called with a context that does not contain a Scaffold.\nI/flutter ( 8385): No Scaffold ancestor could be found starting from the context that was passed to Scaffold.of(). This\nI/flutter ( 8385): usually happens when the context provided is from the same StatefulWidget as that whose build\nI/flutter ( 8385): function actually creates the Scaffold widget being sought.\nI/flutter ( 8385): There are several ways to avoid this problem. The simplest is to use a Builder to get a context that\nI/flutter ( 8385): is "under" the Scaffold. For an example of this, please see the documentation for Scaffold.of():\nI/flutter ( 8385):   https://docs.flutter.io/flutter/material/Scaffold/of.html\nI/flutter ( 8385): A more efficient solution is to split your build function into several widgets. This introduces a\nI/flutter ( 8385): new context from which you can obtain the Scaffold. In this solution, you would have an outer widget\nI/flutter ( 8385): that creates the Scaffold populated by instances of your new inner widgets, and then in these inner\nI/flutter ( 8385): widgets you would use Scaffold.of().\nI/flutter ( 8385): A less elegant but more expedient solution is assign a GlobalKey to the Scaffold, then use the\nI/flutter ( 8385): key.currentState property to obtain the ScaffoldState rather than using the Scaffold.of() function.\n')])])]),a("p",[t._v("提示 Scaffold.of(context) 里的 context 没有 Scaffold，找不到 Scaffold，所以报错了，为什么会出现这个问题？")]),t._v(" "),a("p",[t._v("首先，看一下 context 是从哪里来的，context 是从 build 函数里传过来的：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Widget build(BuildContext context) {\n    ...\n}\n")])])]),a("p",[t._v("build 函数里传来的 context 是其 父 Widget，也就是 MyApp 的 context，而 MyApp 的 context 里当然没有 Scaffold，所以会报 context 里没有 ScaffoldScaffold 的错误。 那么怎么解决这个问题呢？有两个方法：")]),t._v(" "),a("ol",[a("li",[t._v("使用 Builder Widget")]),t._v(" "),a("li",[t._v("将使用 SnackBar 的 Widget 拆分出来")])]),t._v(" "),a("h2",{attrs:{id:"_1-使用-builder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-builder"}},[t._v("#")]),t._v(" 1. 使用 Builder")]),t._v(" "),a("h4",{attrs:{id:"代码所在位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),a("p",[t._v("flutter_widget_demo/lib/snackbar/SnackBarBuilderWidget.dart")]),t._v(" "),a("h4",{attrs:{id:"builder-的构造函数及参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#builder-的构造函数及参数说明"}},[t._v("#")]),t._v(" Builder 的构造函数及参数说明")]),t._v(" "),a("p",[t._v("Builder 的构造函数为：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class Builder extends StatelessWidget {\n  const Builder({\n    Key key,\n    @required this.builder\n  }) : assert(builder != null),\n       super(key: key);\n    ...\n}\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名字")]),t._v(" "),a("th",[t._v("参数类型")]),t._v(" "),a("th",[t._v("意义")]),t._v(" "),a("th",[t._v("必选 or 可选")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[t._v("Key")]),t._v(" "),a("td",[t._v("Widget 的标识")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("builder")]),t._v(" "),a("td",[t._v("WidgetBuilder")]),t._v(" "),a("td",[t._v("创建 子 Widget")]),t._v(" "),a("td",[t._v("必选")])])])]),t._v(" "),a("p",[t._v("Builder 的必选参数是 WidgetBuilder，接下里介绍一下 WidgetBuilder 的使用。")]),t._v(" "),a("h4",{attrs:{id:"widgetbuilder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widgetbuilder"}},[t._v("#")]),t._v(" WidgetBuilder")]),t._v(" "),a("p",[t._v("WidgetBuilder 是一个函数，定义为：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("typedef WidgetBuilder = Widget Function(BuildContext context);\n")])])]),a("p",[t._v("应该说 WidgetBuilder 函数实现了 Builder Widget 的核心功能，Builder 只是 WidgetBuilder 的封装，在有的地方，其实是直接使用 WidgetBuilder 的。")]),t._v(" "),a("h4",{attrs:{id:"builer-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#builer-的使用"}},[t._v("#")]),t._v(" Builer 的使用")]),t._v(" "),a("p",[t._v("Builder 的使用方法如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("home: Scaffold(\n    appBar: AppBar(title: Text(\"Flutter UI Widget -- SnackBar 及 Builder\")),\n    body: Builder(\n      builder: (context) => RaisedButton(\n        child: Text('Show SnackBar'),\n        onPressed: () {\n          Scaffold.of(context).showSnackBar(SnackBar(\n              content: Text('SnackBar'),\n              duration: Duration(seconds: 5)));\n        },\n      ),\n    ),\n),\n")])])]),a("p",[t._v("Builder 使用 WidgetBuilder 来创建子 Widget。例如上面的例子，使用 Builder，Builder 是一个闭包，将 Scaffold 的 context 传递给 子 Widget，这样 SnackBar 使用的 context 就是 Scaffold 的 context。")]),t._v(" "),a("p",[t._v("完整代码如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import 'package:flutter/cupertino.dart';\nimport 'package:flutter/material.dart';\n\nvoid main() => runApp(SnackBarBuilderWidget());\n\nclass SnackBarBuilderWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: \"Flutter Demo\",\n      theme: ThemeData(\n        primaryColor: Colors.blue,\n      ),\n      home: Scaffold(\n        appBar: AppBar(title: Text(\"Flutter UI Widget -- SnackBar 及 Builder\")),\n        body: Builder(\n          builder: (context) => RaisedButton(\n                child: Text('Show SnackBar'),\n                onPressed: () {\n                  Scaffold.of(context).showSnackBar(SnackBar(\n                      content: Text('SnackBar'),\n                      duration: Duration(seconds: 5)));\n                },\n              ),\n        ),\n      ),\n    );\n  }\n}\n")])])]),a("p",[t._v("运行效果如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a000385b379abf?w=428&h=768&f=png&s=42690",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_2-将使用-snackbar-的-widget-拆分出来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-将使用-snackbar-的-widget-拆分出来"}},[t._v("#")]),t._v(" 2. 将使用 SnackBar 的 Widget 拆分出来")]),t._v(" "),a("h4",{attrs:{id:"代码所在位置-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置-2"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),a("p",[t._v("flutter_widget_demo/lib/snackbar/SnackBarNoBuilerWidget.dart")]),t._v(" "),a("h4",{attrs:{id:"拆分方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拆分方法"}},[t._v("#")]),t._v(" 拆分方法")]),t._v(" "),a("p",[t._v("将使用 SnackBar 的 Widget 拆分出来后，SnackBar 的 Widget 使用的 context 就是 Scaffold 的 context。")]),t._v(" "),a("p",[t._v("代码如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import 'package:flutter/cupertino.dart';\nimport 'package:flutter/material.dart';\n\nvoid main() => runApp(SnackBarNoBuilerWidget());\n\nclass SnackBarNoBuilerWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: \"Flutter Demo\",\n      theme: ThemeData(\n        primaryColor: Colors.blue,\n      ),\n      home: Scaffold(\n          appBar: AppBar(title: Text(\"Flutter UI基础Widget -- SnackBar\")),\n          body: SnackBarWidget()),\n    );\n  }\n}\n\nclass SnackBarWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return RaisedButton(\n      child: Text('Show SnackBar'),\n      onPressed: () {\n        Scaffold.of(context).showSnackBar(SnackBar(\n            content: Text('SnackBar'), duration: Duration(seconds: 5)));\n      },\n    );\n  }\n}\n")])])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("两种方式，使用 Builder Widget，或者将 SnackBar 拆分出来，都可以实现底部消息提示，但是建议使用 Builder。")]),t._v(" "),a("h2",{attrs:{id:"snackbar-的构造函数及参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snackbar-的构造函数及参数说明"}},[t._v("#")]),t._v(" SnackBar 的构造函数及参数说明")]),t._v(" "),a("p",[t._v("SnackBar 的构造函数为：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class SnackBar extends StatelessWidget {\n  const SnackBar({\n    Key key,\n    @required this.content,\n    this.backgroundColor,\n    this.action,\n    this.duration = _kSnackBarDisplayDuration,\n    this.animation,\n  }) : assert(content != null),\n       assert(duration != null),\n       super(key: key);\n    ...\n}\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名字")]),t._v(" "),a("th",[t._v("参数类型")]),t._v(" "),a("th",[t._v("意义")]),t._v(" "),a("th",[t._v("必选 or 可选")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[t._v("Key")]),t._v(" "),a("td",[t._v("Widget 的标识")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("content")]),t._v(" "),a("td",[t._v("Widget")]),t._v(" "),a("td",[t._v("SnackBar 显示的主要内容")]),t._v(" "),a("td",[t._v("必选")])]),t._v(" "),a("tr",[a("td",[t._v("backgroundColor")]),t._v(" "),a("td",[t._v("Color")]),t._v(" "),a("td",[t._v("SnackBar 的背景色")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("action")]),t._v(" "),a("td",[t._v("SnackBarAction")]),t._v(" "),a("td",[t._v("SnackBar 的按钮")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("duration")]),t._v(" "),a("td",[t._v("Duration")]),t._v(" "),a("td",[t._v("SnackBar 显示的时间"),a("code",[t._v("<br>")]),t._v("默认是 4.0s")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("animation")]),t._v(" "),a("td",[t._v("Animation"),a("code",[t._v("<double>")])]),t._v(" "),a("td",[t._v("SnackBar 显示和消失的动画")]),t._v(" "),a("td",[t._v("可选")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);