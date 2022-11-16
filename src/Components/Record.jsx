import React from 'react'

function Record({name, count}) {
  return (
    <div className='record'>
      <p className='name'>Name: {name}</p>
      <p className='count'>Count: {count}</p>
  </div>
  )
}

export default Record