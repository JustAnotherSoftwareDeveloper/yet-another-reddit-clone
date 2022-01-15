import { Box, List, ListItem, Paper, Typography } from "@mui/material";
import { makeObservable } from "mobx";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import { Post } from "../model/post";
import { IPostStore } from "../store/post-store";
import { ISubRedditStore } from "../store/sub-reddit-store";
import { PostItem } from "./post-item";
export interface SubRedditParams {
  subredditStore: ISubRedditStore;
  postStore: IPostStore;
}
export const SubReddit = observer((params: SubRedditParams) => {
  const { id } = useParams();
  const currentSubreddit = id
    ? params.subredditStore.specificSubreddit(id)
    : null;

  const posts = params.postStore.getBySubReddit(id as string);
  const postElements = posts.map((p) => (
    <ListItem>
      <PostItem postStore={params.postStore} postId={p.id}></PostItem>
    </ListItem>
  ));
  const getTitle = () =>
    currentSubreddit ? `r/${currentSubreddit.name}` : "r/all";

  const getDescription = () =>
    currentSubreddit
      ? currentSubreddit.description
      : "The front page of the internet";
  return (
    <Box
      sx={{
        paddingLeft: "5rem",
        paddingRight: "5rem",
        paddingTop: "2vh",
      }}
    >
      <Paper variant="outlined" elevation={3}>
        <Typography variant="h2">{getTitle()}</Typography>
        <Typography variant="caption">{getDescription()}</Typography>
      </Paper>
      <List component="div">
        <Box>{postElements}</Box>
      </List>
    </Box>
  );
});
