const assert = require('assert');

describe('Advance Login Page', function () {

    beforeEach(() => {
        browser.url('/login');
        browser.pause(2000);
    });

    it('should have the right title - the fancy generator way', function () {
        const title = browser.getTitle();
        assert.equal(title, 'blah');
    });

    it('should login with valid username and password', function () {

        const username = $('#email');
        username.setValue("blah");

        const password = $('#password');
        password.setValue("blah");

        const signIn = $('#login > form > fieldset > div:nth-child(3) > input.button.primary.rgt');
        signIn.click();

        assert.strictEqual("Dashboard", browser.getHTML('#body > section > h1', false));
    });
});