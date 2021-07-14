const Persons = ({filter, persons}) => {
    const showPersons = (filter === '') ?
    persons 
    :
    persons.filter(person => person.name.toUpperCase().match(filter.toUpperCase()))
  
    return(
      <>
        {showPersons.map(person => ( 
          <p key={person.name}>{person.name} - {person.number}</p>
        ))}
      </>
    )
  }

  export default Persons