import { Box, Container, Grid } from "@mui/material";
import React from "react";
import axios from "axios";
import PostList from "@/components/posts/PostList";
import Categories from "@/components/posts/Categories";
import Sortbar from "@/components/posts/Sortbar";
import { GetServerSideProps } from "next";
import queryString from "query-string";
import Layout from "@/containers/layout";
import http from "@/services/httpService";
import PaginationComponent from "@/common/Pagination";

function CategoryPage({ blogsData, postCategories }: any) {
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

            <Box mt={10} justifyContent="center" display="flex">
              <PaginationComponent
                totalPages={blogsData.totalPages}
                page={blogsData.page}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default CategoryPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, req } = context;

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
