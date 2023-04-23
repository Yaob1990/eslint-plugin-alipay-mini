/**
 * @fileoverview to-local-required-params
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
      description: "to-local-required-params",
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
      CallExpression(node){
        if (node.callee.property && node.callee.property.name && node.callee.property.name.startsWith('toLocale')){
          if(node.arguments.length === 0){
            context.report({
              node,
              message: "toLocaleFn 必须传入参数",
            });
          }
        }
      }
    };
  },
};
