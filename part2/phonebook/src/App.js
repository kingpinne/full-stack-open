import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(()=> {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        console.log(response);
        setPersons(response.data)})
      .catch(err => console.log(err))

  },[])

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