import { useAuth, useAuthAction } from "@/context/AuthContext";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import Link from "next/link";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const useStyle = makeStyles({
  link: {
    marginLeft: 26,
  },
});

const Header = () => {
  const classes = useStyle();
  const { user, loading } = useAuth();
  const dispatch = useAuthAction();

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
      <Container maxWidth="lg" sx={loading ? { opacity: 0 } : { opacity: 100 }}>
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
            {user ? (
              <>
                <Button
                  color="error"
                  onClick={() => dispatch({ type: "SIGNOUT" })}
                >
                  خروج
                </Button>
                <Link href={"/"}>
                  <a className={classes.link}>
                    <AccountCircleIcon sx={{ mt: 1, mr: 1, fontSize: 34 }} />
                  </a>
                </Link>
              </>
            ) : (
              <>
                <Link href={"/signin"}>
                  <a className={classes.link}>
                    <Typography>ورود</Typography>
                  </a>
                </Link>

                <Link href={"/signup"}>
                  <a>
                    <Typography>ثبت نام</Typography>
                  </a>
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
