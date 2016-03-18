#!/usr/bin/env node
'use strict';
var moment = require("moment");
var fs = require("fs");
var date = moment().format('MMMM-Do-YYYY--h-mm-a');

var filename = process.cwd() + "/" + date + ".md";
fs.writeFileSync(filename, "");


const exec = require('child_process').exec;
const child = exec(`subl ${filename}`,
  (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
});
