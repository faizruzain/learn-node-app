const validator = require("validator");
const chalk = require("chalk");
const notes = require("./notes.js");
const yargs = require("yargs");

// Custom yargs version
yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
      alias: "t",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
      alias: "b",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
    // console.log(`title: ${argv.title}\nbody: ${argv.body}`);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
      alias: "t",
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
    // console.log(argv.title);
  },
});

// create list command
yargs.command({
  command: "list",
  describe: "list your note",
  handler: () => {
    console.log("listing all out your notes");
  },
});

// create list command
yargs.command({
  command: "read",
  describe: "read your note",
  handler: () => {
    console.log("reading your note");
  },
});

yargs.parse();
// console.log(process.argv);
// console.log(yargs.argv);
