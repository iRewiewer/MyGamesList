import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function removeItem(id) {
        if (setNotes((prevNotes) => {
            return prevNotes.filter((value, index) => {
                return index !== id
            })
        }));
    }

    return (
        <div>
            <Header />
            <CreateArea
                onAdd={addNote}
            />
            {
                notes.map((note, index) => {
                    return <Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        onChecked={removeItem}
                    />
                })
            }
            <Footer />
        </div>
    );
}

export default App;