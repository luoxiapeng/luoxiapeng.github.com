(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{384:function(n,t,e){"use strict";e.r(t);var a=e(1),s=Object(a.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"flutter-isolate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flutter-isolate"}},[n._v("#")]),n._v(" Flutter Isolate")]),n._v(" "),t("p",[n._v("Flutter 的代码都是默认跑在 root Isolate 上的,那么 Flutter 中能不能自己创建一个 Isolate 呢？当然可以！，接下来我们就自己创建一个 Isolate！")]),n._v(" "),t("h1",{attrs:{id:"创建自己的-isolate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建自己的-isolate"}},[n._v("#")]),n._v(" 创建自己的 Isolate")]),n._v(" "),t("h2",{attrs:{id:"dart-isolate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dart-isolate"}},[n._v("#")]),n._v(" dart:isolate")]),n._v(" "),t("p",[n._v("有关 Isolate 的代码，都在"),t("code",[n._v("isolate.dart")]),n._v("文件中，里面有一个生成 Isolate 的方法：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("  external static Future<Isolate> spawn<T>(\n      void entryPoint(T message), T message,\n      {bool paused: false,\n      bool errorsAreFatal,\n      SendPort onExit,\n      SendPort onError});\n")])])]),t("p",[t("code",[n._v("spawn")]),n._v(" 方法，必传参数有两个，函数 entryPoint 和参数 message,其中")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("函数")]),n._v(" "),t("p",[n._v("函数必须是顶级函数或静态方法")])]),n._v(" "),t("li",[t("p",[n._v("参数")]),n._v(" "),t("p",[n._v("参数里必须包含 "),t("code",[n._v("SendPort")])])])]),n._v(" "),t("h2",{attrs:{id:"开始动手写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始动手写"}},[n._v("#")]),n._v(" 开始动手写")]),n._v(" "),t("p",[n._v("创建的步骤，写在代码的注释里")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("import 'dart:async';\nimport 'dart:io';\nimport 'dart:isolate';\n\nimport 'package:flutter/foundation.dart';\nimport 'package:flutter/material.dart';\n\n//一个普普通通的Flutter应用的入口\n//main函数这里有async关键字，是因为创建的isolate是异步的\nvoid main() async{\n  runApp(MyApp());\n\n  //asyncFibonacci函数里会创建一个isolate，并返回运行结果\n  print(await asyncFibonacci(20));\n}\n\n//这里以计算斐波那契数列为例，返回的值是Future，因为是异步的\nFuture<dynamic> asyncFibonacci(int n) async{\n  //首先创建一个ReceivePort，为什么要创建这个？\n  //因为创建isolate所需的参数，必须要有SendPort，SendPort需要ReceivePort来创建\n  final response = new ReceivePort();\n  //开始创建isolate,Isolate.spawn函数是isolate.dart里的代码,_isolate是我们自己实现的函数\n  //_isolate是创建isolate必须要的参数。\n  await Isolate.spawn(_isolate,response.sendPort);\n  //获取sendPort来发送数据\n  final sendPort = await response.first as SendPort;\n  //接收消息的ReceivePort\n  final answer = new ReceivePort();\n  //发送数据\n  sendPort.send([n,answer.sendPort]);\n  //获得数据并返回\n  return answer.first;\n}\n\n//创建isolate必须要的参数\nvoid _isolate(SendPort initialReplyTo){\n  final port = new ReceivePort();\n  //绑定\n  initialReplyTo.send(port.sendPort);\n  //监听\n  port.listen((message){\n    //获取数据并解析\n    final data = message[0] as int;\n    final send = message[1] as SendPort;\n    //返回结果\n    send.send(syncFibonacci(data));\n  });\n}\n\nint syncFibonacci(int n){\n  return n < 2 ? n : syncFibonacci(n-2) + syncFibonacci(n-1);\n}\n")])])]),t("h2",{attrs:{id:"运行结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行结果"}},[n._v("#")]),n._v(" 运行结果")]),n._v(" "),t("p",[n._v("直接运行程序就会在 log 里看到如下的打印：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("flutter: 6765\n")])])]),t("h2",{attrs:{id:"isolate-有什么用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isolate-有什么用"}},[n._v("#")]),n._v(" Isolate 有什么用？")]),n._v(" "),t("p",[n._v("说了这么久，为什么要创建自己的 Isolate？有什么用？")]),n._v(" "),t("p",[n._v("因为 Root Isolate 会负责渲染，还有 UI 交互，如果我们有一个很耗时的操作呢？前面知道 Isolate 里是一个 Event loop（事件循环），如果一个很耗时的 task 一直在运行，那么后面的 UI 操作都被阻塞了，所以如果我们有耗时的操作，就应该放在 Isolate 里！")]),n._v(" "),t("h1",{attrs:{id:"使用-compute-写-isolate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-compute-写-isolate"}},[n._v("#")]),n._v(" 使用 Compute 写 isolate")]),n._v(" "),t("p",[n._v("前面讲了如何创建 Isolate，但那种方式使用起来比较麻烦，属于低级 API，本节讲用高级 API 来创建 Isolate 。")]),n._v(" "),t("h2",{attrs:{id:"使用-isolates-的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-isolates-的方法"}},[n._v("#")]),n._v(" 使用 Isolates 的方法")]),n._v(" "),t("p",[n._v("使用 Isolates 的方法种：")]),n._v(" "),t("ol",[t("li",[n._v("高级 API：Compute 函数 (用起来方便)")]),n._v(" "),t("li",[n._v("低级 API：ReceivePort")])]),n._v(" "),t("h2",{attrs:{id:"compute-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compute-函数"}},[n._v("#")]),n._v(" Compute 函数")]),n._v(" "),t("p",[n._v("Compute 函数对 Isolate 的创建和底层的消息传递进行了封装，使得我们不必关系底层的实现，只需要关注功能实现。")]),n._v(" "),t("p",[n._v("首先我们需要：")]),n._v(" "),t("ol",[t("li",[n._v("一个函数：必须是顶级函数或静态函数")]),n._v(" "),t("li",[n._v("一个参数：这个参数是上面的函数定义入参（函数没有参数的话就没有）")])]),n._v(" "),t("p",[n._v("比如，还是计算斐波那契数列：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("void main() async{\n  //调用compute函数，compute函数的参数就是想要在isolate里运行的函数，和这个函数需要的参数\n  print( await compute(syncFibonacci, 20));\n  runApp(MyApp());\n}\n\nint syncFibonacci(int n){\n  return n < 2 ? n : syncFibonacci(n-2) + syncFibonacci(n-1);\n}\n")])])]),t("p",[n._v("运行后的结果如下：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("flutter: 6765\n")])])]),t("p",[n._v("是不是很简单，接下来看下 "),t("code",[n._v("compute")]),n._v(" 函数的源码，这里的代码有点复杂，会把分析的添加到代码的注释里，首先介绍一个 "),t("code",[n._v("compute")]),n._v(" 函数里用到的函数别名：")]),n._v(" "),t("p",[t("code",[n._v("ComputeCallback<Q, R>")]),n._v(" 定义如下:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// Q R是泛型，ComputeCallback是一个有参数Q，返回值为R的函数\ntypedef ComputeCallback<Q, R> = R Function(Q message);\n")])])]),t("p",[n._v("正式看源码：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("//compute函数 必选参数两个，已经讲过了\nFuture<R> compute<Q, R>(ComputeCallback<Q, R> callback, Q message, { String debugLabel }) async {\n  //如果是在profile模式下,debugLabel为空的话，就取callback.toString()\n  profile(() { debugLabel ??= callback.toString(); });\n  final Flow flow = Flow.begin();\n  Timeline.startSync('$debugLabel: start', flow: flow);\n  final ReceivePort resultPort = ReceivePort();\n  Timeline.finishSync();\n  //创建isolate,这个和前面讲的创建isolate的方法一致\n  //还有一个，这里传过去的参数是用_IsolateConfiguration封装的类\n  final Isolate isolate = await Isolate.spawn<_IsolateConfiguration<Q, R>>(\n    _spawn,\n    _IsolateConfiguration<Q, R>(\n      callback,\n      message,\n      resultPort.sendPort,\n      debugLabel,\n      flow.id,\n    ),\n    errorsAreFatal: true,\n    onExit: resultPort.sendPort,\n  );\n  final R result = await resultPort.first;\n  Timeline.startSync('$debugLabel: end', flow: Flow.end(flow.id));\n  resultPort.close();\n  isolate.kill();\n  Timeline.finishSync();\n  return result;\n}\n\n@immutable\nclass _IsolateConfiguration<Q, R> {\n  const _IsolateConfiguration(\n    this.callback,\n    this.message,\n    this.resultPort,\n    this.debugLabel,\n    this.flowId,\n  );\n  final ComputeCallback<Q, R> callback;\n  final Q message;\n  final SendPort resultPort;\n  final String debugLabel;\n  final int flowId;\n\n  R apply() => callback(message);\n}\n\nvoid _spawn<Q, R>(_IsolateConfiguration<Q, R> configuration) {\n  R result;\n  Timeline.timeSync(\n    '${configuration.debugLabel}',\n    () {\n      result = configuration.apply();\n    },\n    flow: Flow.step(configuration.flowId),\n  );\n  Timeline.timeSync(\n    '${configuration.debugLabel}: returning result',\n    () { configuration.resultPort.send(result); },\n    flow: Flow.step(configuration.flowId),\n  );\n}\n\n")])])]),t("h2",{attrs:{id:"receiveport"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#receiveport"}},[n._v("#")]),n._v(" ReceivePort")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("import 'dart:async';\nimport 'dart:io';\nimport 'dart:isolate';\n\nimport 'package:flutter/foundation.dart';\nimport 'package:flutter/material.dart';\n\n//一个普普通通的Flutter应用的入口\n//main函数这里有async关键字，是因为创建的isolate是异步的\nvoid main() async{\n  runApp(MyApp());\n\n  //asyncFibonacci函数里会创建一个isolate，并返回运行结果\n  print(await asyncFibonacci(20));\n}\n\n//这里以计算斐波那契数列为例，返回的值是Future，因为是异步的\nFuture<dynamic> asyncFibonacci(int n) async{\n  //首先创建一个ReceivePort，为什么要创建这个？\n  //因为创建isolate所需的参数，必须要有SendPort，SendPort需要ReceivePort来创建\n  final response = new ReceivePort();\n  //开始创建isolate,Isolate.spawn函数是isolate.dart里的代码,_isolate是我们自己实现的函数\n  //_isolate是创建isolate必须要的参数。\n  await Isolate.spawn(_isolate,response.sendPort);\n  //获取sendPort来发送数据\n  final sendPort = await response.first as SendPort;\n  //接收消息的ReceivePort\n  final answer = new ReceivePort();\n  //发送数据\n  sendPort.send([n,answer.sendPort]);\n  //获得数据并返回\n  return answer.first;\n}\n\n//创建isolate必须要的参数\nvoid _isolate(SendPort initialReplyTo){\n  final port = new ReceivePort();\n  //绑定\n  initialReplyTo.send(port.sendPort);\n  //监听\n  port.listen((message){\n    //获取数据并解析\n    final data = message[0] as int;\n    final send = message[1] as SendPort;\n    //返回结果\n    send.send(syncFibonacci(data));\n  });\n}\n\nint syncFibonacci(int n){\n  return n < 2 ? n : syncFibonacci(n-2) + syncFibonacci(n-1);\n}\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);