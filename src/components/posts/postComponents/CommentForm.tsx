import React from "react";
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/styles";

export const CustomTextField = styled(TextField)({
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

interface CommentProps {
  commentValue: string;
  setCommentValue: (value: string) => void;
}

const CommentForm = ({ commentValue, setCommentValue }: CommentProps) => {
  return (
    <>
      <CustomTextField
        variant="outlined"
        placeholder="متن کامنت..."
        value={commentValue}
        name="text"
        onChange={(e) => setCommentValue(e.target.value)}
        fullWidth
        multiline
        minRows={2}
      />
      <Button
        variant="contained"
        sx={{
          marginTop: 2,
          width: 200,
          height: 50,
          borderRadius: 2,
          backgroundColor: "primary",
          background:
            "linear-gradient(121deg, rgba(60,110,247,1) 0%, rgba(115,61,216,1) 100%)",
        }}
      >
        ارسال نظر
      </Button>
    </>
  );
};

export default CommentForm;
