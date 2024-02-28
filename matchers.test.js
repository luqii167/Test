test("测试10与10相匹配", () => {
  // toBe匹配器 matchers
  expect(10).toBe(10);
});

test("测试对象的内容内容相等", () => {
  // toEqual匹配器
  const a = { b: 1 };
  expect(a).toEqual({ b: 1 });
});

test("测试toBeNull", () => {
  // toEqual匹配器
  const a = null;
  expect(a).toBeNull();
});

// 同类型的函数还有toBeUndefined(), toBeDefined(), toBeTruthy(), toBeFalsy()

test("not 匹配器", () => {
  // toEqual匹配器
  const a = 1;
  expect(a).not.toBeNull();
});

// 数字相关的匹配器
test("toBeGreaterThan", () => {
  expect(10).toBeGreaterThan(9);
});
// toBeGreaterThanOrEqual/toBeLessThanOrEqual

test("toBeCloseTo", () => {
  const first = 0.1;
  const second = 0.2;
  expect(first + second).toBeCloseTo(0.3);
});

// string
test("toMatch包含", () => {
  const str = "helloworld";
  expect(str).toMatch("hello");
  // 字符串或正则表达式
});

// Array， Set
test("toContain", () => {
  const arr = ["ayaka", "amy", "bob"];
  expect(arr).toContain("ayaka");
});

// 异常处理
const throNewErrorFunc = () => {
  throw new Error("this is a new error");
};

test("toThrow", () => {
  expect(throNewErrorFunc).toThrow("new error");
});

test("toThrow", () => {});
