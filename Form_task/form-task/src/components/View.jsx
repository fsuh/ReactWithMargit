import React from 'react'
import Paragraph from './Paragraph';


function View () {
  return (
    <div className='Output'>
        <h2> This is your input:</h2>
        <Paragraph 
            children="First Name:"
        />
        <Paragraph 
            children="Last Name:"
        />
        <Paragraph 
            children="Phone Number:"
        />
        <Paragraph 
            children="Role:"
        />
        <Paragraph 
            children="Message:"
        />
        
    </div>
  )
}

export default View;
