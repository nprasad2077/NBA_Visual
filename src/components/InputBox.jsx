import React from 'react'

function InputBox({query, setQuery}) {
  return (
    <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
  )
}

export default InputBox