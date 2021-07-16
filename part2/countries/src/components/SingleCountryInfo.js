import { useEffect, useState } from "react"
import axios from 'axios'

const SingleCountryInfo = ({country}) => {
    const [weather, setWeather] = useState('')
    
    useEffect(()=>{
        const api_key= process.env.REACT_APP_API_KEY
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country[0].capital}&exclude=hourly,daily&appid=${api_key}`)
        .then(res => {
            console.log(res);
            setWeather(res.data)
        })
        .catch(e =>{ 
            console.log(e) 
            setWeather('')
        })
    },[country])

    const convertCelsiuc = (kelvin) => {
        return (kelvin - 273.16).toFixed(2) 
    }

    if(Object.keys(country) === 0){
        return null
    }

    if(weather.length === 0) {
        return null
    } else {
        return (
            <>
               <div key={country[0].name}>
                        <h2>{country[0].name}</h2>
                       
                        <p>capital: {country[0].capital}</p>
                        <p>population: {country[0].population}</p>
                  
                        <h3>languages</h3>
                        <ul>
                            {country[0].languages.map(language => <li key = {language.iso639_1}>{language.name}</li>)}
                        </ul>
                        <img src={country[0].flag} width="100" alt="flag"/>
    
                        <h2>Weather</h2>
                        <p><strong>temperature: </strong>{convertCelsiuc(weather.main.temp)} °c</p>
                 </div>
                 
            </>
        )
    }
}
export default SingleCountryInfo