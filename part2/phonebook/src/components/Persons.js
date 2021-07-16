import personService from '../services/persons'

const Persons = ({filter, persons, setPersons}) => {
    const showPersons = (filter === '') ?
    persons 
    :
    persons.filter(person => person.name.toUpperCase().match(filter.toUpperCase()))

    const removePerson = (removedPerson) => {
      if(window.confirm(`Do you want to remove ${removedPerson.name}?`)){
        personService.remove(removedPerson.id).then(removed => {
          setPersons(persons.filter(removed => removed.id !== removedPerson.id))
        })
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