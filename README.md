# web-driver-io

## What?

A small POC to get started with `web-driver-io` using `selenium-standalone` as a local selenium service. Make sure you have JRE & JDK installed before proceeding.

The POC also uses `spec` & `allure` reporters apart from default `dot` reporter to generate reports.

---

## How?

Install node dependencies.

```shell
npm install
```

Install `selenium-standalone` service to be able to run selenium server on local machine. This is a one time step.

```shell
npm run selenium-install
```

Run the selenium local server so that `web-driver-io` can run the tests.

```shell
npm run selenium-start
```

Finally, run the tests.

```shell
npm run test
```

---

## Reports

Generate allure reports

```shell
npm run allure-report
```

Open allure reports in browser (http://localhost:7777)

```shell
npm run allure-serve
```
---

## Demo

The test report generated using `allure` is available [here](https://manojc.github.io/web-driver-io/)

---

## Config Used in web-driver-io

```shell
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
    reporters: ['dot', 'spec', 'allure'],
    reporterOptions: {
        allure: {
            outputDir: 'allure-results'
        }
    },
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
