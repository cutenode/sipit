#!/usr/bin/env node

const cli = require('commander')
const chalk = require('chalk')
const npmname = require('npm-name')
const pjs = require('../package.json')

cli
  .version(pjs.version)
  .usage('<name>')
  .arguments('<name>')
  .option('-r, --rules')
  .option('-c, --credit')
  .action(async function (name) {
    var nameInput = await npmname(name)

    if (nameInput === false) {
      console.log()
      if (name === 'sipit' || name === 'npm' || name === 'npx') {
        console.log('Well of course ' + chalk.yellow(name) + ' exists. Take three sips for being smarmy.')
      } else {
        console.log(chalk.yellow(name) + ' exists! Take a sip 🍻')
      }
      console.log()
    }

    if (nameInput === true) {
      console.log()
      console.log(chalk.green(name) + ' does not exist. No sip for you 🙅')
      console.log()
    }
  })
  .parse(process.argv)

if (cli.rules) {
  console.log()
  console.log(chalk.green('Rules of sipit:'))
  console.log('    1: Think of a noun')
  console.log('    2: npx sipit <noun>')
  console.log('    3: If it exists - drink!')
  console.log()
}

if (cli.credit) {
  console.log()
  console.log(chalk.green('Credits:'))
  console.log('    - Thanks to Sara Vieira (' + chalk.cyan('https://twitter.com/NikkitaFTW') + ') for creating ' + chalk.cyan('npmdrinkinggame.com') + '.')
  console.log('    - Thanks to Sindre Sorhus (' + chalk.cyan('https://mobile.twitter.com/sindresorhus') + ') for suggesting this drinking game in 2014 on Twitter.')
  console.log('       - For the original tweet, see: ' + chalk.cyan('https://twitter.com/sindresorhus/status/515511151669805056'))
  console.log()
}
