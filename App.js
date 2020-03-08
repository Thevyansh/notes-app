const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');


//Customize Yargs Version
yargs.version('1.1.0');

//Add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler (argv) {
        notes.addNote(argv.title, argv.body);
    }
});


//Remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of note to remove',
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }

});

//List
yargs.command({
    command: 'list',
    describe: 'list all note',
    handler () {
        notes.listNotes();
    }
});

//Read
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Title of note to remove',
            demandOption: true,
            type: "string"
        }
    },
    handler (argv) {
        notes.readNote(argv.title)
    }
});


yargs.parse();

























