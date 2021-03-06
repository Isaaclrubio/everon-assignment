exports.config = {

    specs: [
        './features/*.feature'
    ],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: process.env.BROWSER
        }
    ],
    logLevel: 'silent',
    baseUrl: 'https://evbox.com/',

    // Overwriting the default 3000 timeout just in case of a slow network connection
    waitforTimeout: 5000, 
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: [
            './steps/init.js',
            './steps/*.steps.js'
        ],
        compiler: [
            'js:babel-register',
        ],
        timeout: 60000
    },
    services: ['selenium-standalone'],

    beforeSession: function () {
        require('@babel/register');
    },

    before: function () {
        global.expect = require('chai').expect;
    }

};
