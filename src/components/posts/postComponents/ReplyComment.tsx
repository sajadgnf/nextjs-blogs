import React from "react";
import { CommentProps } from "./index";
import SingleComment from "./SingleComment";
import Box from "@mui/material/Box";

type Props = {
  comments: [CommentProps];
  parentsCommentId: number;
  postId: string;
};

const ReplyComment = ({ comments, parentsCommentId, postId }: Props) => {
  return (
    <Box mr={3}>
      {comments.map(
        (comment: CommentProps) =>
          comment.responseTo === parentsCommentId && (
            <Box key={comment._id} mt={3}>
              <SingleComment comment={comment} postId={postId} />
              <ReplyComment
                comments={comments}
                parentsCommentId={comment._id}
                postId={postId}
              />
            </Box>
          )
      )}
    </Box>
  );
};

export default ReplyComment;
