const CountryInfo = ({country, showCountry}) => {
    if(!(Object.keys(showCountry).length === 0 && showCountry.constructor === Object) ){
        return (
            <>
            <div key={showCountry[0].name}>
                        <h2>{showCountry[0].name}</h2>
                    
                        <p>capital: {showCountry[0].capital}</p>
                        <p>population: {showCountry[0].population}</p>
                
                        <h3>languages</h3>
                        <ul>
                            {showCountry[0].languages.map(language => <li key = {language.iso639_1}>{language.name}</li>)}
                        </ul>
                        <img src={showCountry[0].flag} width="100" alt="flag"/>
                </div>
            </>
        )
    }

    return <p></p>
}

export default CountryInfo



