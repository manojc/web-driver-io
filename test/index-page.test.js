const assert = require('assert');

describe('webdriver.io page', function () {
    it('should have the right title - the fancy generator way', function () {
        this.timeout(10000);
        browser.url('/login');
        const title = browser.getTitle();
        assert.equal(title, 'Login | PREPROD | Localstars Advance');
    });

    it.only('should login with valid username and password', async function (done) {
        this.timeout(40000);
        browser.url('/login');
        await browser.pause(4000);

        const username = $('#email');
        await username.setValue("admin");

        const password = $('#password');
        await password.setValue("foreveradvancing");

        await browser.submitForm('#login > form');

        setTimeout(() => {
            done();
        }, 4000);
    });
});