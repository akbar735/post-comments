import "./Comment.css"
export default function Comment({comment = {},level,...props}){
   
    return (
        <>  
            <div className="comments-container" style={{marginLeft: `${30*level}px`}}>
                <span>{comment.message}</span>
            </div>
            {comment.replies &&  comment.replies.map(comment => {
                    return <Comment comment = {comment} level = {level+1}/>
            })}
        </>
       
    )
}