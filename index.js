#!/usr/bin/env node

"use strict";

const program = require("commander");
const seoul = require("./seoul.js");
const tokyo = require("./tokyo.js");

program.version("1.1.0");
program
  .command("seoul")
  .description("Check what we will going to do")
  .action((env, options) => {
    seoul();
  });

program
  .command("tokyo")
  .description("The plan for pre-Devcon 5 fun! よろしく！")
  .action((env, options) => {
    tokyo();
  });

program.parse(process.argv);
