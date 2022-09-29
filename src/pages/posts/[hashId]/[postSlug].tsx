import axios from "axios";
import { GetServerSideProps } from "next";
import { BlogProps, Theme } from "src/pages/blogs";
import queryString from "query-string";
import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import BookmarkAddRoundedIcon from "@mui/icons-material/BookmarkAddRounded";
import BookmarkAddedRoundedIcon from "@mui/icons-material/BookmarkAddedRounded";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import { toPersianDigits } from "@/utils/toPersianDigits";

const useStyle = makeStyles((theme: Theme) => {
  return {
    blogCategory: {
      fontFamily: "Roboto",
      borderRadius: 40,
      border: `1px solid ${theme.palette.customBlue.main}`,
      color: theme.palette.customBlue.main,
      fontSize: 13,
      padding: "3px 12px",
      backgroundColor: "#fff",

      "&:hover": {
        backgroundColor: theme.palette.customBlue.main,
        color: "#fff",
        cursor: "pointer",
        transition: "all ease .2s",
      },
    },
  };
});

const PostPage = ({ post }: { post: BlogProps }) => {

  const classes = useStyle();

  return (
    <Container maxWidth="lg">
      {/* author */}
      <Box
        mt={5}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex" alignItems="center">
          <Avatar sx={{ width: 75, height: 75, ml: 2 }} />
          <Box>
            <Box display="flex" alignItems="center">
              <Typography variant="subtitle1" fontWeight="bold" ml={1}>
                {post.author.name}
              </Typography>

              <Link href={`/blogs/${post.category.englishTitle}`}>
                <a className={classes.blogCategory}>{post.category.title}</a>
              </Link>
            </Box>

            <Typography fontSize={12} my={0.6}>
              {post.author.biography}
            </Typography>

            <Box display="flex" alignItems="center">
              <Typography variant="body2">
                {new Date(post.createdAt).toLocaleDateString("fa-IR")}
              </Typography>

              <Typography mx={1}>&#x2022;</Typography>

              <Typography variant="body2">
                خواندن {toPersianDigits(post.readingTime)} دقیقه
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box display="flex" alignItems="center">
          <AttachFileIcon
            sx={{
              color: "#8b8b8b",
              cursor: "pointer",
              transition: "all ease .2s",
              "&:hover": { color: "#454545" },
            }}
          />

          <Box
            display="flex"
            alignItems="center"
            border="1px solid #cdcdcd"
            borderRadius={10}
            px={2}
            py={0.2}
            mr={2}
            sx={{
              cursor: "pointer",
              color: "#8b8b8b",
              transition: "all ease .2s",
              "&:hover": { color: "#454545" },
            }}
          >
            <Typography fontSize={13}>ذخیره</Typography>
            <BookmarkAddRoundedIcon />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default PostPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  console.log(query);

  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`);

  return {
    props: {
      post: data,
    },
  };
};
