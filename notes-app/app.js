const notes = require('./notes')
const fs = require('fs');
const yargs = require('yargs');

yargs.version('1.1.0');
// console.log(yargs.argv);
yargs.command({
    command : 'add',
    describe: 'Adding a note',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption: true,
            type : 'string'
        },
        body : {
            describe : 'Body of the note',
            demandOption: true,
            type : 'string'
        } 
    },
    handler : function (argv) {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command : 'remove',
    describe: 'Remove a note',
    builder: {
        title : {
            describe: 'title',
            demandOption: true,
            type: 'string'
        }
    },
    handler : (argv) => {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'title',
            demandOption: true,
            type: 'string'
        }
    },
    handler : (argv) => {
        notes.readNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'List a note',
    handler : () => {
        notes.listNote();
    }
});
yargs.parse();