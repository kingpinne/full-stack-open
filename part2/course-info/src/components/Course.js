import React from 'react'

const Course = ({course}) => {
  const total = course.parts.reduce((s, p) => ( s + p.exercises),0)
 
  return (
    <>
    <Header text={course.name} />
    <Content />
    {course.parts.map( part => (
      <Part key={part.id} name = {part.name} exercises = {part.exercises} />
    ))}
    <b><p>total of {total} exercises</p></b>
    </>
  )
}

const Header = ({text}) => <h1>{text}</h1>
const Content = ({text}) => <p>{text}</p>
const Part = ({name,exercises}) => <p>{name} {exercises}</p>

export default Course