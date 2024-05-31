import React from 'react'
import './PromptInput.css'

const PromptInput = () => {
    const [text, setText] = React.useState('');
  return (
    <form>
    <input type="text" placeholder="Send message" className='PromptInput'/>
    </form>
  )
}

export default PromptInput
