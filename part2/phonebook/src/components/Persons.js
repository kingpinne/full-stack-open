import personService from '../services/persons'

const Persons = ({filter, persons, setPersons, setMessage}) => {
    const showPersons = (filter === '') ?
    persons 
    :
    persons.filter(person => person.name.toUpperCase().match(filter.toUpperCase()))

    const removePerson = (removedPerson) => {
      if(window.confirm(`Do you want to remove ${removedPerson.name}?`)){
        personService
          .remove(removedPerson.id).then(removed => {
            setPersons(persons.filter(removed => removed.id !== removedPerson.id))
          }).catch(error => {
              setMessage(
                {message: `User has already been removed from the phonebook`,
                type: "error"          
                }
              )
              setTimeout(() => {
                setMessage({message: null, type: null})
              }, 5000)
            })

        setMessage(
          {message: `User was removed from the phonebook`,
          type: "error"          
          }
        )
        setTimeout(() => {
          setMessage({message: null, type: null})
        }, 5000)
      }
    }
  
    return(
      <>
        {showPersons.map(person => ( 
          <p key={person.name}>{person.name} - {person.number} <button onClick={() => removePerson(person)}>delete</button></p>
        ))}
      </>
    )
  }

  export default Persons