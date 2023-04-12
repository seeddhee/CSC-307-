import Table from './Table'
import React, {useState} from 'react';
import Form from './form'


function MyApp() {
  const [characters, setCharacters] = useState([]);

  function removeOneCharacter (index) {
    const updated = characters.filter((character, i) => {
        return i !== index
      });
      setCharacters(updated);
    }
    function updateList(person) {
      setCharacters([...characters, person]);
    }
    function updateList(person) {
      setCharacters([...characters, person]);
    }
    return (
        <div className="container">
           <Table characterData={characters} removeCharacter={removeOneCharacter} />
           <Form handleSubmit={updateList}></Form>
        </div>
      )
     
}


export default MyApp;

