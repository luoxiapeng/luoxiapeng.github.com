(window.webpackJsonp=window.webpackJsonp||[]).push([[391],{678:function(a,s,v){"use strict";v.r(s);var t=v(1),_=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"面试官-说说你对-linux-用户管理的理解-相关的命令有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说你对-linux-用户管理的理解-相关的命令有哪些"}},[a._v("#")]),a._v(" 面试官：说说你对 linux 用户管理的理解？相关的命令有哪些？")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/8d8d9d70-0417-11ec-8e64-91fdec0f05a1.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"一、是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[a._v("#")]),a._v(" 一、是什么")]),a._v(" "),s("p",[a._v("Linux是一个多用户的系统，允许使用者在系统上通过规划不同类型、不同层级的用户，并公平地分配系统资源与工作环境")]),a._v(" "),s("p",[a._v("而与 "),s("code",[a._v("Windows")]),a._v(" 系统最大的不同， "),s("code",[a._v("Linux")]),a._v(" 允许不同的用户同时登录主机，同时使用主机的资源")]),a._v(" "),s("p",[a._v("既然是多用户的系统，那么最常见的问题就是权限，不同的用户对于不同的文件都应该有各自的权限")]),a._v(" "),s("p",[a._v("例如，小 A 希望个人文件不被其他用户读取，而如果不对文件进行权限设置，共享了主机资源的小 B 也可以读取小 A 的个人文件，这是不合理的")]),a._v(" "),s("p",[a._v("这里面涉及到用户与用户组的概念")]),a._v(" "),s("h2",{attrs:{id:"二、用户与用户组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、用户与用户组"}},[a._v("#")]),a._v(" 二、用户与用户组")]),a._v(" "),s("p",[s("code",[a._v("Linux")]),a._v("以 “用户与用户组” 的概念，建立用户与文件权限之间的联系，保证系统能够充分考虑每个用户的隐私保护，很大程度上保障了 "),s("code",[a._v("Linux")]),a._v(" 作为多用户系统的可行性")]),a._v(" "),s("p",[a._v("从文件权限的角度出发，“用户与用户组” 引申为三个具体的对象：")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("文件所有者")])]),a._v(" "),s("li",[s("strong",[a._v("用户组成员")])]),a._v(" "),s("li",[s("strong",[a._v("其他人")])])]),a._v(" "),s("p",[a._v("每一个对象对某一个文件的持有权限是不同的")]),a._v(" "),s("h3",{attrs:{id:"文件所有者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件所有者"}},[a._v("#")]),a._v(" 文件所有者")]),a._v(" "),s("p",[a._v("当一个用户创建了一个文件，这个用户就是这个文件的文件所有者。文件所有者对文件拥有最高权限，同时排他性地拥有该文件")]),a._v(" "),s("p",[a._v("除非文件所有者开放权限，否则其他人无法对文件执行查看、修改等操作")]),a._v(" "),s("h3",{attrs:{id:"用户组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户组"}},[a._v("#")]),a._v(" 用户组")]),a._v(" "),s("p",[a._v("将 “其他用户” 区分为用户组成员和其他人后，若文件所有者希望对部分用户开放权限，而对其他人继续保持私有，则只需要将这部分用户与文件所有者划入一个用户组")]),a._v(" "),s("p",[a._v("这样，这部分用户就成了与文件所有者同组的用户组成员。用户可以对用户组成员开放文件权限，用户组成员则具备了查看、修改文件的权限，而对其他无关用户保持私有")]),a._v(" "),s("p",[a._v("例如，团队成员之间保持文件资源共享，但对非团队成员保持私有，这就需要将文件所有者与团队成员用户划分为同一个用户组，再对用户组成员开放权限即可")]),a._v(" "),s("h3",{attrs:{id:"其他人"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他人"}},[a._v("#")]),a._v(" 其他人")]),a._v(" "),s("p",[a._v("既与文件所有者没有任何联系的其他用户")]),a._v(" "),s("h3",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[a._v("#")]),a._v(" 小结")]),a._v(" "),s("p",[a._v("户和用户组的对应关系是：一对一、多对一、一对多或多对多：")]),a._v(" "),s("ul",[s("li",[a._v("一对一：某个用户可以是某个组的唯一成员")]),a._v(" "),s("li",[a._v("多对一：多个用户可以是某个唯一的组的成员，不归属其它用户组")]),a._v(" "),s("li",[a._v("一对多：某个用户可以是多个用户组的成员")]),a._v(" "),s("li",[a._v("多对多：多个用户对应多个用户组，并且几个用户可以是归属相同的组")])]),a._v(" "),s("h3",{attrs:{id:"拓展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拓展"}},[a._v("#")]),a._v(" 拓展")]),a._v(" "),s("p",[a._v("当我们使用"),s("code",[a._v("ls -l")]),a._v("的时候，会列出当前目录的文件信息，如下：")]),a._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("drwxr-xr-x   3  osmond   osmond    4096  05-16 13:32   nobp\n")])])]),s("ul",[s("li",[a._v("d：文件类型")]),a._v(" "),s("li",[a._v("rwxr-xr-x：文件权限")]),a._v(" "),s("li",[a._v("3 硬链接数或目录包含的文件数")]),a._v(" "),s("li",[a._v("osmond：文件所有者")]),a._v(" "),s("li",[a._v("4096：文件长度")]),a._v(" "),s("li",[a._v("05-16 13:32：文件上次修改的事件和日期")]),a._v(" "),s("li",[a._v("nobp：文件名")])]),a._v(" "),s("p",[a._v("下面主要看看文件权限分析，实际上是由9个字符组成，每3个一组：")]),a._v(" "),s("ul",[s("li",[a._v("第一组控制文件"),s("strong",[a._v("所有者")]),a._v("的访问权限")]),a._v(" "),s("li",[a._v("第二组控制所有者"),s("strong",[a._v("所在用户组")]),a._v("的其他成员的访问权限")]),a._v(" "),s("li",[a._v("第三组控制"),s("strong",[a._v("系统其他用户")]),a._v("的访问权限")])]),a._v(" "),s("p",[s("code",[a._v("-")]),a._v("代表当前没有，"),s("code",[a._v("rwx")]),a._v("对应代表的意思如下：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/9ac2cf60-0417-11ec-8e64-91fdec0f05a1.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"三、用户操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、用户操作"}},[a._v("#")]),a._v(" 三、用户操作")]),a._v(" "),s("p",[a._v("用户相关的操作有如下：")]),a._v(" "),s("h3",{attrs:{id:"新增用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新增用户"}},[a._v("#")]),a._v(" 新增用户")]),a._v(" "),s("p",[s("code",[a._v("useradd")]),a._v(" 可以用来创建新用户，简要语法为：")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("useradd [options] [username]\n")])])]),s("p",[a._v("例如：")]),a._v(" "),s("p",[a._v("添加一个一般用户")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# useradd kk //添加用户kk\n")])])]),s("p",[a._v("为添加的用户指定相应的用户组")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# useradd -g root kk //添加用户kk，并指定用户所在的组为root用户组\n")])])]),s("p",[a._v("创建一个系统用户")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# useradd -r kk //创建一个系统用户kk\n")])])]),s("p",[a._v("为新添加的用户指定/home目录")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# useradd-d /home/myf kk //新添加用户kk，其home目录为/home/myf\n//当用户名kk登录主机时，系统进入的默认目录为/home/myf\n")])])]),s("h2",{attrs:{id:"设置密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置密码"}},[a._v("#")]),a._v(" 设置密码")]),a._v(" "),s("p",[a._v("创建的用户还没有设置登录密码，需要利用"),s("code",[a._v("passwd")]),a._v("进行密码设置")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("asswd [options] [username]\n")])])]),s("p",[s("code",[a._v("option")]),a._v(" 参数有如下：")]),a._v(" "),s("ul",[s("li",[a._v("-d 删除密码")]),a._v(" "),s("li",[a._v("-f 强迫用户下次登录时必须修改口令")]),a._v(" "),s("li",[a._v("-w 口令要到期提前警告的天数")]),a._v(" "),s("li",[a._v("-k 更新只能发送在过期之后")]),a._v(" "),s("li",[a._v("-l 停止账号使用")]),a._v(" "),s("li",[a._v("-S 显示密码信息")]),a._v(" "),s("li",[a._v("-u 启用已被停止的账户")]),a._v(" "),s("li",[a._v("-x 指定口令最长存活期")]),a._v(" "),s("li",[a._v("-g 修改群组密码")]),a._v(" "),s("li",[a._v("指定口令最短存活期")]),a._v(" "),s("li",[a._v("-i 口令过期后多少天停用账户")])]),a._v(" "),s("p",[a._v("例如，修改用户密码")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# passwd runoob  //设置runoob用户的密码\nEnter new UNIX password:  //输入新密码，输入的密码无回显\nRetype new UNIX password:  //确认密码\npasswd: password updated successfully\n# \n")])])]),s("p",[a._v("显示账号密码信息")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# passwd -S runoob\nrunoob P 05/13/2010 0 99999 7 -1\n")])])]),s("p",[a._v("删除用户密码")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# passwd -d lx138 \npasswd: password expiry information changed.\n")])])]),s("h3",{attrs:{id:"修改用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改用户"}},[a._v("#")]),a._v(" 修改用户")]),a._v(" "),s("p",[s("code",[a._v("chage")]),a._v(" 命令用来修改与用户密码相关的过期信息，如密码失效日、密码最短保留天数、失效前警告天数等")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("chage [option] [username]\n")])])]),s("p",[a._v("常见的参数有：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("-d：指定密码最后修改日期")])]),a._v(" "),s("li",[s("p",[a._v("-E：密码到期的日期")])]),a._v(" "),s("li",[s("p",[a._v("-l：列出用户以及密码的有效期")])]),a._v(" "),s("li",[s("p",[a._v("-m：密码能够更改的最小天数")])]),a._v(" "),s("li",[s("p",[a._v("-M：密码保持有效的最大天数")])])]),a._v(" "),s("h3",{attrs:{id:"删除用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除用户"}},[a._v("#")]),a._v(" 删除用户")]),a._v(" "),s("p",[a._v("userdel 命令用来删除用户的相关的所有数据。")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("userdel [options] [username]\n")])])]),s("p",[a._v("常见的参数有：")]),a._v(" "),s("ul",[s("li",[a._v("-r：删除用户登入目录以及目录中所有文件")])]),a._v(" "),s("p",[a._v("例如删除用户账号")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# userdel hnlinux\n")])])]),s("p",[a._v("用户组相关的操作如下：")]),a._v(" "),s("h3",{attrs:{id:"新增用户组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新增用户组"}},[a._v("#")]),a._v(" 新增用户组")]),a._v(" "),s("p",[s("code",[a._v("groupadd")]),a._v("用于创建一个新的工作组，新工作组的信息将被添加到系统文件中")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("groupadd [options] [groupname]\n")])])]),s("p",[a._v("常见的参数有如下：")]),a._v(" "),s("ul",[s("li",[a._v("-g：指定新建工作组的 id；")]),a._v(" "),s("li",[a._v("-r：创建系统工作组，系统工作组的组ID小于 500")]),a._v(" "),s("li",[a._v('-K：覆盖配置文件 "/ect/login.defs"')]),a._v(" "),s("li",[a._v("-o：允许添加组 ID 号不唯一的工作组")]),a._v(" "),s("li",[a._v("-f,--force: 如果指定的组已经存在，此选项将失明了仅以成功状态退出")])]),a._v(" "),s("p",[a._v("例如创建一个新的组，并添加组 ID。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("＃groupadd －g 344 runoob\n")])])]),s("h3",{attrs:{id:"修改用户-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改用户-2"}},[a._v("#")]),a._v(" 修改用户")]),a._v(" "),s("p",[s("code",[a._v("groupmod")]),a._v("命令用来修改 "),s("code",[a._v("group")]),a._v("相关的参数，例如群组识别码或者名称")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("groupmod [options] [groupname]\n")])])]),s("p",[a._v("常见的参数有：")]),a._v(" "),s("ul",[s("li",[a._v("-g <群组识别码> 　设置欲使用的群组识别码")]),a._v(" "),s("li",[a._v("-o 　重复使用群组识别码")]),a._v(" "),s("li",[a._v("-n <新群组名称> 　设置欲使用的群组名")])]),a._v(" "),s("p",[a._v("例如修改组名：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# groupmod -n linux linuxso \n")])])]),s("h3",{attrs:{id:"删除用户组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除用户组"}},[a._v("#")]),a._v(" 删除用户组")]),a._v(" "),s("p",[s("code",[a._v("groupdel")]),a._v(" 用于删除用户组，如果该群组中仍包括某些用户，则必须先删除这些用户后，方能删除群组")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("groupdel [groupname]\n")])])]),s("p",[a._v("日常工作通常会碰到只有"),s("code",[a._v("root")]),a._v("用户才有权限执行的操作，这就需要使用用户身份切换的命令：")]),a._v(" "),s("h3",{attrs:{id:"su"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#su"}},[a._v("#")]),a._v(" su")]),a._v(" "),s("p",[a._v("用于变更为其他使用者的身份，除 "),s("code",[a._v("root")]),a._v(" 外，需要键入该使用者的密码")]),a._v(" "),s("h3",{attrs:{id:"sudo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sudo"}},[a._v("#")]),a._v(" sudo")]),a._v(" "),s("p",[s("code",[a._v("sudo")]),a._v("命令以系统管理者的身份执行指令，也就是说，经由 sudo 所执行的指令就好像是 root 亲自执行")]),a._v(" "),s("p",[a._v("不是所有的用户都能执行 "),s("code",[a._v("sudo")]),a._v(" 命令的，而是在 "),s("code",[a._v("/etc/sudoers")]),a._v(" 文件内的用户才能执行这个命令")]),a._v(" "),s("p",[a._v("例如"),s("code",[a._v("sudo")]),a._v("命令使用"),s("code",[a._v("ls")]),a._v("：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ sudo ls\n")])])]),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),s("ul",[s("li",[a._v("https://zhuanlan.zhihu.com/p/37964411")]),a._v(" "),s("li",[a._v("https://zhuanlan.zhihu.com/p/105482468")])])])}),[],!1,null,null,null);s.default=_.exports}}]);