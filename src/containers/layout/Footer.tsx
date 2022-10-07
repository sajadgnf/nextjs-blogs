import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box
      position="relative"
      bottom="0"
      textAlign="center"
      width="100%"
      bgcolor="#f0f0f0"
      py={1}
    >
      <Typography>All Rights Reserved By Sajad &copy; </Typography>
    </Box>
  );
};

export default Footer;
