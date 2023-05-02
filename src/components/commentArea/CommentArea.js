import React, { useState } from 'react'
import CommentList from '../commentList/CommentList'
import CommentInput from '../CommentInput/CommentInput'

const CommentArea = () => {
    const [comments, setComments] = useState([
        { message: "Min första kommentar" }
    ])


    return (
        <div>
            <CommentInput setComments={setComments} />
            <CommentList comments={comments} />
        </div>
    )
}

export default CommentArea
