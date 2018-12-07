let cli = require('commander')
let chalk = require('chalk')
let npmname = require('npm-name')
let pacakgejson = require('../package.json')

(async () =>
cli
  .version(packagejson.version)
  .command('<name>')
  .action(function(name){
    try {
      let name = await npmname(name)
    } catch(error) {
      console.log(error.message)
    }

    if(name === true) {
      console.log(chalk.green("Take a sip! 🍻"))
    }

    if(name === false) {
      console.log(chalk.green("NO SIP FOR YOU! 🙅🏻‍♀️"))
    }
  })
  .parse(process.argv)
)

console.log('')