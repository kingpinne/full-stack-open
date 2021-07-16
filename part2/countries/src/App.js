import { useState, useEffect } from "react";
import axios from 'axios'
import CountryInfo from "./components/CountryInfo";
import ShowCountries from "./components/ShowCountries"
import SingleCountryInfo from "./components/SingleCountryInfo";

const App = () => {
 const [countries, setCountries] = useState([])
 const [filter, setFilter] = useState('')
 const [showCountry, setShowCountry] = useState({})

 useEffect(()=> {
  axios.get('https://restcountries.eu/rest/v2/all').then(res => {
    setCountries(res.data)
  }).catch(e => console.log(e))
 },[])
  
const showButton = (c) => {
  const clickedCountry = countries.filter(country => country.name === c)
  setShowCountry({...clickedCountry})
}

const onChange = (e) => {
  setFilter(e.target.value) 
  setShowCountry({})
  }

 const showCountries = (filter === '') ?
 [] 
 :
 countries.filter(country => country.name.toUpperCase().match(filter.toUpperCase()))

  return (
    <>
    <h1>Countries</h1>
    <p>Find countries: <input value={filter} onChange={e => onChange(e)}/></p>
    <ul>
      <ShowCountries showCountries={showCountries} showButton={showButton}/>
    </ul>
    <CountryInfo country = {showCountries} showCountry={showCountry} />
    {showCountries.length === 1 ? <SingleCountryInfo country = {showCountries}/> : null }
    </>

  )
}

export default App;
