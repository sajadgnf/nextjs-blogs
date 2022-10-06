import React, { useState } from "react";
import { Box, Avatar, Typography, Button } from "@mui/material";
import { CommentProps, CustomTextField } from "./index";
import toLocalDate from "@/utils/toLocalDate";

const SingleComment = ({ comment }: { comment: CommentProps }) => {
  const [replyTo, setReplyTo] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  const { writer, createdAt, content } = comment;
  return (
    <Box borderRadius={5} border="1px solid #e0e0e0" p={2}>
      {/* writer */}
      <Box display="flex" alignItems="center">
        <Avatar />

        <Box mr={2}>
          <Typography fontSize={13} fontWeight="bold" mb={0.5}>
            {writer.name}
          </Typography>
          <Typography fontSize={13}>{toLocalDate(createdAt)}</Typography>
        </Box>
      </Box>

      <Typography mt={2} mb={4}>
        {content}
      </Typography>

      <Button onClick={() => setReplyTo(!replyTo)} sx={{ mb: 2 }}>
        {replyTo ? "بیخیال" : "پاسخ به"}
      </Button>

      {/* response form */}
      {replyTo && (
        <form>
          <Typography fontSize={12} mb={2}>
            در حال پاسخ به {writer.name}
          </Typography>
          <CustomTextField
            variant="outlined"
            placeholder="متن کامنت..."
            value={commentValue}
            name="text"
            onChange={(e) => setCommentValue(e.target.value)}
            //   onFocus={(e) => focusHandler(e)}
            fullWidth
            multiline
            minRows={2}
          />

          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2, width: 200, height: 50, borderRadius: 2 }}
          >
            ارسال نظر
          </Button>
        </form>
      )}
    </Box>
  );
};

export default SingleComment;
