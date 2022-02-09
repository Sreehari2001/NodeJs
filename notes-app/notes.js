const fs = require('fs');


const addNotes = (title, body) => {
   const notes =  loadNotes();
   console.log(notes);
   const duplicates = notes.filter( (note) => {
        return note.title === title;
   });
    if (duplicates.length === 0){
            notes.push({
                title: title,
                body: body
            });
            saveNotes(notes)
            console.log("New Notes Added");
        }
        else{
            console.log('Title Already Exists');
        }

   };

const removeNotes = (title) => {
    const notes = loadNotes();
    const remove = notes.filter( (note) => {
        return note.title !== title
    });
    if (remove.lenght === 0){
        saveNotes(remove);
        console.log('Success!, Title Removed');
        // console.log(chalk.green('Success!, Title Removed'));
    }
    else{
        console.log("No Title Exists!");
        // console.log(chalk.red("No Title Exists!"));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(notes);
    notes.forEach(element => {
        console.log(element.title);
    });

};

const readNotes = (title) => {
    console.log(`You are gonna read ${title} notes`);
    const notes = loadNotes();
    const read = notes.find((note) => {
        return note.title === title;
    });
    if (read) console.log(read.body);
    else console.log("No Note Found");
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json').toString();
        const parsedata = JSON.parse(dataBuffer);
        return parsedata;
    } catch (error) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
module.exports = {
    addNote : addNotes,
    removeNote: removeNotes,
    listNote: listNotes,
    readNote: readNotes
}