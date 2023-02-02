/**
 * @fileoverview no-replaceAll
 * @author Yao
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-replace-all"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-replace-all", rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      code: "",
      errors: [{ message: "禁止在小程序中使用 replaceAll，安卓容器不支持", type: "CallExpression" }],
    },
  ],

  invalid: [
    {
      code: "e.replaceAll('a','b')",
      errors: [{ message: "禁止在小程序中使用 replaceAll，安卓容器不支持", type: "CallExpression" }],
    },
  ],
});
