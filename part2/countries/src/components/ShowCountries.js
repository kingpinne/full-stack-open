const ShowCountries = ({showCountries,showButton}) => {
    while(showCountries.length > 10){
        return <p>Too many matches, specific another filter</p>
    }
    if(showCountries.length === 1){
        return <p></p>
    }

    return showCountries.map(country => <li key={country.alpha2Code}>{country.name} <button onClick={(e)=>showButton(country.name)}>show</button></li>)
}

export default ShowCountries