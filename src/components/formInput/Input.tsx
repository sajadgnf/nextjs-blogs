import { styled } from "@mui/styles";
import { TextField, Typography } from "@mui/material";
import React, { ChangeEventHandler, FocusEventHandler } from "react";
import { ValuesProps } from "src/pages/signup";
import { Box } from "@mui/system";

type InputProps = {
  name: string;
  label: string;
  type?: string;
  formik: any;
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
    <Box mb={2}>
      <label htmlFor={name}>{label}</label>
      <CustomTextField
        type={type}
        {...formik.getFieldProps(name)}
        id={name}
        name={name}
        fullWidth
        sx={{ mt: 1, "& input": { px: 2, py: 1 } }}
      />
      {formik.errors[name] && formik.touched[name] && (
        <Typography color="error" fontSize={14}>
          {formik.errors[name]}
        </Typography>
      )}
    </Box>
  );
};

export default Input;
