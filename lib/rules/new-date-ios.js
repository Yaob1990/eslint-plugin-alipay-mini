/**
 * @fileoverview new-date-ios
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
      description: "new-date-ios",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------


    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      NewExpression(node){
        if(node.callee.name === 'Date'){
          if (node.arguments.length && node.arguments[0].value && node.arguments[0].value.includes("-")){
            context.report({
            node,
            message: "new Date('2022-01-01') 横线写法在ios中会报错",
          });
          }
        }
      }
    };
  },
};
