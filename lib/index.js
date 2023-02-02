/**
 * @fileoverview ban api
 * @author Yao
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
    rules: requireIndex(__dirname + '/rules'),
    configs: {
        recommended: {
            plugins: ['alipay-mini'],
            rules: {
                'alipay-mini/new-date-ios': ['error'],
                'alipay-mini/no-replace-all': ['error'],
                'alipay-mini/to-local-required-params': ['error']
            }
        }
    }
}
