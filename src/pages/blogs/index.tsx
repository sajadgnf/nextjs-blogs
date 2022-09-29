import { Box, Container, Grid } from "@mui/material";
import React from "react";
import axios from "axios";
import PostList from "@/components/posts/PostList";
import Categories from "@/components/posts/Categories";
import Sortbar from "@/components/posts/Sortbar";

export interface Theme {
  palette: {
    customPurple: string;
    customBlue: {
      light: string;
      main: string;
    };
    customRed: {
      light: string;
      main: string;
    };
  };
  breakpoints: any;
}

export interface BlogProps {
  _id: string;
  slug: string;
  hashId: string;
  createdAt: string;
  title: string;
  coverImage: string;
  readingTime: string;
  likesCount: string;
  commentsCount: string;
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
    <Container maxWidth="lg">
      <Grid container mt={15}>
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
  );
}

export default Blogs;

export async function getServerSideProps() {
  const { data: result } = await axios.get(
    "http://localhost:5000/api/posts?page=1&limit=10"
  );
  const { data: postCategories } = await axios.get(
    "http://localhost:5000/api/post-category"
  );

  return {
    props: {
      blogsData: result.data,
      postCategories: postCategories.data,
    },
  };
}
