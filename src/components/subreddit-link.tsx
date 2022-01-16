import { SubRedditModel } from "../model/sub-reddit";
import { Link } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";
import { ListItemButton, ListItemText } from "@mui/material";
export interface SubRedditLinkParams {
  subreddit: SubRedditModel;
}

export const SubRedditLink = (params: SubRedditLinkParams) => {
  const getSubRedditLink = () => `/r/${params.subreddit.name}`;
  return (
    <ListItemButton
      key={params.subreddit.name}
      component={Link}
      to={getSubRedditLink()}
    >
      <ListItemText key={`${params.subreddit.name}-text`}>
        {params.subreddit.name}
      </ListItemText>
      <LinkIcon key={`${params.subreddit.name}-icon`}></LinkIcon>
    </ListItemButton>
  );
};
