import { Box, Paper, Typography } from "@mui/material";
import { makeObservable } from "mobx";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import { ISubRedditStore } from "../store/sub-reddit-store";

export interface SubRedditParams {
  subredditStore: ISubRedditStore;
}
export const SubReddit = observer((params: SubRedditParams) => {
  const { id } = useParams();
  const currentSubreddit = id
    ? params.subredditStore.specificSubreddit(id)
    : null;

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
      <div>test</div>
    </Box>
  );
});
