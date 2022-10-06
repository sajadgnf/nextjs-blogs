import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { RiListUnordered } from "react-icons/ri";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import { Theme } from "src/pages/blogs";

const useStyle = makeStyles((theme: Theme) => {
  return {
    filterItem: {
      cursor: "pointer",
      padding: "16px 0",
      transition: "all ease .2s",
      "&:hover": {
        borderBottom: `3px solid ${theme.palette.secondary.main}`,
      },
    },

    filterTitle: {
      border: "1px solid silver",
      borderRadius: 50,
      whiteSpace: "nowrap",
      width: "100%",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "5px 0",
      marginTop: 20,

      "& span": {
        display: "none",
      },

      [theme.breakpoints.up("md")]: {
        border: 0,
        borderRadius: 0,
        width: "unset",
        cursor: "unset",
        marginLeft: 24,
        marginTop: 0,

        "& span": {
          display: "inline-block",
        },
      },
    },

    drawerFilterItem: {
      cursor: "pointer",
      transition: "all ease .2s",
      borderRadius: 5,

      "&:focus": {
        borderRight: `5px solid ${theme.palette.secondary.main}`,
      },

      "&:focus p": {
        color: theme.palette.secondary.main,
      },

      "& p": {
        margin: "auto",
      },
    },
  };
});

const Sortbar = () => {
  const classes = useStyle();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box className={classes.filterTitle} onClick={() => setIsOpen(!isOpen)}>
        <RiListUnordered style={{ color: "#666666", fontSize: 20 }} />
        <Typography color="textSecondary" mr={1}>
          مرتب سازی<span>:</span>
        </Typography>
      </Box>

      <Box display={{ xs: "none", md: "flex" }}>
        <Typography ml={4} className={classes.filterItem}>
          جدید ترین
        </Typography>
        <Typography ml={4} className={classes.filterItem}>
          پر بازدید ترین
        </Typography>
        <Typography ml={4} className={classes.filterItem}>
          محبوب ترین
        </Typography>
      </Box>

      {/* filters drawer */}
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Drawer
          sx={{
            width: "100%",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              borderRadius: "45px 45px 0 0",
              width: "100%",
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="bottom"
          open={isOpen}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={2}
            position="relative"
          >
            <Typography>فیلترها</Typography>
            <CloseIcon
              sx={{ position: "absolute", left: 20, cusor: "pointer" }}
              onClick={() => setIsOpen(false)}
            />
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemButton className={classes.drawerFilterItem}>
                <Typography> جدید ترین</Typography>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton className={classes.drawerFilterItem}>
                <Typography>پر بازدید ترین</Typography>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton className={classes.drawerFilterItem}>
                <Typography>محبوب ترین</Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Modal>
    </>
  );
};

export default Sortbar;
