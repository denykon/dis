// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .click('a[href="/about"]')
      .assert.elementPresent('.item')
      .assert.containsText('h1', 'This is an about page')
      .assert.elementCount('.item', 1)
      .end()
  }
};
