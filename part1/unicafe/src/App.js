import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick = {handleClick}>{text}</button>
  )
}

const Statistics = ({good,neutral,bad}) => {
  let total = good + neutral + bad

  if (good + neutral + bad === 0) {
    return (
      <>
      <p>No feedback given</p>
      </>
    )
  }
  
  return (
    <>
    <table>
      <tbody>
        <Statistic text = "good" value={good} />
        <Statistic text = "neutral" value={neutral} />
        <Statistic text = "bad" value={bad} />
        <Statistic text = "all" value={total} />
        <Statistic text = "average" value={(good - bad )/ total} />
        <Statistic text = "postive" value={`${good / total * 100}%`} />
      </tbody>
    </table>
    </>
  )
}

const Statistic = ({text,value}) => { 

  return (
    <>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    </>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
    <div>
      <h1>give feedback</h1>
      <Button handleClick= {()=> setGood(good + 1)} text = {'good'} />
      <Button handleClick= {()=> setNeutral(neutral + 1)} text = {'neutral'} />
      <Button handleClick= {()=> setBad(bad + 1)} text = {'bad'} />
      <br />
      <h1>Statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
     </>
  )
}

export default App
