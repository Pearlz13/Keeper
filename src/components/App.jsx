import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
    
function App(){
  const [note, setNote]=useState([]);

  function addNote(inputText){
    setNote((prevNote)=>{
      return [...prevNote,inputText];
    });
    event.preventDefault();
  }

  function deleteNote(id){
    setNote((prevNote)=>{
      return prevNote.filter((note,index)=>{
        return index!==id;
      });
  });
  }
 
  return(
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {note.map((newNote,index)=>{
        return <Note key={index} id={index} title={newNote.title} content={newNote.content} onDelete={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;