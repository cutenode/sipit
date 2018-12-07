#!/usr/bin/env node

const cli = require('commander')
const chalk = require('chalk')
const npmname = require('npm-name')
const pjs = require('../package.json')

cli
  .version(pjs.version)
  .usage('<name>')
  .arguments('<name>')
  .action(async function(name){
    var nameInput = await npmname(name)

    if(nameInput === false) {
      console.log()
      console.log(chalk.yellow(name) + " exists! Take a sip 🍻")
      console.log()
    }
    
    if(nameInput === true) {
      console.log()
      console.log(chalk.green(name) + " does not exist. No sip for you 🙅")
      console.log()
    }
  })
  .parse(process.argv)