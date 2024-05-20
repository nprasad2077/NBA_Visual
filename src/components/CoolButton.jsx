import React from 'react'

function CoolButton({onSubmit}) {
  return (
    <button onClick={onSubmit} className="btn btn-active">Default</button>
  )
}

export default CoolButton