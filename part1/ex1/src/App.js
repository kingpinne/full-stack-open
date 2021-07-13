import React from 'react'

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

  return (
    <>
       <div>
        <Part  />
        <Part  />
        <Part  />
       </div>
    </>
  )
}

const Total = (props) => {
  const { exercises1, exercises2, exercises3 } = props.parts

  return (
    <p>Number of exercises </p> 
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course ={course}/>
     <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

export default App