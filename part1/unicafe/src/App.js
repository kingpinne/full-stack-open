import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

const Header = (props) => {
  const {course} = props

  return (
    <h1>{course}</h1>
  )
}

const Part = ({part1, exercises1}) => {
  return (
  <>
    <p>{part1} {exercises1} </p>
  </>
  )
}


const Content = (props) => {
  const { part1, part2, part3, exercises1, exercises2, exercises3} = props

  return (
    <>
       <div>
        <Part part1 = {part1} exercises1 = {exercises1} />
        <Part part1 = {part1} exercises1 = {exercises1} />
        <Part part1 = {part1} exercises1 = {exercises1} />
       </div>
    </>
  )
}

const Total = (props) => {
  const { exercises1, exercises2, exercises3 } = props

  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> 
  )
}



  return (
    <div>
      <Header course ={course}/>
     <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App