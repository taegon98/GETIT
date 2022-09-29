import React from "react";
import Comment from "./Comment";
const comments = [
    {
        name: "황효성",
        comment: "만나서 반갑습니다."
    },
    {
        name: "이석환",
        comment: "리액트로 취업해야겠습니다."
    },
];
function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    );
}

export default CommentList;