import React from 'react'

const Form = ({value,onChange}) => {
  return (
    <form>
        <input 
            type="text" 
            name='value'
            onChange={onChange}
            placeholder='Which Pokemon?'
            value={value}
        />
        <button onClick="">Fetch!</button>
    </form>
  )
}

export default Form
