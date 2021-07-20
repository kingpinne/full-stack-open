import personService from '../services/persons'

const PersonForm = ({newName, setNewName, newNum, setNewNum, persons, setPersons, setMessage}) => {

  const addName = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNum
    }
    if(persons.find(person => person.name.toUpperCase() === newName.toUpperCase())){ 
      if(window.confirm( `${newName} is already added to phonebook. Do you want to update the number?`)){
        const newPersonId = ((persons.filter(person => person.name === newName)))[0].id
        personService.update(newPersonId, newPerson).then(updatedPerson => {
          setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson))
        })
        setMessage(
          {message: `User was updated`,
          type: "success"          
          }
        )
        setTimeout(() => {
          setMessage({message: null, type: null})
        }, 5000)
        setNewName('')
        setNewNum('')

      }
    } else {
      personService.create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setMessage(
          {message: `User was added to the phonebook`,
          type: "success"          
          }
        )
        setTimeout(() => {
          setMessage({message: null, type: null})
        }, 5000)
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