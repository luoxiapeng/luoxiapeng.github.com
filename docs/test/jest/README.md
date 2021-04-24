# Jest 单元测试

随着前端的发展，前端设计的领域已经越来越多，也越来越复杂。这就对我们前端工程化能力，提出了更高的要求。 好的前端工程化一般包括三个大的方面：

- 前端自动化测试（前提条件）
- 高质量的代码设计
- 高质量的代码实现

我知道一些公司，到现在还是没有前端自动化测试，甚至 BOSS 会说前端自动化测试会拉低工作效率，认为用处不大。这是完全错误的想法，你可以看到 Github 上任何大型的前端项目都有自动化测试代码。

- Ant Design : React UI 组件库
- Vue.js : 国内最流行的构建用户界面的渐进式 JavaScript 框架。
- React.js : 世界最流行的 JavaScript MVC 框架。

实我个人认为前端自动化测试是每个项目必备的一个环境，重要性我在这里就不作过多的介绍了。我的课程一直是重实践的。

- 实我个人认为前端自动化测试是每个项目必备的一个环境，重要性我在这里就不作过多的介绍了。我的课程一直是重实践的。

- React 项目的测试： Enzyme 工具的讲解，TDD 单元测试，BDD 集成测试的知识和操作
- Vue 项目的测试： vue-test-utils 工具的讲解，TDD 单元测试，BDD 集成测试的知识和操作

## 前置知识

- JavaScript（ES6）：对基本语法要比较熟悉，遇到的 JavaScript 知识和 ES6 知识，课程中不会单独拿出来讲解。
- Node.js ： 你至少会使用包管理 npm,不会服务端代码到无所谓。
- git： 因为自动化测试（Jest）需要用到很多 Git 的知识，所以这里默认你已经会了 git 的相关操作。
- React.js: (可选)实战部分会讲到 React 的代码，但如果你是 Vue 的开发者，可以省略这部分内容。
- Vue.js :(可选)实战部分会讲到 Vue 的代码，但如果你是 React 的开发者，可以省略这部分内容。