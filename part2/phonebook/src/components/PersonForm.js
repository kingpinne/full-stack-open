const PersonForm = ({newName, setNewName, newNum, setNewNum, persons, setPersons}) => {

  const addName = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNum
    }
    if(persons.find(person => person.name === newName)){ 
      alert( `${newName} is already added to phonebook`)
    } else {
      setPersons([...persons, newPerson])
      setNewName('')
      setNewNum('')
    }
  }

    return(
      <>
        <form onSubmit={addName}>
          <div>
            name: <input 
                    value = {newName}
                    onChange = {e => setNewName(e.target.value)}
                  />
            <br />
            number: <input 
                    value = {newNum}
                    onChange = {e => setNewNum(e.target.value)}
                  />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </>
    )
  }

export default PersonForm