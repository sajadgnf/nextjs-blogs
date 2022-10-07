import axios from "axios";
import { GetServerSideProps } from "next";
import queryString from "query-string";
import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import BookmarkAddRoundedIcon from "@mui/icons-material/BookmarkAddRounded";
import Link from "next/link";
import sanitizeHtml from "sanitize-html";
import { makeStyles } from "@mui/styles";
import { RiAttachmentLine } from "react-icons/ri";
import { BlogProps, Theme } from "src/pages/blogs";
import SimilarPostsList from "@/components/posts/SimilarPostsList";
import PostInteractions from "@/components/posts/PostIntractions";
import PostComments from "@/components/posts/postComponents";
import SharePost from "@/components/posts/SharePost";
import { toPersianDigits } from "@/utils/toPersianDigits";
import toLocalDate from "@/utils/toLocalDate";
import Layout from "@/containers/layout";

const useStyle = makeStyles((theme: Theme) => {
  return {
    blogCategory: {
      fontFamily: "Roboto",
      borderRadius: 40,
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      fontSize: 13,
      padding: "3px 12px",
      backgroundColor: "#fff",

      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        cursor: "pointer",
        transition: "all ease .2s",
      },
    },

    customizedIcon: {
      color: theme.palette.customGray.main,
      cursor: "pointer",
      transition: "all ease .2s",
      fontSize: 28,
      "&:hover": { color: theme.palette.customGray.dark },
    },

    linkBtns: {
      marginBottom: 10,
      padding: "5px 14px",
      border: "1px solid #eaeaea",
      borderRadius: 50,
      marginLeft: 20,
      whiteSpace: "nowrap",
      backgroundColor: "#eeeeee",
      cursor: "pointer",
      transition: "all ease .2s",
      "&:hover": {
        backgroundColor: "#dbdbdb",
      },
    },

    mainContent: {
      "& h3": {
        marginTop: 45,
      },
      "& p": {
        lineHeight: 2,
        fontSize: 18,
      },
    },
  };
});

const PostPage = ({ post }: { post: BlogProps }) => {
  const classes = useStyle();

  return (
    <Container maxWidth="lg">
      <Layout>
        <Grid container px={{ xs: 2, md: 0 }}>
          <Grid item xs={12} md={8}>
            {/* author */}
            <Box
              my={5}
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "start", md: "center" }}
            >
              <Box display="flex" alignItems="center">
                <Avatar sx={{ width: 75, height: 75, ml: 2 }} />
                <Box>
                  <Box display="flex" alignItems="center">
                    <Typography variant="subtitle1" fontWeight="bold" ml={1}>
                      {post.author.name}
                    </Typography>

                    <Link href={`/blogs/${post.category.englishTitle}`}>
                      <a className={classes.blogCategory}>
                        {post.category.title}
                      </a>
                    </Link>
                  </Box>

                  <Typography fontSize={12} my={0.6}>
                    {post.author.biography}
                  </Typography>

                  <Box display="flex" alignItems="center">
                    <Typography variant="body2">
                      {toLocalDate(post.createdAt)}
                    </Typography>

                    <Typography mx={1}>&#x2022;</Typography>

                    <Typography variant="body2">
                      خواندن {toPersianDigits(post.readingTime)} دقیقه
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                mt={{ xs: 3, md: 0 }}
                mr={1}
              >
                <RiAttachmentLine className={classes.customizedIcon} />

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
                    color: "customGray.main",
                    transition: "all ease .2s",
                    "&:hover": { color: "customGray.dark" },
                  }}
                >
                  <Typography fontSize={13}>ذخیره</Typography>
                  <BookmarkAddRoundedIcon />
                </Box>
              </Box>
            </Box>

            {/* blog content */}
            <div
              className={classes.mainContent}
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.text) }}
            ></div>

            <Box display="flex" mt={8} flexWrap="wrap">
              {["react.js", "front-end", "react.js"].map((item, index) => (
                <Typography
                  key={index}
                  fontSize={{ xs: 12, sm: 14 }}
                  className={classes.linkBtns}
                >
                  {item}
                </Typography>
              ))}
            </Box>

            {/* post interactions-share post */}
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems="center"
              justifyContent="space-between"
              my={4}
            >
              {/* like-comment-bookmark */}
              <Box width={{ xs: "80%", sm: 160 }} mb={{ xs: 2, sm: 0 }}>
                <PostInteractions post={post} isSmall={false} />
              </Box>

              {/* share post */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width={{ xs: "80%", sm: 260 }}
              >
                <SharePost post={post} />
              </Box>
            </Box>
          </Grid>

          {/* author-interactions */}
          <Grid
            item
            xs={0}
            md={4}
            mt={60}
            display={{ xs: "none", md: "grid" }}
            position="relative"
            alignItems="start"
          >
            <Box position="sticky" m="0 auto 15rem" top={350} width={160}>
              <Typography fontWeight="bold" mb={1}>
                {post.author.name}
              </Typography>
              <Typography fontSize={12}>{post.author.biography}</Typography>

              <Divider
                sx={{
                  borderRadius: 50,
                  bgcolor: "customGray.main",
                  border: "1.5px solid transparent",
                  my: 2,
                }}
              />
              <PostInteractions post={post} isSmall={false} />
            </Box>
          </Grid>

          {/* similar posts */}
          <Grid item xs={12}>
            <Divider
              sx={{
                backgroundColor: "customGray.main",
                borderColor: "customGray.main",
              }}
            />

            {/* author */}
            <Box
              my={5}
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "start", md: "center" }}
            >
              <Box display="flex" alignItems="center">
                <Avatar sx={{ width: 50, height: 50, ml: 2 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold" ml={1}>
                    {post.author.name}
                  </Typography>

                  <Typography fontSize={12} mt={0.6}>
                    {post.author.biography}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Typography
              variant="h4"
              component="h3"
              fontWeight="black"
              mt={10}
              mb={5}
            >
              پست های مشابه
            </Typography>

            <Grid container spacing={5}>
              <SimilarPostsList blogsData={post.related} />
            </Grid>
          </Grid>

          {/* comments */}
          <Grid item xs={12}>
            <PostComments post={post} />
          </Grid>
        </Grid>
      </Layout>
    </Container>
  );
};

export default PostPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`);

  return {
    props: {
      post: data,
    },
  };
};
