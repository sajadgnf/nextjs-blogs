import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import Link from "next/link";
import React from "react";

const useStyle = makeStyles({
  link: {
    marginLeft: 26,
  },
});

const Header = () => {
  const classes = useStyle();

  return (
    <AppBar
      elevation={0}
      sx={{
        mb: 8,
        position: "static",
        bgcolor: "#fff",
        color: "#333",
        boxShadow: "rgb(0 0 0 / 10%) 0px 2px 5px",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Box display="flex" alignItems="center" flexGrow={1}>
            <Link href={"/blogs"}>
              <a className={classes.link}>
                <Typography>Blogs</Typography>
              </a>
            </Link>

            <Link href={"/"}>
              <a>
                <Typography>Home</Typography>
              </a>
            </Link>
          </Box>

          <Box display="flex" alignItems="center">
            <Link href={"/"}>
              <a className={classes.link}>
                <Typography mt={0.5}>Profile</Typography>
              </a>
            </Link>

            <Link href={"/"}>
              <a className={classes.link}>
                <Typography>ورود</Typography>
              </a>
            </Link>

            <Link href={"/"}>
              <a>
                <Typography>ثبت نام</Typography>
              </a>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
