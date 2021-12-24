exports.config = {
    specs: [
        './specs/**/*.spec.js'
    ],
    exclude: [
    ],

    maxInstances: 1,
    capabilities: [{
        maxInstances: 5,
        //
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://kompot.us',
    waitforTimeout: 10000,

    connectionRetryTimeout: 30000,
    connectionRetryCount: 1,

    services: ['devtools'],
    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
