import React, {useState} from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import CreateArea from "./components/CreateArea";




function App() {

  const [theNote, setTheNote] = useState([]);

  const addNote = (note) =>{
    console.log(note)
    setTheNote(preNotes => {
    return  [...preNotes, note];
    })
  }
  const deleteAnote = (id) => {
    console.log("note has been deleted");
    setTheNote(preNotes => {
      return preNotes.filter((noteitem, index) =>{
       return index !== id;
      })
    })
  }
  return (
    <div className="App">

    <Header/>
    <CreateArea
    onAdd={addNote}
    />

          <div  className="flex flex-row mt-6 flex-wrap justify-center" >
          {theNote.map((noteItems, index)=>{
            return <Notes
            key={index}
            id={index}
            onDelete={deleteAnote}
            title={noteItems.title}
            content={noteItems.content}
            />
          })}

          </div>

    <Footer/>


    </div>
  );
}

export default App;
