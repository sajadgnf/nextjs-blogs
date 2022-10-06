import { Box, Typography } from "@mui/material";
import React from "react";
import {
  BsChatSquareText,
  BsBookmark,
  BsFillBookmarkFill,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";
import { BlogProps } from "src/pages/blogs";
import { toPersianDigits } from "@/utils/toPersianDigits";

type InteractionProps = {
  post: BlogProps;
  isSmall: Boolean;
};

const PostInteractions = ({ post, isSmall }: InteractionProps) => {
  const bookmarkIconSize = () =>
    isSmall ? { fontSize: 14 } : { fontSize: 18 };

  const customIconSize = () => (isSmall ? { fontSize: 14 } : { fontSize: 16 });

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      {/* comments */}
      <Box
        ml={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={0.3}
        px={0.5}
        borderRadius={1.2}
        bgcolor={isSmall ? "#e5e7eb" : "transparent"}
        color={isSmall ? "customGray.main" : "customGray.dark"}
      >
        <BsChatSquareText style={customIconSize()} />
        <Typography fontSize={isSmall ? 11 : 16} mr={0.5}>
          {toPersianDigits(post.commentsCount)}
        </Typography>
      </Box>

      {/* like */}
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
                color: "customGray.dark",
                "&:hover": { color: "customRed.main" },
              },
        ]}
      >
        {post.isLiked ? (
          <BsHeartFill className="fillHeartIcon" style={customIconSize()} />
        ) : (
          <BsHeart style={customIconSize()} />
        )}
        <Typography fontSize={isSmall ? 12 : 16} mr={0.5}>
          {toPersianDigits(post.likesCount)}
        </Typography>
      </Box>

      {/* bookmark */}
      <Box
        sx={[
          {
            cursor: "pointer",
            borderRadius: 1.2,
            transition: "all ease .2s",
            display: "flex",
            p: 0.5,
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
                color: "customGray.dark",
                "&:hover": { color: "primary.main" },
              },
        ]}
      >
        {post.isBookMarked ? (
          <BsFillBookmarkFill
            className="fillBookmarkIcon"
            style={bookmarkIconSize()}
          />
        ) : (
          <BsBookmark style={bookmarkIconSize()} />
        )}
      </Box>
    </Box>
  );
};

export default PostInteractions;
