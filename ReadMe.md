[toc]

# 1 基础 API

从源码角度理解测试的原理

Jest 的优点

Jest 的使用，使用模块化导入导出

Jest 的配置

## 1.5 matchers 匹配器

此处我们列举几个最常用的匹配器

| 匹配器                 | 含义                                                         | 例子                                                                                                                                                                                    |
| ---------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| toBe                   | 判断基本类型是否相等，其底层是 Object.is，对于对象判断不准确 | expect(10).toBe(10);                                                                                                                                                                    |
| toEqual                | 递归地判断对象内容是否相同。                                 | const a = { b: 1 };<br />expect(a).toEqual({ b: 1 });                                                                                                                                   |
| toBeNull               | 是否为 null                                                  | expect(null).toBeNull()                                                                                                                                                                 |
| not                    | 非                                                           | expect(undefined).not.toBeNull();                                                                                                                                                       |
| toBeGreaterThan        | 大于                                                         | expect(10).toBeGreaterThan(9);                                                                                                                                                          |
| toBeGreaterThanOrEqual | 大于等于                                                     |                                                                                                                                                                                         |
| toBeLessThanEqual      | 小于                                                         |                                                                                                                                                                                         |
| toBeLessThanOrEqual    | 小于等于                                                     |                                                                                                                                                                                         |
| toMatch                | 字符串的匹配                                                 | expect(str).toMatch("hello");                                                                                                                                                           |
| toContain              | 数组、集合的包含                                             | expect(arr).toContain("ayaka");                                                                                                                                                         |
| toThrow                | 异常信息匹配                                                 | const throNewErrorFunc = () => {<br /> throw new Error("this is a new error");<br />};<br /><br />test("toThrow", () => {<br /> expect(throNewErrorFunc).toThrow("new error");<br />}); |

除了以上列举的匹配器，还有很多。详见官网[匹配器](https://jestjs.io/docs/expect)

## 1.6 Jest 命令行工具的使用

在终端输入`npm run test`后，再输入`w`，我们可以对监测模式进行如下选择。

```shell
› Press f to run only failed tests.仅测试失败的用例
› Press o to only run tests related to changed files.仅测试被修改文件中的用例
› Press p to filter by a filename regex pattern. 根据文件名来过滤要执行的测试用例
› Press t to filter by a test name regex pattern. 根据测试用例的名字来过滤要执行的测试用例
› Press q to quit watch mode.
› Press Enter to trigger a test run
```

此处，我们对`o`模式做详解

点击 o 后，会发现控制台输出如下错误

```shell
Determining test suites to run...
--watch is not supported without git/hg, please use --watchAll
```

这是因为该特性需要和能追踪文件变化的工具一起使用配合使用。这个工具就是 Git，所以接下来我们要安装 Git

安装好后，我们运行 git init 将 lesson5 初始化为空的仓库

```shel
git init
> Initialized empty Git repository in /Users/ayaka/Desktop/Web/Test/lesson5/.git/
```

此处的改变是相较于上一次 commit

对于测试命令，`jest --watch`等同于进入`o`模式

# 2 异步代码测试

创建`1.6fetchData.js`文件，编写异步函数`fetchData`，并导出

```javascript
const fetchData = () => {
  return axios.get("http://www.dell-lee.com/react/api/demo1.json");
};

try {
  module.exports = {
    fetchData,
  };
} catch (e) {}
```

创建`1.6fetchData.test.js` 文件

```javascript
const { fetchData } = require("./1.6-fetchData");

// 测试异步函数返回200的情况
test("fetchData 返回结果为 {success: true}", () => {
  return fetchData().then((response) => {
    expect(response.data).toEqual({ success: true });
  });
});

// 测试异步函数返回404的情况
test("fetchData 返回结果为 {success: true}", () => {
  // 如果接口是正常的，那么不会经过expect(e.toString().indexOf("404") > -1).toBe(true);
  // 所以我们使用expect.assertions(1);来确保expect至少执行一次expect。
  expect.assertions(1);
  return fetchData().catch((e) => {
    console.log(e);
    expect(e.toString().indexOf("404") > -1).toBe(true);
  });
});
```

# 3 Mock

# 4 快照

# 5 timer 测试

# 6 DOM 测试

# 7 React 测试

# 8 学习跟踪

- 2.28 - 2.5-2.7

# 9 专业词汇记录

|     |
| --- |
