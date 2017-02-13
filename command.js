#!/usr/bin/env node
var beep = require('./index.js')
var inquirer = require('inquirer')

var count = process.argv[2]

if (!count) {
  var question = {
    type: 'input',
    name: 'count',
    message: 'How many beeps do you want?'
  }

  inquirer.prompt(question)
  .then(function (answer) {
    beep(answer.count)
  })
}

beep(count)
