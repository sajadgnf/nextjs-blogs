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
import { RiListUnordered } from "react-icons/ri";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import { Theme } from "src/pages/blogs";
import { useRouter } from "next/router";
import routerPush from "@/utils/routerPush";

const useStyle = makeStyles((theme: Theme) => {
  return {
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
      pointerEvents: "all",

      "& span": {
        display: "none",
      },

      [theme.breakpoints.up("md")]: {
        pointerEvents: "none",
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

    filterItem: {
      cursor: "pointer",
      padding: "16px 0",
      transition: "all ease .2s",
    },

    drawerFilterItem: {
      cursor: "pointer",
      transition: "all ease .2s",
      borderRadius: 5,

      "& p": {
        margin: "auto",
      },
    },
  };
});

const Sortbar = () => {
  const router = useRouter();
  const classes = useStyle();
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState(router.query.sort || "newest");

  const sortOptions = [
    { label: "جدید ترین", id: "newest" },
    { label: "پربازدید ترین", id: "most" },
    { label: "محبوب ترین", id: "popular" },
  ];

  const sortHandler = (id: string) => {
    setSort(id);
    router.query.sort = id;
    routerPush(router);
  };

  return (
    <>
      <Box className={classes.filterTitle} onClick={() => setIsOpen(!isOpen)}>
        <RiListUnordered style={{ color: "#666666", fontSize: 20 }} />
        <Typography color="textSecondary" mr={1}>
          مرتب سازی<span>:</span>
        </Typography>
      </Box>

      <Box display={{ xs: "none", md: "flex" }}>
        {sortOptions.map(({ label, id }) => (
          <Typography
            key={id}
            ml={4}
            position="relative"
            sx={[
              id === sort && {
                color: "secondary.main",
              },
            ]}
            className={classes.filterItem}
            onClick={() => sortHandler(id)}
          >
            {label}
            {id === sort && (
              <Typography
                component="span"
                width={38}
                height={3}
                position="absolute"
                bottom={0}
                right={0}
                borderRadius={100}
                sx={{
                  backgroundColor: "secondary.main",
                  transition: "all ease .2s",
                }}
              ></Typography>
            )}
          </Typography>
        ))}
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
            {sortOptions.map(({ label, id }) => (
              <ListItem disablePadding key={id}>
                <ListItemButton
                  sx={[
                    id === sort && {
                      borderRight: `5px solid`,
                      borderRightColor: "secondary.main",
                    },
                  ]}
                  className={classes.drawerFilterItem}
                  onClick={() => sortHandler(id)}
                >
                  <Typography color={id === sort ? "secondary" : ""}>
                    {label}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Modal>
    </>
  );
};

export default Sortbar;
