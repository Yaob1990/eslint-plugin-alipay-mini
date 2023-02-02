/**
 * @fileoverview no-replaceAll
 * @author Yao
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "no-replaceAll",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {


    return {
      CallExpression(node){
        if(node.callee.property && node.callee.property.name === 'replaceAll'){
          context.report({
            node,
            message: "禁止在小程序中使用 replaceAll，安卓容器不支持",
          });
        }
      }
    };
  },
};
