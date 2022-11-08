import React from 'react'

function Label(props) {
  return (
    <div className='formLabels'>
    <label for={props.name}>{props.children}
    </label>
    
    </div>
  )
}

export default Label