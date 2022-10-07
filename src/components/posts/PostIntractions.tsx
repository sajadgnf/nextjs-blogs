import { Button, Stack, Typography } from "@mui/material";
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
    <Stack direction="row" alignItems="center">
      {/* comments */}
      <Button
        sx={[
          {
            p: 0.3,
            ml: 1,
            minWidth: "unset",
            borderRadius: 1.2,
          },
          isSmall
            ? {
                color: "customGray.main",
                bgcolor: "#e5e7eb",
                "&:hover": { bgcolor: "#e5e7eb" },
              }
            : {
                color: "customGray.dark",
                bgcolor: "transparent",
                "&:hover": { bgcolor: "transparent" },
              },
        ]}
      >
        <BsChatSquareText style={customIconSize()} />
        <Typography fontSize={isSmall ? 11 : 16} mr={0.8}>
          {toPersianDigits(post.commentsCount)}
        </Typography>
      </Button>

      {/* like */}
      <Button
        sx={[
          {
            py: 0.2,
            px: 0.3,
            ml: 1,
            minWidth: "unset",
            borderRadius: 1.2,
          },
          isSmall
            ? {
                bgcolor: "customRed.light",
                color: "customRed.main",
                borderRadius: 1.2,
                "&:hover": {
                  bgcolor: "customRed.main",
                  color: "#fff",
                },
              }
            : {
                bgcolor: "transparent",
                color: "customGray.dark",
                "&:hover": { color: "customRed.main", bgcolor: "transparent" },
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
      </Button>

      {/* bookmark */}
      <Button
        sx={[
          {
            px: 0.6,
            minWidth: "unset",
            borderRadius: 1.2,
          },
          isSmall
            ? {
                bgcolor: "primary.light",
                color: "primary.main",

                "&:hover": {
                  bgcolor: "primary.main",
                  color: "#fff",
                },
              }
            : {
                bgcolor: "transparent",
                color: "customGray.dark",
                "&:hover": { color: "primary.main", bgcolor: "transparent" },
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
      </Button>
    </Stack>
  );
};

export default PostInteractions;
