import React, { useState } from "react";
import { BlogProps } from "src/pages/blogs";
import { Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/styles";

const CustomTextField = styled(TextField)({
  backgroundColor: "#fff",
  "& label": {
    transformOrigin: "right !important",
    left: "inherit !important",
    right: "1.75rem !important",
    overflow: "unset",
  },
  "& legend": {
    textAlign: "start",
  },
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "3px solid #c8c8c8",
      borderRadius: 10,
    },

    "&:hover fieldset": {
      border: "3px solid #c8c8c8",
      borderRadius: 10,
    },
    "&.Mui-focused fieldset": {
      border: "3px solid #3c6ef7",
      borderRadius: 10,
    },
  },
});

const PostComments = ({ post }: { post: BlogProps }) => {
  const [comment, setComment] = useState("");

  return (
    <>
      <Typography variant="h4" component="h3" fontWeight="black" mt={10} mb={5}>
        نظرات
      </Typography>

      {/* base comment form */}
      <form>
        <Typography mb={2}>ارسال دیدگاه جدید</Typography>
        <CustomTextField
          variant="outlined"
          placeholder="متن کامنت..."
          value={comment}
          name="text"
          onChange={(e) => setComment(e.target.value)}
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
    </>
  );
};

export default PostComments;
