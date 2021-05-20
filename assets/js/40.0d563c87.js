(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{390:function(t,e,a){"use strict";a.r(e);var n=a(42),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"flutter-基础-widget-对话框"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flutter-基础-widget-对话框"}},[t._v("#")]),t._v(" Flutter 基础 Widget —— 对话框")]),t._v(" "),a("p",[t._v("本节讲 Flutter 对话框的使用。")]),t._v(" "),a("p",[t._v("对话框在 Flutter 里也是 Widget，但是使用的方式稍有不同，需要使用显示对话框的方法去显示，这样的方法有两个：")]),t._v(" "),a("ol",[a("li",[t._v("showAboutDialog()")]),t._v(" "),a("li",[t._v("showDialog()")])]),t._v(" "),a("p",[t._v("这两个方法的使用还有特殊的要求：")]),t._v(" "),a("div",{staticClass:"language-! extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("showAboutDialog() 和 showDialog() 只能在 MaterialApp 的 子Widget 里使用，因为这两个方法需要使用 MaterialApp 的 context，所以解决问题的办法就和前一节讲 SnackBar 和 Builder 的使用 一样，要么使用 Builder，要么将 Widget 单独拆分出来。\n")])])]),a("p",[t._v("本节就使用 Builder 和 showAboutDialog()、showDialog() 来弹对话框。")]),t._v(" "),a("h1",{attrs:{id:"showaboutdialog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#showaboutdialog"}},[t._v("#")]),t._v(" showAboutDialog()")]),t._v(" "),a("p",[t._v("showAboutDialog() 是用来弹关于对话框的。")]),t._v(" "),a("h2",{attrs:{id:"代码所在位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),a("p",[t._v("flutter_widget_demo/lib/dialog/ShowAboutDialogWidget.dart")]),t._v(" "),a("h2",{attrs:{id:"showaboutdialog-的快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#showaboutdialog-的快速上手"}},[t._v("#")]),t._v(" showAboutDialog() 的快速上手")]),t._v(" "),a("p",[t._v("showAboutDialog() 需要使用 Builer，使用方法如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Builder(\n    builder: (context) => RaisedButton(\n        onPressed: () {\n            showAboutDialog(\n                context: context,\n                applicationName: 'lutter UI Widget -- 对话框',\n                applicationVersion: '1.0.0');\n            },\n        child: Text('RaisedButton'))\n    )\n")])])]),a("p",[t._v("showAboutDialog() 使用在一个页面的完整 Demo 如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import 'package:flutter/material.dart';\n\nvoid main() => runApp(ShowAboutDialogWidget());\n\nclass ShowAboutDialogWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: \"Flutter Demo\",\n      theme: ThemeData(\n        primaryColor: Colors.blue,\n      ),\n      home: Scaffold(\n          appBar: AppBar(title: Text(\"Flutter UI Widget -- 对话框\")),\n          body: Builder(\n              builder: (context) => RaisedButton(\n                  onPressed: () {\n                    showAboutDialog(\n                        context: context,\n                        applicationName: 'Flutter UI Widget -- 对话框',\n                        applicationVersion: '1.0.0');\n                  },\n                  child: Text('RaisedButton')))),\n    );\n  }\n}\n")])])]),a("p",[t._v("运行效果如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a000734e515123?w=413&h=768&f=jpeg&s=32544",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"showaboutdialog-方法的定义及参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#showaboutdialog-方法的定义及参数说明"}},[t._v("#")]),t._v(" showAboutDialog() 方法的定义及参数说明")]),t._v(" "),a("p",[t._v("先看 showAboutDialog() 方法的定义：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("void showAboutDialog({\n  @required BuildContext context,\n  String applicationName,\n  String applicationVersion,\n  Widget applicationIcon,\n  String applicationLegalese,\n  List<Widget> children,\n}) {\n    ...\n}\n")])])]),a("p",[t._v("showAboutDialog() 方法的参数:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名字")]),t._v(" "),a("th",[t._v("参数类型")]),t._v(" "),a("th",[t._v("意义")]),t._v(" "),a("th",[t._v("必选 or 可选")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("context")]),t._v(" "),a("td",[t._v("BuildContext")]),t._v(" "),a("td",[t._v("应用上下文")]),t._v(" "),a("td",[t._v("必选")])]),t._v(" "),a("tr",[a("td",[t._v("applicationName")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("应用的名字")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("applicationVersion")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("应用的版本")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("applicationIcon")]),t._v(" "),a("td",[t._v("Widget")]),t._v(" "),a("td",[t._v("应用的 Icon")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("applicationLegalese")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("应用的法律信息")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("children")]),t._v(" "),a("td",[t._v("List< Widget>")]),t._v(" "),a("td",[t._v("添加在后面的 Widget")]),t._v(" "),a("td",[t._v("可选")])])])]),t._v(" "),a("h1",{attrs:{id:"showdialog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#showdialog"}},[t._v("#")]),t._v(" showDialog()")]),t._v(" "),a("p",[t._v("showDialog() 可以弹很多不同种类的 Dialog。")]),t._v(" "),a("h2",{attrs:{id:"showdialog-的方法定义及参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#showdialog-的方法定义及参数说明"}},[t._v("#")]),t._v(" showDialog() 的方法定义及参数说明")]),t._v(" "),a("p",[t._v("showDialog() 的方法定义为:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Future<T> showDialog<T>({\n  @required BuildContext context,\n  bool barrierDismissible = true,\n  @Deprecated(\n    'Instead of using the \"child\" argument, return the child from a closure '\n    'provided to the \"builder\" argument. This will ensure that the BuildContext '\n    'is appropriate for widgets built in the dialog.'\n  ) Widget child,\n  WidgetBuilder builder,\n}) {\n    ...\n}\n")])])]),a("p",[t._v("showDialog() 方法的参数:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名字")]),t._v(" "),a("th",[t._v("参数类型")]),t._v(" "),a("th",[t._v("意义")]),t._v(" "),a("th",[t._v("必选 or 可选")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("context")]),t._v(" "),a("td",[t._v("BuildContext")]),t._v(" "),a("td",[t._v("应用上下文")]),t._v(" "),a("td",[t._v("必选")])]),t._v(" "),a("tr",[a("td",[t._v("barrierDismissible")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("点击背景是否可以关闭 dialog"),a("br"),t._v("默认为 true，点击背景可以关闭 dialog")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("child")]),t._v(" "),a("td",[t._v("Widget")]),t._v(" "),a("td",[t._v("要显示的 Widget，这个已经废弃了，请使用 builder")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("builder")]),t._v(" "),a("td",[t._v("WidgetBuilder")]),t._v(" "),a("td",[t._v("创建要显示的 Widget")]),t._v(" "),a("td",[t._v("可选")])])])]),t._v(" "),a("h2",{attrs:{id:"showdialog-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#showdialog-的使用"}},[t._v("#")]),t._v(" showDialog() 的使用")]),t._v(" "),a("p",[t._v("showDialog() 的使用方法为:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Builder(\n    builder: (context) {\n        return RaisedButton(\n            onPressed: () {\n                showDialog(context: context,builder: (context) => xxxDialog(...));\n            },\n            child: Text('showDialog'),\n        );\n    },\n)\n")])])]),a("p",[t._v("Builder 里创建 RaisedButton，在 RaisedButton 里在调用 showDialog() 方法。")]),t._v(" "),a("p",[t._v("这里的 "),a("code",[t._v("xxxDialog")]),t._v(" 就是 Flutter 里的对话框 Widget，在 Flutter 中，对话框 Widget 有 3 个：")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://docs.flutter.io/flutter/material/SimpleDialog-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SimpleDialog"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.flutter.io/flutter/material/AlertDialog-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AlertDialog"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.flutter.io/flutter/cupertino/CupertinoAlertDialog-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CupertinoAlertDialog"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("接下来会依次讲每一个 Widget 的使用。")]),t._v(" "),a("h2",{attrs:{id:"_1-simpledialog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-simpledialog"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://docs.flutter.io/flutter/material/SimpleDialog-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("1. SimpleDialog"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("SimpleDialog 是有一个标题和多个选项的简单对话框。")]),t._v(" "),a("h4",{attrs:{id:"代码所在位置-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置-2"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),a("p",[t._v("flutter_widget_demo/lib/dialog/ShowSimpleDialogWidget.dart")]),t._v(" "),a("h4",{attrs:{id:"simpledialog-的快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simpledialog-的快速上手"}},[t._v("#")]),t._v(" SimpleDialog 的快速上手")]),t._v(" "),a("p",[t._v("实现一个 SimpleDialog 的代码为：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SimpleDialog(\n    title: Text('SimpleDialog Demo'),\n    children: <Widget>[\n      SimpleDialogOption(\n        child: Text('OK'),\n            onPressed: () {\n              Navigator.of(context).pop();\n            },\n       ),\n      SimpleDialogOption(\n        child: Text('CANCEL'),\n            onPressed: () {\n              Navigator.of(context).pop();\n            },\n          )\n    ],\n  )\n")])])]),a("p",[t._v("SimpleDialog 有一个 Text 参数，children 是两个 SimpleDialogOption，SimpleDialogOption 是按钮的描述。")]),t._v(" "),a("p",[t._v("把 SimpleDialog 实现在一个页面的完整 Demo 如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import 'package:flutter/material.dart';\n\nmain() => runApp(new ShowSimpleDialogWidget());\n\nclass ShowSimpleDialogWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return new MaterialApp(\n      title: 'Test',\n      home: new Scaffold(\n          appBar: new AppBar(title: new Text('Test')),\n          body: Builder(\n            builder: (context) {\n              return RaisedButton(\n                onPressed: () {\n                  showDialog(\n                      context: context,\n                      builder: (context) => SimpleDialog(\n                            title: Text('SimpleDialog Demo'),\n                            children: <Widget>[\n                              SimpleDialogOption(\n                                child: Text('OK'),\n                                onPressed: () {\n                                  Navigator.of(context).pop();\n                                },\n                              ),\n                              SimpleDialogOption(\n                                child: Text('CANCEL'),\n                                onPressed: () {\n                                  Navigator.of(context).pop();\n                                },\n                              )\n                            ],\n                          ));\n                },\n                child: Text('showDialog'),\n              );\n            },\n          )),\n    );\n  }\n}\n")])])]),a("ul",[a("li",[a("p",[t._v("SimpleDialog 的关闭")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("Navigator.of(context).pop()")]),t._v(" 来关闭 SimpleDialog。")]),t._v(" "),a("div",{staticClass:"language-! extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SimpleDialog 的 SimpleDialogOption 的 onPressed() 事件，必须要写 Navigator.of(context).pop() ，不然弹窗不会关闭。\n")])])])])]),t._v(" "),a("p",[t._v("运行效果为:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a00099b746c798?w=428&h=768&f=png&s=41969",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"simpledialog-的构造函数及参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simpledialog-的构造函数及参数说明"}},[t._v("#")]),t._v(" SimpleDialog 的构造函数及参数说明")]),t._v(" "),a("p",[t._v("SimpleDialog 的构造函数为：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class SimpleDialog extends StatelessWidget {\n  const SimpleDialog({\n    Key key,\n    this.title,\n    this.titlePadding = const EdgeInsets.fromLTRB(24.0, 24.0, 24.0, 0.0),\n    this.children,\n    this.contentPadding = const EdgeInsets.fromLTRB(0.0, 12.0, 0.0, 16.0),\n    this.backgroundColor,\n    this.elevation,\n    this.semanticLabel,\n    this.shape,\n  }) : assert(titlePadding != null),\n       assert(contentPadding != null),\n       super(key: key);\n    ...\n}\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名字")]),t._v(" "),a("th",[t._v("参数类型")]),t._v(" "),a("th",[t._v("意义")]),t._v(" "),a("th",[t._v("必选 or 可选")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[t._v("Key")]),t._v(" "),a("td",[t._v("Widget 的标识")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("Widget")]),t._v(" "),a("td",[t._v("对话框的标题"),a("br"),t._v("通常是 Text")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("titlePadding")]),t._v(" "),a("td",[t._v("EdgeInsetsGeometry")]),t._v(" "),a("td",[t._v("标题的边距")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("children")]),t._v(" "),a("td",[t._v("List< Widget>")]),t._v(" "),a("td",[t._v("对话框的按钮，显示在对话框标题的下面"),a("br"),t._v("通常是一组 SimpleDialogOption")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("contentPadding")]),t._v(" "),a("td",[t._v("EdgeInsetsGeometry")]),t._v(" "),a("td",[t._v("内容的边距")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("backgroundColor")]),t._v(" "),a("td",[t._v("Color")]),t._v(" "),a("td",[t._v("对话框的背景")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("elevation")]),t._v(" "),a("td",[t._v("double")]),t._v(" "),a("td",[t._v("Button 相对于其父级放置的 z 坐标，这可以控制 Button 下的阴影大小"),a("br"),t._v("该值必须>=0")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("semanticLabel")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("给文本加上一个语义标签，用于盲人辅助模式下")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("shape")]),t._v(" "),a("td",[t._v("ShapeBorder")]),t._v(" "),a("td",[t._v("Widget 的形状")]),t._v(" "),a("td",[t._v("可选")])])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("SimpleDialogOption 的构造函数及参数说明")]),t._v(" "),a("p",[t._v("SimpleDialogOption 是 SimapleDialog 的选项按钮。\n先看 SimpleDialogOption 的构造函数：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class SimpleDialogOption extends StatelessWidget {\n  const SimpleDialogOption({\n    Key key,\n    this.onPressed,\n    this.child,\n  }) : super(key: key);\n  ...\n}\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名字")]),t._v(" "),a("th",[t._v("参数类型")]),t._v(" "),a("th",[t._v("意义")]),t._v(" "),a("th",[t._v("必选 or 可选")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[t._v("Key")]),t._v(" "),a("td",[t._v("Widget 的标识")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("onPressed")]),t._v(" "),a("td",[t._v("VoidCallback")]),t._v(" "),a("td",[t._v("点击事件，当手指松开时才触发")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("child")]),t._v(" "),a("td",[t._v("Widget")]),t._v(" "),a("td",[t._v("显示的内容"),a("br"),t._v("一般是 Text")]),t._v(" "),a("td",[t._v("可选")])])])])]),t._v(" "),a("li",[a("p",[t._v("SimpleDialogOption 的使用")]),t._v(" "),a("p",[t._v("SimpleDialogOption 的使用的方法如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Builder(\n    builder: (context) {\n        return RaisedButton(\n            onPressed: () {\n                showDialog(\n                    context: context,\n                    builder: (context) => SimpleDialog(\n                        title: Text('SimpleDialog Demo'),\n                        children: <Widget>[\n                          SimpleDialogOption(\n                            child: Text('OK'),\n                            onPressed: () {},\n                          ),\n                          SimpleDialogOption(\n                            child: Text('CANCEL'),\n                            onPressed: () {},\n                          )\n                          ],\n                    ));\n            },\n            child: Text('showDialog'),\n        );\n    },\n)\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_2-alertdialog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-alertdialog"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://docs.flutter.io/flutter/material/AlertDialog-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("2. AlertDialog"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("AlertDialog 是警报对话框，具有标题和选型，可以让用户选择。")]),t._v(" "),a("h4",{attrs:{id:"代码所在位置-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置-3"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),a("p",[t._v("flutter_widget_demo/lib/dialog/ShowAlertDialogWidget.dart")]),t._v(" "),a("h4",{attrs:{id:"alertdialog-的快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alertdialog-的快速上手"}},[t._v("#")]),t._v(" AlertDialog 的快速上手")]),t._v(" "),a("p",[t._v("AlertDialog 使用的代码为：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("AlertDialog(\n    title: Text('AlertDialog'),\n    content: SingleChildScrollView(\n      child: ListBody(\n        children: <Widget>[\n          Text('This is an alert dialog'),\n          Text('add two options.'),\n        ],\n      ),\n    ),\n    actions: <Widget>[\n      FlatButton(\n        child: Text('Ok'),\n        onPressed: () {\n          Navigator.of(context).pop();\n        },\n      ),\n      FlatButton(\n        child: Text('Cancel'),\n        onPressed: () {\n          Navigator.of(context).pop();\n        },\n      )\n    ],\n  )\n")])])]),a("p",[t._v("AlertDialog 有一个 title 参数是标题，content 参数是内容，actions 是按钮数组。")]),t._v(" "),a("p",[t._v("AlertDialog 使用在一个页面的完整 Demo 如下:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import 'package:flutter/material.dart';\n\nmain() => runApp(new ShowAlertDialogWidget());\n\nclass ShowAlertDialogWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return new MaterialApp(\n      title: 'Test',\n      home: new Scaffold(\n          appBar: new AppBar(title: new Text('Flutter UI Widget -- 对话框')),\n          body: Builder(\n            builder: (context) {\n              return RaisedButton(\n                onPressed: () {\n                  showDialog(\n                      context: context,\n                      builder: (context) => AlertDialog(\n                            title: Text('AlertDialog'),\n                            content: SingleChildScrollView(\n                              child: ListBody(\n                                children: <Widget>[\n                                  Text('This is an alert dialog'),\n                                  Text('add two options.'),\n                                ],\n                              ),\n                            ),\n                            actions: <Widget>[\n                              FlatButton(\n                                child: Text('Ok'),\n                                onPressed: () {\n                                  Navigator.of(context).pop();\n                                },\n                              ),\n                              FlatButton(\n                                child: Text('Cancel'),\n                                onPressed: () {\n                                  Navigator.of(context).pop();\n                                },\n                              )\n                            ],\n                          ));\n                },\n                child: Text('showDialog'),\n              );\n            },\n          )),\n    );\n  }\n}\n\n")])])]),a("ul",[a("li",[a("p",[t._v("AlertDialog 的关闭")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("使用 `Navigator.of(context).pop()` 来关闭 AlertDialog。\n```!\nAlertDialog 的 actions 的 onPressed() 事件，必须要写 Navigator.of(context).pop() ，不然弹窗不会关闭。\n```\n")])])]),a("p",[t._v("运行效果如下：")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a0009e3230660c?w=428&h=768&f=png&s=45354",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"alertdialog-的构造函数及参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alertdialog-的构造函数及参数说明"}},[t._v("#")]),t._v(" AlertDialog 的构造函数及参数说明")]),t._v(" "),a("p",[t._v("AlertDialog 的构造函数为：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class AlertDialog extends StatelessWidget {\n  const AlertDialog({\n    Key key,\n    this.title,\n    this.titlePadding,\n    this.titleTextStyle,\n    this.content,\n    this.contentPadding = const EdgeInsets.fromLTRB(24.0, 20.0, 24.0, 24.0),\n    this.contentTextStyle,\n    this.actions,\n    this.backgroundColor,\n    this.elevation,\n    this.semanticLabel,\n    this.shape,\n  }) : assert(contentPadding != null),\n       super(key: key);\n    ...\n}\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名字")]),t._v(" "),a("th",[t._v("参数类型")]),t._v(" "),a("th",[t._v("意义")]),t._v(" "),a("th",[t._v("必选 or 可选")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[t._v("Key")]),t._v(" "),a("td",[t._v("Widget 的标识")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("Widget")]),t._v(" "),a("td",[t._v("对话框的标题"),a("br"),t._v("通常是 Text")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("titlePadding")]),t._v(" "),a("td",[t._v("EdgeInsetsGeometry")]),t._v(" "),a("td",[t._v("标题的边距")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("titleTextStyle")]),t._v(" "),a("td",[t._v("TextStyle")]),t._v(" "),a("td",[t._v("标题的文本格式")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("content")]),t._v(" "),a("td",[t._v("Widget")]),t._v(" "),a("td",[t._v("对话框的内容")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("contentPadding")]),t._v(" "),a("td",[t._v("EdgeInsetsGeometry")]),t._v(" "),a("td",[t._v("内容的边距")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("contentTextStyle")]),t._v(" "),a("td",[t._v("TextStyle")]),t._v(" "),a("td",[t._v("内容的文本格式")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("actions")]),t._v(" "),a("td",[t._v("List< Widget>")]),t._v(" "),a("td",[t._v("对话框的选型按钮"),a("br"),t._v("通常是一组 FlatButton")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("backgroundColor")]),t._v(" "),a("td",[t._v("Color")]),t._v(" "),a("td",[t._v("对话框的背景")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("elevation")]),t._v(" "),a("td",[t._v("double")]),t._v(" "),a("td",[t._v("Button 相对于其父级放置的 z 坐标，这可以控制 Button 下的阴影大小"),a("br"),t._v("该值必须>=0")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("semanticLabel")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("给文本加上一个语义标签，用于盲人辅助模式下")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("shape")]),t._v(" "),a("td",[t._v("ShapeBorder")]),t._v(" "),a("td",[t._v("Widget 的形状")]),t._v(" "),a("td",[t._v("可选")])])])]),t._v(" "),a("h2",{attrs:{id:"_3-cupertinoalertdialog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-cupertinoalertdialog"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://docs.flutter.io/flutter/cupertino/CupertinoAlertDialog-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.CupertinoAlertDialog"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("CupertinoAlertDialog 是 iOS 风格的 AlertDialog。")]),t._v(" "),a("h4",{attrs:{id:"代码所在位置-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置-4"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),a("p",[t._v("flutter_widget_demo/lib/dialog/ShowCupertinoAlertDialogWidget.dart")]),t._v(" "),a("h4",{attrs:{id:"cupertinoalertdialog-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cupertinoalertdialog-的使用"}},[t._v("#")]),t._v(" CupertinoAlertDialog 的使用")]),t._v(" "),a("p",[t._v("CupertinoAlertDialog 使用的代码为：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CupertinoAlertDialog(\n    title: Text('CupertinoAlertDialog'),\n    content: Text('This is a CupertinoAlertDialog'),\n    actions: <Widget>[\n      CupertinoDialogAction(\n        child: Text('Ok'),\n        onPressed: () {\n          Navigator.of(context).pop();\n        },\n      ),\n      CupertinoDialogAction(\n        child: Text('Cancel'),\n        onPressed: () {\n          Navigator.of(context).pop();\n        },\n      )\n    ],\n  )\n")])])]),a("p",[t._v("CupertinoAlertDialog 使用的完整 Demo 为：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import 'package:flutter/cupertino.dart';\nimport 'package:flutter/material.dart';\n\nmain() => runApp(new ShowCupertinoAlertDialogWidget());\n\nclass ShowCupertinoAlertDialogWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return new MaterialApp(\n      title: 'Test',\n      home: new Scaffold(\n          appBar: new AppBar(title: new Text('Flutter UI Widget -- 对话框')),\n          body: Builder(\n            builder: (context) {\n              return RaisedButton(\n                onPressed: () {\n                  showDialog(\n                      context: context,\n                      builder: (context) => CupertinoAlertDialog(\n                            title: Text('CupertinoAlertDialog'),\n                            content: Text('This is a CupertinoAlertDialog'),\n                            actions: <Widget>[\n                              CupertinoDialogAction(\n                                child: Text('Ok'),\n                                onPressed: () {\n                                  Navigator.of(context).pop();\n                                },\n                              ),\n                              CupertinoDialogAction(\n                                child: Text('Cancel'),\n                                onPressed: () {\n                                  Navigator.of(context).pop();\n                                },\n                              )\n                            ],\n                          ));\n                },\n                child: Text('showDialog'),\n              );\n            },\n          )),\n    );\n  }\n}\n")])])]),a("ul",[a("li",[a("p",[t._v("CupertinoAlertDialog 的关闭")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("使用 `Navigator.of(context).pop()` 来关闭 CupertinoAlertDialog。\n```!\nCupertinoAlertDialog 的 CupertinoDialogAction 的 onPressed() 事件，必须要写 Navigator.of(context).pop() ，不然弹窗不会关闭。\n```\n")])])]),a("p",[t._v("运行效果为：")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a000a34c7ed268?w=428&h=768&f=png&s=45473",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"cupertinoalertdialog-的构造函数及参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cupertinoalertdialog-的构造函数及参数说明"}},[t._v("#")]),t._v(" CupertinoAlertDialog 的构造函数及参数说明")]),t._v(" "),a("p",[t._v("CupertinoAlertDialog 的构造函数为:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class CupertinoAlertDialog extends StatelessWidget {\n  const CupertinoAlertDialog({\n    Key key,\n    this.title,\n    this.content,\n    this.actions = const <Widget>[],\n    this.scrollController,\n    this.actionScrollController,\n  }) : assert(actions != null),\n       super(key: key);\n    ...\n}\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名字")]),t._v(" "),a("th",[t._v("参数类型")]),t._v(" "),a("th",[t._v("意义")]),t._v(" "),a("th",[t._v("必选 or 可选")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td",[t._v("Key")]),t._v(" "),a("td",[t._v("Widget 的标识")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("Widget")]),t._v(" "),a("td",[t._v("对话框的标题"),a("br"),t._v("通常是 Text")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("content")]),t._v(" "),a("td",[t._v("Widget")]),t._v(" "),a("td",[t._v("对话框的内容"),a("br"),t._v("通常是 Text")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("actions")]),t._v(" "),a("td",[t._v("List< Widget>")]),t._v(" "),a("td",[t._v("对话框的选型按钮"),a("br"),t._v("通常是一组 CupertinoDialogAction")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("scrollController")]),t._v(" "),a("td",[t._v("ScrollController")]),t._v(" "),a("td",[t._v("可用于控制对话框中内容的滚动控制器")]),t._v(" "),a("td",[t._v("可选")])]),t._v(" "),a("tr",[a("td",[t._v("actionScrollController")]),t._v(" "),a("td",[t._v("ScrollController")]),t._v(" "),a("td",[t._v("可用于控制对话框中 actions 的滚动控制器")]),t._v(" "),a("td",[t._v("可选")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);