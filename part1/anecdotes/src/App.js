import React, { useState } from 'react'

const Button = ({text, handleClick}) => { return <button onClick = {handleClick}>{text}</button>}

const HighestVote = ({highestVotes, votes, anecdote}) => {
  if(Math.max(votes) === 0) {
    return <p></p>
  }

  return (
    <>
    {anecdote}
    <p>has {votes} votes.</p>
    </>
   )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
  const generateRandomAnecdote = () => {

    let activeNum = Math.floor(Math.random() * anecdotes.length)

    if (activeNum === selected && activeNum === anecdotes.length){
      return setSelected(activeNum - 1)
    }
    if (activeNum === selected && ( activeNum === 0 || activeNum < anecdotes.length)){
      return setSelected(activeNum + 1)
    }

    return setSelected(activeNum)
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] +=1
    highestVotes = votes.indexOf(Math.max(...votes))
    return setVotes(copy)
  }

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))

  let highestVotes = votes.indexOf(Math.max(...votes))


  return (
    <>
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes.</p>
    <Button handleClick={()=> vote()} text='vote'/>
    <Button handleClick={()=> generateRandomAnecdote()} text='next anecdote'/>
      <h2>Anecdote with most votes</h2>
      <HighestVote highestVotes = {highestVotes} anecdote = {anecdotes[highestVotes]} votes = {votes[highestVotes]} />
    </div>
    </>
  )
}

export default App


