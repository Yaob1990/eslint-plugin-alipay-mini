/**
 * @fileoverview to-local-required-params
 * @author Yao
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/to-local-required-params"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("to-local-required-params", rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      code: "event.toLocaleString('zh-CN')",
      errors: [{ message: "toLocaleFn 必须传入参数", type: "CallExpression" }],
    },
    {
      code: "event.toLocaleDateString('zh-CN')",
      errors: [
        { message: "toLocaleFn 必须传入参数", type: "CallExpression" },
      ],
    },
    //  不校验正常函数
    {
      code: "toLocaleDateString()",
      errors: [
        { message: "toLocaleFn 必须传入参数", type: "CallExpression" },
      ],
    },
  ],

  invalid: [
    {
      code: "event.toLocaleString()",
      errors: [
        { message: "toLocaleFn 必须传入参数", type: "CallExpression" },
      ],
    },
    {
      code: "event.toLocaleDateString()",
      errors: [
        { message: "toLocaleFn 必须传入参数", type: "CallExpression" },
      ],
    },
  ],
});
