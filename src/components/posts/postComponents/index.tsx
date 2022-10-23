import React, { useState } from "react";
import { BlogProps } from "src/pages/blogs";
import { Typography, Grid } from "@mui/material";
import SingleComment from "./SingleComment";
import CommentForm from "./CommentForm";
import ReplyComment from "./ReplyComment";

export interface CommentProps {
  _id: number;
  responseTo: number;
  status: number;
  writer: { name: string };
  createdAt: Date;
  content: string;
}

const PostComments = ({ post }: { post: BlogProps }) => {
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
                <SingleComment comment={comment} postId={post._id} />
                <ReplyComment
                  comments={post.comments}
                  parentsCommentId={comment._id}
                  postId={post._id}
                />
              </Grid>
            )
        )}
      </Grid>

      {/* base comment form */}
      <Typography mb={2} mt={4}>
        ارسال دیدگاه جدید
      </Typography>
      <CommentForm postId={post._id} responseTo={null} />
    </>
  );
};

export default PostComments;
