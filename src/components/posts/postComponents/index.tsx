import React, { useState } from "react";
import { BlogProps } from "src/pages/blogs";
import { Typography, Grid } from "@mui/material";
import SingleComment from "./SingleComment";
import CommentForm from "./CommentForm";

export interface CommentProps {
  _id: number;
  responseTo: boolean;
  status: number;
  writer: { name: string };
  createdAt: Date;
  content: string;
}

const PostComments = ({ post }: { post: BlogProps }) => {
  const [commentValue, setCommentValue] = useState("");

  return (
    <>
      <Typography variant="h4" component="h3" fontWeight="black" mt={10} mb={5}>
        نظرات
      </Typography>

      {/* comments */}
      <Grid container spacing={3}>
        {post.comments.map(
          (comment: CommentProps) =>
            !comment.responseTo &&
            comment.status === 2 && (
              <Grid item xs={12} key={comment._id}>
                <SingleComment comment={comment} />
              </Grid>
            )
        )}
      </Grid>

      {/* base comment form */}
      <form>
        <Typography mb={2} mt={4}>
          ارسال دیدگاه جدید
        </Typography>
        <CommentForm
          commentValue={commentValue}
          setCommentValue={setCommentValue}
        />
      </form>
    </>
  );
};

export default PostComments;
