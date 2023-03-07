(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{429:function(v,i,t){"use strict";t.r(i);var a=t(1),e=Object(a.a)({},(function(){var v=this,i=v._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[i("h1",{attrs:{id:"v8-的执行机制"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#v8-的执行机制"}},[v._v("#")]),v._v(" V8 的执行机制")]),v._v(" "),i("p",[v._v("Google V8 引擎是用 C ++编写的开源高性能 JavaScript 和 WebAssembly 引擎，它已被用于 Chrome 和 Node.js 等。可以运行在 Windows 7+，macOS 10.12+和使用 x64，IA-32，ARM 或 MIPS 处理器的 Linux 系统上。V8 最早被开发用以嵌入到 Google 的开源浏览器 Chrome 中，第一个版本随着第一版 Chrome 于 2008 年 9 月 2 日发布。但是 V8 是一个可以独立运行的模块，完全可以嵌入到任何 C ++应用程序中。著名的 Node.js( 一个异步的服务器框架，可以在服务端使用 JavaScript 写出高效的网络服务器 ) 就是基于 V8 引擎的，Couchbase, MongoDB 也使用了 V8 引擎。")]),v._v(" "),i("p",[v._v("和其他 JavaScript 引擎一样，V8 会编译 / 执行 JavaScript 代码，管理内存，负责垃圾回收，与宿主语言的交互等。通过暴露宿主对象 ( 变量，函数等 ) 到 JavaScript，JavaScript 可以访问宿主环境中的对象，并在脚本中完成对宿主对象的操作。")]),v._v(" "),i("p",[v._v("V8 引擎的内部结构\nV8 是一个非常复杂的项目，有超过 100 万行 C++代码。它由许多子模块构成，其中这 4 个模块是最重要的：")]),v._v(" "),i("ul",[i("li",[v._v("Parser：负责将 JavaScript 源码转换为 Abstract Syntax Tree (AST)")]),v._v(" "),i("li",[v._v("Ignition：interpreter，即解释器，负责将 AST 转换为 Bytecode，解释执行 Bytecode；同时收集 TurboFan 优化编译所需的信息，比如函数参数的类型；解释器执行时主要有四个模块，内存中的字节码、寄存器、栈、堆。")]),v._v(" "),i("li",[v._v("通常有两种类型的解释器，\n"),i("ul",[i("li",[v._v("基于栈 (Stack-based)和基于寄存器 (Register-based)，基于栈的解释器使用栈来保存函数参数、中间运算结果、变量等；基于寄存器的虚拟机则支持寄存器的指令操作，使用寄存器来保存参数、中间计算结果。通常，基于栈的虚拟机也定义了少量的寄存器，基于寄存器的虚拟机也有堆栈，其区别体现在它们提供的指令集体系。大多数解释器都是基于栈的，比如 Java 虚拟机，.Net 虚拟机，还有早期的 V8 虚拟机。基于堆栈的虚拟机在处理函数调用、解决递归问题和切换上下文时简单明快。而现在的 V8 虚拟机则采用了基于寄存器的设计，它将一些中间数据保存到寄存器中。")])])]),v._v(" "),i("li",[v._v("TurboFan：compiler，即编译器，利用 Ignitio 所收集的类型信息，将 Bytecode 转换为优化的汇编代码；")]),v._v(" "),i("li",[v._v("Orinoco：garbage collector，垃圾回收模块，负责将程序不再需要的内存空间回收。")])]),v._v(" "),i("p",[v._v(":: 简单地说，Parser 将 JS 源码转换为 AST，→ Ignition 将 AST 转换为 Bytecode，→ 最后 TurboFan 将 Bytecode 转换为经过优化的 Machine Code(实际上是汇编代码)。")]),v._v(" "),i("p",[v._v("Parser，Ignition 以及 TurboFan 可以将 JS 源码编译为汇编代码，其流程图如下：")]),v._v(" "),i("img",{attrs:{src:"https://wiki.webkong.cn/assets/img/v8.870bf509.png"}}),v._v(" "),i("ul",[i("li",[v._v("如果函数没有被调用，则 V8 不会去编译它。")]),v._v(" "),i("li",[v._v("如果函数只被调用 1 次，则 Ignition 将其编译 Bytecode 就直接解释执行了。TurboFan 不会进行优化编译，因为它需要 Ignition 收集函数执行时的类型信息。这就要求函数至少需要执行 1 次，TurboFan 才有可能进行优化编译。")]),v._v(" "),i("li",[v._v("如果函数被调用多次，则它有可能会被识别为热点函数，且 Ignition 收集的类型信息证明可以进行优化编译的话，这时 TurboFan 则会将 Bytecode 编译为 Optimized Machine Code（已优化的机器码），以提高代码的执行性能。")])]),v._v(" "),i("p",[v._v("在运行 C、C++以及 Java 等程序之前，需要进行编译，不能直接执行源码；但对于 JavaScript 来说，我们可以直接执行源码(比如：node test.js)，它是在运行的时候先编译再执行，这种方式被称为即时编译(Just-in-time compilation)，简称为 JIT。因此，V8 也属于 JIT 编译器。")]),v._v(" "),i("p",[v._v("V8 是怎么执行一段 JavaScript 代码的\n在 V8 出现之前，所有的 JavaScript 虚拟机所采用的都是解释执行的方式，这是 JavaScript 执行速度过慢的一个主要原因。而 V8 率先引入了即时编译（JIT）的双轮驱动的设计（混合使用编译器和解释器的技术），这是一种权衡策略，混合编译执行和解释执行这两种手段，给 JavaScript 的执行速度带来了极大的提升。V8 出现之后，各大厂商也都在自己的 JavaScript 虚拟机中引入了 JIT 机制，所以目前市面上 JavaScript 虚拟机都有着类似的架构。另外，V8 也是早于其他虚拟机引入了惰性编译、内联缓存、隐藏类等机制，进一步优化了 JavaScript 代码的编译执行效率。")]),v._v(" "),i("p",[v._v("V8 执行一段 JavaScript 的流程图：\n"),i("img",{attrs:{src:"https://wiki.webkong.cn/assets/img/v8-js.f531d07f.jpeg"}})]),v._v(" "),i("p",[v._v("V8 本质上是一个虚拟机，因为计算机只能识别二进制指令，所以要让计算机执行一段高级语言通常有两种手段：")]),v._v(" "),i("ul",[i("li",[v._v("第一种是将高级代码转换为二进制代码，再让计算机去执行；")]),v._v(" "),i("li",[v._v("另外一种方式是在计算机安装一个解释器，并由解释器来解释执行。")])]),v._v(" "),i("p",[v._v("解释执行和编译执行都有各自的优缺点，解释执行启动速度快，但是执行时速度慢，而编译执行启动速度慢，但是执行速度快。为了充分地利用解释执行和编译执行的优点，规避其缺点，V8 采用了一种权衡策略，在启动过程中采用了解释执行的策略，但是如果某段代码的执行频率超过一个值，那么 V8 就会采用优化编译器将其编译成执行效率更加高效的机器代码。")]),v._v(" "),i("ul",[i("li",[v._v("总结： V8 执行一段 JavaScript 代码所经历的主要流程包括：\n"),i("ul",[i("li",[v._v("初始化基础环境；")]),v._v(" "),i("li",[v._v("解析源码生成 AST 和作用域；")]),v._v(" "),i("li",[v._v("依据 AST 和作用域生成字节码；")]),v._v(" "),i("li",[v._v("解释执行字节码；")]),v._v(" "),i("li",[v._v("监听热点代码；")]),v._v(" "),i("li",[v._v("优化热点代码为二进制的机器代码；")]),v._v(" "),i("li",[v._v("反优化生成的二进制机器代码。")])])])])])}),[],!1,null,null,null);i.default=e.exports}}]);