import React from 'react'
import { User2 } from 'lucide-react';
import { Mail } from 'lucide-react';

export const Output = (props) => {

  return (
    <>
      <div className='output'>
        <div className='name-container'>
          <span className='user-icon'>
            <User2
              size={36}
            />
          </span>

          <span className='name'>
            {props.fName} {props.mName} {props.lName}
          </span>
        </div>

        <div className='email-container'>
          <span className='mail-icon'>
            <Mail
              size={36}
            />
          </span>

          <span className='email'>
            {props.Email}
          </span>
        </div>
      </div>
    </>
  )
}
