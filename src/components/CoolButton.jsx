import React from 'react'

function CoolButton({onSubmit}) {
  return (
    <button onClick={onSubmit} className="btn btn-active">Search</button>
  )
}

export default CoolButton