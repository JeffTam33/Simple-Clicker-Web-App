import React, { useState } from 'react'

function Record({name, count, id, removeMethod}) {

  return (
    <div>
      <div className='record'>
        <p className='name'>Name: {name}</p>
        <p className='count'>Count: {count}</p>
      </div>
      <div className='delete_option' onClick={() => removeMethod(id)}>
        X
      </div>
    </div>

  )
}

export default Record