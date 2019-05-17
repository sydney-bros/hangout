#!/usr/bin/env node

'use strict';

const program = require('commander');
const seoul = require('./seoul.js')

program.version('1.0.0');
program
  .command('seoul')
  .description('Check what we will going to do')
  .action((env, options)=>{
    seoul()
  })
;

program.parse(process.argv)
