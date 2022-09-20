import React from 'react'

import User from './User'
export default function UserList({users}) {
  return (
    <div className='card'>
        {users.map((user)=>
        <User key={user.id} user={user}/>)}
    </div>
  )
}
