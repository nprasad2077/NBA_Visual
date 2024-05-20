import React, { useState } from 'react'
import InputBox from './InputBox.jsx'
import CoolButton from './CoolButton.jsx'


function InputForm({onSubmit}) {
  const [query, setQuery] = useState('')
  
  const handleSubmit = () => {
    onSubmit(query)
  }



  return (
    <div>
        <InputBox query={query} setQuery={setQuery} />
        <CoolButton onSubmit={handleSubmit} />
    </div>
  )
}

export default InputForm