import React, { useState } from 'react'
import InputBox from './InputBox.jsx'
import CoolButton from './CoolButton.jsx'


function InputForm({onSubmit}) {
  const [query, setQuery] = useState('')
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = () => {
    onSubmit(query)
    setSubmitted(true)
  }



  return (
    <div class='flex flex-row space-x-4'>
        {submitted && <div className='mb-6'>{query}</div>}
        <InputBox query={query} setQuery={setQuery} />
        <CoolButton onSubmit={handleSubmit} />
    </div>
  )
}

export default InputForm