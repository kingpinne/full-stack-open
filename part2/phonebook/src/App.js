import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [message, setMessage] = useState({message: null, type: null})


  useEffect(()=> {
    personService.getAll().then(initialPersons => setPersons(initialPersons))
   
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
        setMessage = {setMessage}
      />
      < Notification 
        message = {message}
        />
      <h2>Numbers</h2>
      <Persons 
        persons = {persons} 
        setPersons = {setPersons}
        setMessage = {setMessage}
        filter = {filter} />

    </div>
  )
}

export default App