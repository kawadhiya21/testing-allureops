const { Given, When, Then } = require('@cucumber/cucumber')

Given('I am issuer', function () {
  this.user = { id: 5, name: 'Tester', tokens: [], exceptions: [] }
});

When('I create a token with symbol {string}', function (symbol) {
  if (symbol !== '') {
    this.user.tokens.push({ symbol })
  } else {
    this.user.exceptions.push({})
  }
});

Then('I should own a token called {string}', function (symbol) {
  const token = this.user.tokens.find((t) => {
    return t.symbol === symbol
  })

  if (!token) {
    throw 'No token found.'
  }
});

Then('I should receive an exception', function () {
  if (this.user.exceptions.length <= 0) {
    throw 'Did not receive an exception'
  }
});

Then('I should not have a token', function () {
  if (this.user.tokens.length > 1) {
    throw 'User should not have any tokens'
  }
});