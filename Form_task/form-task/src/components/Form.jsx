import React from 'react';
import Input from './Input';
import Label from './Label';

function Form (){
    return(
        <div>
            <Label 
                name="fname"
                children="First Name"
            />
            <Input 
                type="text"
                placeholder="Enter your First name"
                name="fname"
            />
            <Label 
                name="lname"
                children="Last Name"
            />
            <Input 
                type="text"
                placeholder='Enter your Last Name'
                name='lname'
            />
            <Label 
                name="phone"
                children="Phone Number"
            />
            <Input 
                type="number"
                name='phone'
            />
            <select name="role">
                <option value="projectOwner">Project Owner</option>
                <option value="scrumMaster">Scrum Master</option>
                <option value="designer">Designer</option>
                <option value="developer">Developer</option>
            </select>

            <Label 
                name="message"
                children="Message"
            />
            <Input
            type='textarea'
            name='message'
            placeholder='Enter your messager here' 

            />
        </div>
    )
}

export default Form