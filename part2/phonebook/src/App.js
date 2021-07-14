import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = (props) => {
  const [ persons, setPersons ] = useState(props.persons) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ filter, setFilter ] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <h2>add a new</h2>
      <PersonForm 
        newName = {newName}
        setNewName = {setNewName}
        newNum = {newNum}
        setNewNum = {setNewNum}
        persons = {persons}
        setPersons = {setPersons}
      />
      <h2>Numbers</h2>
      <Persons persons = {persons} filter = {filter} />
    </div>
  )
}

export default App