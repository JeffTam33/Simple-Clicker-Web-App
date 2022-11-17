import React, { useState } from 'react'

function Record({name, count}) {

  return (
    <div>
      <div className='record'>
        <p className='name'>Name: {name}</p>
        <p className='count'>Count: {count}</p>
      </div>
    </div>

  )
}

export default Record