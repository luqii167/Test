const { fetchData } = require("./1.6-fetchData");

// 回调类型异步函数的测试
// test("fetchData 返回结果为 {success: true}", (done) => {
//   fetchData((data) => {
//     expect(data).toEqual({
//       success: true,
//     });
//     // 只有调用了done()测试用例才算结束
//     done();
//   });
// });

// test("fetchData 返回结果为 {success: true}", (done) => {
//   fetchData((data) => {
//     expect(data).toEqual({
//       success: true,
//     });
//     // 只有调用了done()测试用例才算结束
//     done();
//   });
// });

test("fetchData 返回结果为 {success: true}", () => {
  return fetchData().then((response) => {
    expect(response.data).toEqual({ success: true });
  });
});

test("fetchData 返回结果为 {success: true}", () => {
  // 如果接口是正常的，那么不会经过expect(e.toString().indexOf("404") > -1).toBe(true);
  // 所以我们使用expect.assertions(1);来确保expect至少执行一次expect。
  expect.assertions(1);
  return fetchData().catch((e) => {
    console.log(e);
    expect(e.toString().indexOf("404") > -1).toBe(true);
  });
});
