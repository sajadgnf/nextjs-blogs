import { Box, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { BsBookmark } from "react-icons/Bs";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { BlogProps } from "src/pages/blogs";
import { toPersianDigits } from "@/utils/toPersianDigits";

type InteractionProps = {
  post: BlogProps;
  isSmall: Boolean;
};

const PostInteractions = ({ post, isSmall }: InteractionProps) => {
  const bookmarkIconSize = () =>
    isSmall
      ? { fontSize: 18 }
      : {
          fontSize: 28,
          transition: "all ease .2s",
          "&:hover": { color: "primary.main" },
        };

  const likeIconSize = () =>
    isSmall
      ? { fontSize: 15 }
      : {
          fontSize: 24,
          transition: "all ease .2s",
          "&:hover": { color: "customRed.main" },
        };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box
        ml={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={0.3}
        px={0.5}
        borderRadius={1.2}
        bgcolor={isSmall ? "#e5e7eb" : "transparent"}
        color={isSmall ? "customGray.main" : "customGray.light"}
      >
        <ChatOutlinedIcon sx={{ ml: 0.3, fontSize: isSmall ? 16 : 24 }} />
        <Typography fontSize={isSmall ? 11 : 18}>
          {toPersianDigits(post.commentsCount)}
        </Typography>
      </Box>

      <Box
        sx={[
          {
            ml: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "all ease .2s",
            cursor: "pointer",
          },
          isSmall
            ? {
                backgroundColor: "customRed.light",
                color: "customRed.main",
                py: 0.2,
                px: 0.3,
                borderRadius: 1.2,
                "&:hover": {
                  bgcolor: "customRed.main",
                  color: "#fff",
                },
              }
            : {
                backgroundColor: "transparent",
                color: "customGray.light",
              },
        ]}
      >
        {post.isLiked ? (
          <FavoriteIcon sx={[{ ml: 0.2 }, likeIconSize()]} />
        ) : (
          <FavoriteBorderIcon sx={[{ ml: 0.2 }, likeIconSize()]} />
        )}
        <Typography fontSize={isSmall ? 12 : 16}>
          {toPersianDigits(post.likesCount)}
        </Typography>
      </Box>

      <Box
        sx={[
          {
            cursor: "pointer",
            borderRadius: 1.2,
            transition: "all ease .2s",
            display: "flex",
            p: 0.3,
            justifyContent: "center",
            alignItems: "center",
          },
          isSmall
            ? {
                backgroundColor: "primary.light",
                color: "primary.main",

                "&:hover": {
                  bgcolor: "primary.main",
                  color: "#fff",
                },
              }
            : {
                backgroundColor: "transparent",
                color: "customGray.light",
              },
        ]}
      >
        {post.isBookMarked ? (
          <BookmarkIcon sx={bookmarkIconSize()} />
        ) : (
          <BookmarkBorderIcon sx={bookmarkIconSize()} />
        )}
      </Box>
    </Box>
  );
};

export default PostInteractions;
