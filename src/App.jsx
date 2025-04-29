import { useEffect, useState } from "react";
import Note from "./components/Note";
import NoteForm from "./components/NoteForm";

function App(){
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) :[];
  });

  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text,
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id != id));
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return(
    <div style={{padding: "20px"}}>
        <h1>Notes App</h1>
        <NoteForm onAddNote = {addNote} />
        {notes.length === 0 ? (
          <p>No Notes yet...</p>
        ): (
          notes.map((note) => (
            <Note key = {note.id} note = {note} onDelete = {deleteNote}/>
        ))
      )}
      </div>
  );
}

export default App;