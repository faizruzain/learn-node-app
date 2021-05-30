// console.log('notes.js');
const fs = require("fs");
const chalk = require('chalk');

const getNotes = function () {
  return "this is your notes";
};

// adding notes
const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicatedNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicatedNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("Noted! :D");
  } else {
    console.log("Note title taken! pick another one");
  };
};

const saveNotes = function (notes) {
  const JSONdata = JSON.stringify(notes);
  fs.writeFileSync("notes.json", JSONdata);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  };
};

// removing notes
const removeNote = function (title) {
    const notes = loadNotes();

    const notesToKeep = notes.filter(note => {
        return note.title !== title;
    });

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.bgGreen('successfully deleted'));
    } else {
        console.log(chalk.bgRed('no title found'));
    };
    
    
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
