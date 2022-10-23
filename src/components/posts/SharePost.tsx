import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { makeStyles } from "@mui/styles";
import { BlogProps, Theme } from "src/pages/blogs";
import { Box, Typography } from "@mui/material";

const useStyle = makeStyles((theme: Theme) => {
  return {
    shareLink: {
      display: "flex",
      margin: "0 12px",
    },
    customizedIcon: {
      color: theme.palette.customGray.main,
      cursor: "pointer",
      transition: "all ease .2s",
      fontSize: 28,
      "&:hover": { color: theme.palette.customGray.dark },
    },
  };
});

const SharePost = ({ post }: { post: BlogProps }) => {
  const classes = useStyle();

  const [copied, setCopied] = useState(false);

  const copyHandler = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <>
      {/* social media */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <a
          className={classes.shareLink}
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${post.hashId}/${post.slug}`}
        >
          <LinkedInIcon className={classes.customizedIcon} />
        </a>
        <a
          className={classes.shareLink}
          href={`https://twitter.com/share?text=${post.title}&url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${post.hashId}/${post.slug}`}
        >
          <TwitterIcon className={classes.customizedIcon} />
        </a>
        <a
          className={classes.shareLink}
          href={`https://telegram.me/share?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${post.hashId}/${post.slug}&text=${post.title}`}
        >
          <TelegramIcon className={classes.customizedIcon} />
        </a>
      </Box>

      {/* copy to clipboard */}
      <CopyToClipboard
        text={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${post.hashId}/${post.slug}`}
        onCopy={copyHandler}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="1px solid"
          borderColor="customGray.main"
          borderRadius={10}
          color="text.secondary"
          py={0.8}
          px={2}
          sx={{ cursor: "pointer" }}
        >
          <Typography ml={1} fontSize={14}>
            کپی&nbsp;لینک
          </Typography>
          <ContentCopyIcon sx={{ fontSize: 18 }} />
        </Box>
      </CopyToClipboard>

      {copied && (
        <Typography
          sx={{
            backgroundColor: "primary.main",
            color: "#fff",
            positions: "absolute",
            borderRadius: 10,
            whiteSpace: "nowrap",
            bottom: 0,
            left: 0,
            py: 1,
            px: 4,
          }}
        >
          کپی شد
        </Typography>
      )}
    </>
  );
};

export default SharePost;
