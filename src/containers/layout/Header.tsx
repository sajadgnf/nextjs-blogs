import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import React from "react";

const Heade = () => {
  return (
    <AppBar
      elevation={1}
      sx={{ mb: 8, position: "static", bgcolor: "#fff", color: "#333" }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Box display="flex" alignItems="center" flexGrow={1}>
            <Link href={"/"}>
              <a>
                <Typography ml={3}>Blogs</Typography>
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
              <a>
                <Typography ml={3} mt={.5}>Profile</Typography>
              </a>
            </Link>

            <Link href={"/"}>
              <a>
                <Typography ml={3}>ورود</Typography>
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

export default Heade;
