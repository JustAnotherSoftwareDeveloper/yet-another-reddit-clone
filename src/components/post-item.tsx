import {
  Badge,
  Box,
  Card,
  CardContent,
  Chip,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { Post } from "../model/post";
import LinkIcon from "@mui/icons-material/Link";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { red } from "@mui/material/colors";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export interface PostItemParams {
  post: Post;
}

export const PostItem = (params: PostItemParams) => {
  const [textOpen, setTextOpen] = React.useState(false);
  const upvoteDownvote = () => (
    <span>
      <Chip label={params.post.votes} color="secondary"></Chip>
      <IconButton
        component="span"
        color="primary"
        sx={{
          paddingLeft: "0",
          paddingRight: "0",
        }}
      >
        <ArrowUpwardIcon></ArrowUpwardIcon>
      </IconButton>
      <IconButton
        component="span"
        color="error"
        sx={{
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <ArrowDownwardIcon></ArrowDownwardIcon>
      </IconButton>
    </span>
  );
  const linkItemContent = () => (
    <Typography variant="h5">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {upvoteDownvote()}
        <LinkIcon></LinkIcon>
        <a href={params.post.link} target="_blank">
          {params.post.description}
        </a>
      </Box>
    </Typography>
  );
  const textItemContent = () => (
    <div>
      <Typography variant="h5">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {upvoteDownvote()}
          <IconButton component="span" onClick={() => setTextOpen(!textOpen)}>
            <TextSnippetIcon></TextSnippetIcon>
          </IconButton>
          {params.post.description}
        </Box>
      </Typography>
      <Collapse
        in={textOpen}
        timeout="auto"
        unmountOnExit
        sx={{ width: "100%" }}
      >
        <ReactMarkdown
          children={params.post.content as string}
          remarkPlugins={[remarkGfm]}
        />
      </Collapse>
    </div>
  );
  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <Card variant="outlined" sx={{ width: "100%" }}>
        <CardContent
          sx={{
            paddingTop: "0 !important",
            paddingBottom: "0 !important",
          }}
        >
          {params.post.type === "link" ? linkItemContent() : textItemContent()}
          <Typography variant="caption">Comments</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
