import React from "react";
import { CommentProps } from "./index";
import SingleComment from "./SingleComment";
import Box from "@mui/material/Box";

type Props = {
  comments: [CommentProps];
  parentsCommentId: number;
};

const ReplyComment = ({ comments, parentsCommentId }: Props) => {
  return (
    <Box mr={3}>
      {comments.map(
        (comment: CommentProps) =>
          comment.responseTo === parentsCommentId && (
            <Box key={comment._id} mt={3}>
              <SingleComment comment={comment} />
              <ReplyComment
                comments={comments}
                parentsCommentId={comment._id}
              />
            </Box>
          )
      )}
    </Box>
  );
};

export default ReplyComment;
