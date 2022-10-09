import { styled } from "@mui/styles";
import { TextField } from "@mui/material";
import React from "react";

type InputProps = {
  name: string;
  label: string;
  type?: string;
  formik: object;
};

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
      border: "2px solid #d8d8d8",
      borderRadius: 5,
    },

    "&:hover fieldset": {
      border: "2px solid #c8c8c8",
      borderRadius: 5,
    },
    "&.Mui-focused fieldset": {
      border: "2px solid #5482ff",
      borderRadius: 5,
    },
  },
});

const Input = ({ name, label, formik, type = "text" }: InputProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <CustomTextField
        type={type}
        id={name}
        name={name}
        fullWidth
        sx={{ mt: 1, mb: 2, "& input": { px: 2, py: 1 } }}
      />
    </>
  );
};

export default Input;
