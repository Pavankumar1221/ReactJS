import React from 'react'

function Child(props) {
  return (
    <div>
        <h1>Hello, my name is {props.name} and my age is {props.age}.</h1>
    </div>
  )
}

export default Child