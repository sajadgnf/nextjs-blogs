import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";
import Link from "next/link";
import { BlogProps, Theme } from "src/pages/blogs";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";

const useStyle = makeStyles((theme: Theme) => {
  return {
    sidebarHead: {
      transition: "all ease .2s",
      cursor: "pointer",
    },

    sideBarLink: {
      marginBottom: 10,
      fontSize: 16,
      padding: "5px 24px",
      border: "1px solid silver",
      borderRadius: 50,
      marginLeft: 20,
      whiteSpace: "nowrap",

      [theme.breakpoints.up("md")]: {
        border: 0,
        borderRadius: 0,
        marginLeft: 0,

        "&:hover": {
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.secondary.main,
        },
      },
    },

    currentCategory: {
      pointerEvents:"none",
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.main,
      [theme.breakpoints.up("md")]: {
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
      },
    },

    sideBarShevron: {
      transition: "all ease .2s",
      fontSize: 30,
    },
  };
});

const Categories = ({ postCategories }: any) => {
  const { query } = useRouter();
  const classes = useStyle();

  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box>
      {/* accordion header */}
      <Box
        className={classes.sidebarHead}
        display={{ xs: "none", md: "flex" }}
        alignItems="center"
        justifyContent="space-between"
        bgcolor="secondary.light"
        px={3}
        py={2.5}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Typography variant="h3" fontSize={18}>
          دسته بندی مقالات
        </Typography>
        <KeyboardArrowDownIcon
          className={classes.sideBarShevron}
          sx={
            isOpen
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(0deg)" }
          }
        />
      </Box>

      {/* accordion content */}
      <Box
        pb={{ xs: 0, md: 1.5 }}
        pt={3}
        flexDirection={{ xxs: "row", md: "column" }}
        bgcolor={{ xxs: "transparent", md: "#fff" }}
        overflow="auto"
        maxHeight={320}
        sx={isOpen ? { display: "flex" } : { display: "none" }}
      >
        <Link href={"/blogs"}>
          <a
            className={`
                ${classes.sideBarLink}
                ${!query.categorySlug ? classes.currentCategory : ""}
              `}
          >
            همه مقالات
          </a>
        </Link>
        {postCategories.map((category: BlogProps["category"]) => (
          <Link href={`/blogs/${category.englishTitle}`} key={category._id}>
            <a
              className={`
                ${classes.sideBarLink}
                ${
                  query.categorySlug === category.englishTitle
                    ? classes.currentCategory
                    : ""
                }
              `}
            >
              {category.title}
            </a>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Categories;
