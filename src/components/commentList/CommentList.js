
import Comment from '../comment/Comment'
import React from 'react'

const CommentList = ({comments}) => {
  return (
    comments.map((comment,index) => <Comment key={index} comment={comment}/>)
)
}

export default CommentList