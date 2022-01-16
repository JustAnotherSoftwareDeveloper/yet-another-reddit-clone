import {
  Box,
  Card,
  CardContent,
  Chip,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react";
import { ICommentStore } from "../store/comment-store";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import React from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
export interface PostCommentDetailsParams {
  commentStore: ICommentStore;
  commentId: string;
}

export const PostCommentDetails = observer(
  (params: PostCommentDetailsParams) => {
    const comment = params.commentStore.getById(params.commentId);
    const [textOpen, setTextOpen] = React.useState(true);
    return (
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        <Card variant="outlined">
          <CardContent>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Chip label={comment.votes} color="secondary"></Chip>
              <IconButton
                component="span"
                color="primary"
                onClick={() => params.commentStore.upvote(params.commentId)}
                sx={{
                  paddingLeft: "0",
                  paddingRight: "0",
                }}
              >
                <ArrowUpwardIcon></ArrowUpwardIcon>
              </IconButton>
              <IconButton
                onClick={() => params.commentStore.downvote(params.commentId)}
                component="span"
                color="error"
                sx={{
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                <ArrowDownwardIcon></ArrowDownwardIcon>
              </IconButton>
              <IconButton onClick={() => setTextOpen(!textOpen)}>
                {textOpen ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Box>
            <Collapse
              in={textOpen}
              timeout="auto"
              unmountOnExit
              sx={{ width: "100%" }}
            >
              <Typography variant="body1">{comment.content}</Typography>
            </Collapse>
          </CardContent>
        </Card>
      </Box>
    );
  }
);
