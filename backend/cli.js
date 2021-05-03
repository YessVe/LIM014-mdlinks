#!/usr/bin/env node

const program = require('commander');
const md_Links = require('./index.js');
const chalk = require('chalk')
const pathNode = process.argv[2];

const total = (array) => {
  let totalLinks = array.map((obj) => obj.href)
  return 'Total: ' + totalLinks.length
}
const broken = (array) => {
  let linksMessage = array.map((obj) => obj.message)
  let brokenLinks = linksMessage.filter((obj) => obj === 'FAIL')
  return 'Broken: ' + brokenLinks.length
}
const unique = (array) => {
  let linksHref = array.map((obj) => obj.href)
  let linksUnique = [...new Set(linksHref)];
  return 'Unique: ' + linksUnique.length
}
const options = program.opts();
program
  .arguments('<path-to-file>')
  .name('md-links')
  .option('-s, --stats', 'Shows basic information about the links: The total and the unique ones.')
  .option('-v, --validate', 'The module makes a HTTP request so it can show if the links work or not.')
  .option('-s, -v --stats --validate', 'Shows the total, unique and broken links.')
  .parse(process.argv)
  function cli(path, options) {
    md_Links.mdLinks(path, {
        validate: true
      })
      .then((res) => {
        if (!options.validate && !options.stats) {
          res.map((elemento) => {
            console.log(
              chalk.rgb(47, 189, 79)(elemento.file) + "  " +
              chalk.rgb(47, 189, 171)(elemento.href) + "  " +
              chalk.rgb(47, 189, 124)(elemento.text)
            )
          })
        } else if (options.validate && !options.stats) {
          res.map((elemento) => {
            if (elemento.message === 'OK') {
              console.log(
                chalk.rgb(47, 189, 79)(elemento.file) + "  " +
                chalk.rgb(47, 189, 171)(elemento.href) + "  " +
                chalk.rgb(216, 238, 53)(elemento.status) + "  " +
                chalk.rgb(216, 238, 53)(elemento.message)
              )
            } else {
              console.log(
                chalk.rgb(47, 189, 79)(elemento.file) + "  " +
                chalk.rgb(47, 189, 171)(elemento.href) + "  " +
                chalk.rgb(238, 126, 53)(elemento.status) + "  " +
                chalk.rgb(238, 126, 53)(elemento.message)
              )
            }
          })

        } else if (!options.validate && options.stats) {
          console.log(chalk.rgb(47, 189, 171)(total(res)));
          console.log(chalk.rgb(47, 189, 79)(unique(res)))
        } else if (options.validate && options.stats) {
          console.log(chalk.rgb(47, 189, 171)((total(res))));
          console.log(chalk.rgb(47, 189, 79)(unique(res)));
          console.log(chalk.rgb(194, 255, 51)(broken(res)))
        }
      })
      .catch((err) => {
        console.log(chalk.rgb(218, 41, 41)('The file, directory or path does not exist or there is no file with .md extension'));
      })
  }

  cli(pathNode, options);
