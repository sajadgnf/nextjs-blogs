import { Box, Container, Grid } from "@mui/material";
import React from "react";
import PostList from "@/components/posts/PostList";
import Categories from "@/components/posts/Categories";
import Sortbar from "@/components/posts/Sortbar";
import Layout from "@/containers/layout";
import { GetServerSideProps } from "next";
import http from "@/services/httpService";
import queryString from "query-string";

export interface Theme {
  palette: {
    secondary: {
      light: string;
      main: string;
    };
    primary: {
      light: string;
      main: string;
    };
    customRed: {
      light: string;
      main: string;
    };
    customGray: {
      light: string;
      main: string;
      dark: string;
    };
  };
  breakpoints: any;
}

export interface BlogProps {
  _id: string;
  slug: string;
  hashId: string;
  createdAt: Date;
  title: string;
  coverImage: string;
  text: string;
  readingTime: number;
  likesCount: number;
  commentsCount: number;
  isLiked: Boolean;
  isBookmarked: Boolean;
  related: object;
  comments: any;

  category: {
    englishTitle: string;
    title: string;
    _id: string;
  };

  author: {
    name: string;
    biography: string;
  };
}

function Blogs({ blogsData, postCategories }: any) {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Grid container pb={10}>
          {/* category section */}
          <Grid
            item
            xs={12}
            md={2.5}
            overflow="hidden"
            borderRadius={6}
            height="fit-content"
          >
            <Categories postCategories={postCategories} />
          </Grid>

          <Grid item xs={12} md={8.5} mr={{ xs: 0, md: 4 }}>
            {/* sortbar */}
            <Box
              display="flex"
              bgcolor={{ xs: "transparent", md: "#fff" }}
              borderRadius={6}
              mb={6}
              px={{ xs: 0, md: 2 }}
            >
              <Sortbar />
            </Box>

            {/* blogs section */}
            <Grid container spacing={3}>
              <PostList blogsData={blogsData} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Blogs;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const { data: result } = await http.get(
    `/posts?${queryString.stringify(query)}`,
    {
      headers: {
        cookie: req.headers.cookie || "",
      },
    }
  );
  const { data: postCategories } = await http.get(`/post-category`);

  return {
    props: {
      blogsData: result.data.docs,
      postCategories: postCategories.data,
    },
  };
};
