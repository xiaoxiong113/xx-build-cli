#! /usr/bin/env node

const { Command } = require('commander');
const program = new Command();
// var process1 = require('child_process')
const download = require('download-git-repo');

program.version('1.0.5', '-v --version')
  .command('init <name>')
  .action((name) => {
    console.log('clone template ...');
    download('github:xiaoxiong113/todolist-jest-enzyme', 'jest-demo', function (err) {
      console.log(err ? 'Error' : 'Success')
    })

    // process1.exec('git clone https://github.com/xiaoxiong113/jest-demo.git ' + name, function(error, stdout, stderr) {
    //   if (error !== null) {
    //       console.log('exec error: ' + error);
    //       return;
    //   }
    //   console.log(stdout);
    //   console.log('clone success');
    // });
  })
program.parse(process.argv);