import personService from '../services/persons'

const PersonForm = ({newName, setNewName, newNum, setNewNum, persons, setPersons}) => {

  const addName = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNum
    }
    if(persons.find(person => person.name === newName)){ 
      if(window.confirm( `${newName} is already added to phonebook. Do you want to update the number?`)){
        const newPersonId = ((persons.filter(person => person.name === newName)))[0].id
        personService.update(newPersonId, newPerson).then(updatedPerson => {
          setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson))
        })
        setNewName('')
        setNewNum('')
      }
    } else {
      personService.create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNum('')
      })

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