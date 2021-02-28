const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = config => {
    config.set(
        merge(createDefaultConfig(config), {
            files: [
                // runs all files ending with .test in the test folder,
                // can be overwritten by passing a --grep flag. examples:
                { pattern: config.grep ? config.grep : 'test/**/*.test.js', type: 'module' },
            ],

            // see the karma-esm docs for all options
            esm: {
                // if you are using 'bare module imports' you will need this option
                nodeResolve: true,
            },
        }),
    );
    return config;
};

//Attempt at setting up with Typescript tests

// module.exports = function(config) {
//     config.set({
//
//         frameworks: ["mocha", "karma-typescript"],
//
//         files: [
//             { pattern: "node_modules/expect.js/index.js" },
//             { pattern: "src/**/*.ts" }
//         ],
//
//         preprocessors: {
//             "**/*.ts": ["karma-typescript"]
//         },
//
//         reporters: ["dots", "karma-typescript"],
//
//         browsers: ["ChromeHeadless"],
//
//         singleRun: true,
//
//         karmaTypescriptConfig: {
//             bundlerOptions: {
//                 transforms: [
//                     require("karma-typescript-es6-transform")()
//                 ]
//             }
//         }
//     });
// };