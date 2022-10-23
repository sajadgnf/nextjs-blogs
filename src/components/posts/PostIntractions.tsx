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
import http from "@/services/httpService";
import { useRouter } from "next/router";
import routerPush from "@/utils/routerPush";
import toast from "react-hot-toast";

type InteractionProps = {
  post: BlogProps;
  isSmall: Boolean;
};

const PostInteractions = ({ post, isSmall }: InteractionProps) => {
  const router = useRouter();

  const bookmarkIconSize = () =>
    isSmall ? { fontSize: 14 } : { fontSize: 18 };

  const customIconSize = () => (isSmall ? { fontSize: 14 } : { fontSize: 16 });

  const likeHandler = (id: string) => {
    http
      .put(`/posts/like/${id}`)
      .then(({ data }) => {
        toast.success(data.message);
        routerPush(router);
      })
      .catch((err) => toast.error(err?.response?.data?.message));
  };

  const bookmarkHandler = (id: string) => {
    http
      .put(`/posts/bookmark/${id}`)
      .then(({ data }) => {
        toast.success(data.message);
        routerPush(router);
      })
      .catch((err) => toast.error(err?.response?.data?.message));
  };

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
        onClick={() => likeHandler(post._id)}
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
                  "& svg": {
                    color: "#fff",
                  },
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
        onClick={() => bookmarkHandler(post._id)}
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
                  "& svg": {
                    color: "#fff",
                  },
                },
              }
            : {
                bgcolor: "transparent",
                color: "customGray.dark",
                "&:hover": { color: "primary.main", bgcolor: "transparent" },
              },
        ]}
      >
        {post.isBookmarked ? (
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
