# web-driver-io

## What?

A small POC to get started with `web-driver-io` using `selenium-standalone` as a local selenium service. Make sure you have JRE & JDK installed before proceeding.

---

## How?

Install node dependencies.

```javascript
npm install
```

Install `selenium-standalone` service to be able to run selenium server on local machine. This is a one time step.

```javascript
npm run selenium-install
```

Run the selenium local server so that `web-driver-io` can run the tests.

```javascript
npm run selenium-start
```

Finally, run the tests.

```javascript
npm run test
```

---

## web-driver-io Config Used

```javascript
exports.config = {
    specs: [
        './test/**/*.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome'
    }],
    sync: true,
    logLevel: 'command',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './errorShots/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd'
    },
}
```

---

## Author

Manoj Chalode (chalodem@gmail.com)

Copyright - [github.com/manojc](https://github.com/manojc)

---