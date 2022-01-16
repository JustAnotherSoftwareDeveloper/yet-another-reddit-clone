import {
  Box,
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react";
import React from "react";
import { useParams } from "react-router-dom";
import { IPostStore } from "../store/post-store";
import { PostItem } from "./post-item";
import { DateTime } from "luxon";
import { v4 as uuidV4 } from "uuid";
import { PostComment } from "../model/comment";
import { ICommentStore } from "../store/comment-store";
import { PostCommentDetails } from "./post-comment-details";
export interface PostDetailParams {
  postsStore: IPostStore;
  commentStore: ICommentStore;
}

export const PostDetail = observer((params: PostDetailParams) => {
  const { id } = useParams();
  const [commentDetais, setCommentDetails] = React.useState("");
  const addComment = () => {
    const newComment: PostComment = {
      postId: id as string,
      votes: 0,
      createdAt: DateTime.now().toISO(),
      id: uuidV4(),
      content: commentDetais,
    };
    params.commentStore.addComment(newComment);
    setCommentDetails("");
  };
  const postComments = params.commentStore
    .getByPostId(id as string)
    .map((comment) => (
      <ListItem key={`${comment.id}`}>
        <PostCommentDetails
          commentId={comment.id}
          commentStore={params.commentStore}
        ></PostCommentDetails>
      </ListItem>
    ));
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "start",
      }}
    >
      <Box>
        <PostItem
          postId={id as string}
          postStore={params.postsStore}
        ></PostItem>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: 1,
          paddingRight: 1,
        }}
      >
        <Typography variant="body1">Add Comment</Typography>
        <TextField
          placeholder="Add Comment"
          maxRows={10}
          minRows={3}
          multiline
          value={commentDetais}
          onChange={(event) => setCommentDetails(event.target.value)}
        ></TextField>
        <Button disabled={!commentDetais} onClick={() => addComment()}>
          Submit
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <List>{postComments}</List>
      </Box>
    </Box>
  );
});
