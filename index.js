#!/usr/bin/env node

const yargs = require("yargs");
const fs = require("fs");
const readline = require("readline");

const options = yargs.usage("Usage: -n <name>").option("p", {
  alias: "path",
  describe: "provide a path to file",
  demandOption: true
}).argv;

function postfixCalculator(args) {
  let postfixStack = [];
  args.forEach(arg => {
    if (parseInt(arg)) {
      postfixStack.push(parseInt(arg));
    } else {
      // pop element on top of the stack
      const firstElement = postfixStack.pop();

      // pop the nex top element
      const secondElement = postfixStack.pop();

      switch (arg) {
        case "-":
          postfixStack.push(secondElement - firstElement);
          break;
        case "+":
          postfixStack.push(secondElement + firstElement);
          break;
        case "*":
          postfixStack.push(secondElement * firstElement);
          break;
        case "/":
          postfixStack.push(secondElement / firstElement);
          break;
      }
    }
  });
  return postfixStack.pop();
}

function readFile(options) {
  let readingLine = readline.createInterface({
    input: fs.createReadStream(options)
  });

  readingLine.on("line", function(line) {
    if (line == "q") {
        // end program
      readingLine.on("close", function(line) {});
    } else {
        // perform post fix calculations
      const formatedData = line.split(" ");
      const postfixOutput = postfixCalculator(formatedData);
      console.log(postfixOutput);
    }
  });
}

const greeting = `${readFile(options.p)}`;

console.log(greeting);
