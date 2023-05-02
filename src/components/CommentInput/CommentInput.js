import React, { useState } from 'react'

const CommentInput = ({setComments}) => {
    const [text, setText] = useState("")
    const handleClick = (e) => {
        e.preventDefault();
        setComments(prev => [...prev, {message: text}]);
    }
  return (
    <div>
      <h3>Add Comment section</h3>
      <input placeholder='Add comment....' value={text} onChange={e =>setText(e.target.value)}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default CommentInput
