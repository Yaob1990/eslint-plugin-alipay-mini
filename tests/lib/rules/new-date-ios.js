/**
 * @fileoverview new-date-ios
 * @author Yao
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/new-date-ios"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("new-date-ios", rule, {
  valid: [
    {
      code: "new Date(2020/01/01)",
      errors: [{ message: "new Date('2022-01-01') 横线写法在ios中会报错", type: "NewExpression" }],
    },
  ],

  invalid: [
    {
      code: "new Date('2022-01-02')",
      errors: [{ message: "new Date('2022-01-01') 横线写法在ios中会报错", type: "NewExpression" }],
    },
  ],
});
