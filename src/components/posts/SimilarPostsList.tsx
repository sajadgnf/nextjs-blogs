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
import { toPersianDigits } from "@/utils/toPersianDigits";

const useStyle = makeStyles((theme: Theme) => {
  return {
    blogImage: {
      objectFit: "cover",
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

const SimilarPostsList = ({ blogsData }: any) => {
  const classes = useStyle();

  return blogsData.map((post: BlogProps) => (
    <Grid item key={post._id} xs={12} md={6} lg={4}>
      <Card
        elevation={0}
        sx={{
          borderRadius: 10,
          bgcolor: "#fff",
          border: "1px solid #bebebe",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {/* cover image */}
        <Link href={`/posts/${post.hashId}/${post.slug}`}>
          <a>
            <CardMedia
              component="img"
              alt="green iguana"
              height="150"
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
                variant="h3"
                fontSize={16}
                fontWeight="bold"
                mb={2}
                classes={{ root: classes.customBox }}
              >
                {post.title}
              </Typography>
            </a>
          </Link>

          {/* blog authors-reading time */}
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
              <Avatar sx={{ width: 35, height: 35 }} />
              <Box mr={1}>
                <Typography fontSize="12px">{post.author.name}</Typography>
                <Typography fontSize="12px" color="textSecondary">
                  زمان مطالعه: {toPersianDigits(post.readingTime)} دقیقه
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  ));
};

export default SimilarPostsList;
