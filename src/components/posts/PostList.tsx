import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { BlogProps, Theme } from "src/pages/blogs";
import { makeStyles } from "@mui/styles";
import Link from "next/link";

const useStyle = makeStyles((theme: Theme) => {
  return {
    blogImage: {
      objectFit: "cover",
    },

    blogCategory: {
      fontFamily: "Roboto",
      borderRadius: 40,
      backgroundColor: theme.palette.customBlue.light,
      color: theme.palette.customBlue.main,
      fontSize: 13,
      padding: "3px 12px",

      "&:hover": {
        backgroundColor: theme.palette.customBlue.main,
        color: "#fff",
        cursor: "pointer",
        transition: "all ease .2s",
      },
    },

    customBox: {
      display: "-webkit-box",
      boxOrient: "vertical",
      lineClamp: 2,
    },
  };
});

const PostList = ({ blogsData }: any) => {
  const classes = useStyle();

  return blogsData.docs.map((item: BlogProps) => (
    <Grid item key={item._id} xs={12} md={6} lg={4}>
      <Card
        elevation={0}
        sx={{
          borderRadius: 10,
          bgcolor: "#fff",
          border: "1px solid #eeeeee",
        }}
      >
        {/* cover image */}
        <Link href={`/posts/${item.hashId}/${item.slug}`}>
          <a>
            <CardMedia
              component="img"
              alt="green iguana"
              height="200"
              sx={{ objectFit: "contain" }}
              image={item.coverImage}
            />
          </a>
        </Link>

        {/* blogs content */}
        <CardContent
          sx={{
            backgroundColor: "#f9f9f9",
            mx: 1.5,
            my: 1.5,
            px: 1.5,
            py: 1.5,
            minHeight: 180,
            borderRadius: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* blogs title */}
          <Link href={`/posts/${item.hashId}/${item.slug}`}>
            <a>
              <Typography
                variant="h6"
                component="h3"
                flex={1}
                mx={1}
                classes={{ root: classes.customBox }}
              >
                {item.title}
              </Typography>
            </a>
          </Link>

          {/* blog authors-category */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Avatar sx={{ width: 25, height: 25 }} />
              <Typography variant="subtitle2" color="textSecondary" mr={1}>
                {item.author.name}
              </Typography>
            </Box>

            <Link href={`/blogs/${item.category.englishTitle}`}>
              <a className={classes.blogCategory}>{item.category.title}</a>
            </Link>
          </Box>

          {/* blogs interaction */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box
                bgcolor="#e5e7eb"
                ml={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                py={0.3}
                px={0.5}
                borderRadius={1.2}
              >
                <MessageIcon sx={{ ml: 0.3, fontSize: 15 }} />
                <Typography fontSize={11}>{item.commentsCount}</Typography>
              </Box>

              <Box
                bgcolor="customRed.light"
                ml={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  cursor: "pointer",
                  color: "customRed.main",
                  transition: "all ease .2s",
                  py: 0.2,
                  px: 0.3,
                  borderRadius: 1.2,
                  "&:hover": {
                    bgcolor: "customRed.main",
                    color: "#fff",
                  },
                }}
              >
                <FavoriteBorderIcon sx={{ ml: 0.2, fontSize: 15 }} />
                <Typography fontSize={12}>{item.likesCount}</Typography>
              </Box>

              <BookmarkBorderIcon
                sx={{
                  bgcolor: "customBlue.light",
                  color: "customBlue.main",
                  cursor: "pointer",
                  py: 0.1,
                  px: 0.4,
                  fontSize: 24,
                  borderRadius: 1.2,
                  transition: "all ease .2s",
                  "&:hover": {
                    bgcolor: "customBlue.main",
                    color: "#fff",
                  },
                }}
              />
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center">
              <AccessTimeIcon
                sx={{ fontSize: "15px", color: "#626262", ml: 0.3 }}
              />
              <Typography variant="body2" fontSize="12px" color="textSecondary">
                زمان مطالعه: {item.readingTime} دقیقه
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  ));
};

export default PostList;
