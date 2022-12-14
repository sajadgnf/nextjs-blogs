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
import { BlogProps, Theme } from "src/pages/blogs";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PostInteractions from "./PostIntractions";
import { toPersianDigits } from "@/utils/toPersianDigits";

const useStyle = makeStyles((theme: Theme) => {
  return {
    blogImage: {
      objectFit: "cover",
    },

    blogCategory: {
      fontFamily: "Roboto",
      borderRadius: 40,
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.main,
      fontSize: 13,
      padding: "3px 12px",

      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        cursor: "pointer",
        transition: "all ease .2s",
      },
    },

    customBox: {
      display: "-webkit-box",
      boxOrient: "vertical",
      lineClamp: 2,
      transition: "all ease .2s",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  };
});

const PostList = ({ blogsData }: any) => {
  const classes = useStyle();

  return blogsData.map((post: BlogProps) => (
    <Grid item key={post._id} xs={12} md={6} lg={4}>
      <Card
        elevation={0}
        sx={{
          borderRadius: 10,
          bgcolor: "#fff",
          border: "1px solid #eeeeee",
        }}
      >
        {/* cover image */}
        <Link href={`/posts/${post.hashId}/${post.slug}`}>
          <a>
            <CardMedia
              component="img"
              alt="green iguana"
              height="200"
              sx={{ objectFit: "contain" }}
              image={post.coverImage}
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
          <Link href={`/posts/${post.hashId}/${post.slug}`}>
            <a>
              <Typography
                variant="h6"
                component="h3"
                flex={1}
                mx={1}
                classes={{ root: classes.customBox }}
              >
                {post.title}
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
                {post.author.name}
              </Typography>
            </Box>

            <Link href={`/blogs/${post.category.englishTitle}`}>
              <a className={classes.blogCategory}>{post.category.title}</a>
            </Link>
          </Box>

          {/* blogs interaction */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <PostInteractions post={post} isSmall />

            <Box display="flex" justifyContent="center" alignItems="center">
              <AccessTimeIcon
                sx={{ fontSize: "15px", color: "#626262", ml: 0.3 }}
              />
              <Typography variant="body2" fontSize="12px" color="textSecondary">
                ???????? ????????????: {toPersianDigits(post.readingTime)} ??????????
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  ));
};

export default PostList;
