import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  return (
    <Box
      position="absolute"
      bottom="0"
      textAlign="center"
      width="100%"
      bgcolor="#f0f0f0"
      py={1}
    >
      <Typography display="flex" justifyContent="center">
        by Sajad&nbsp;
        <FavoriteIcon sx={{ color: "customRed.main" }} fontSize="small" />
        &nbsp;Made with
      </Typography>
    </Box>
  );
};

export default Footer;
