import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { observer } from "mobx-react";

export const About = observer(() => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/*  */}
      <Card sx={{ width: "75%", height: "75%" }}>
        <CardContent>
          <Typography fontWeight="bold">Disclaimer</Typography>
          <Typography variant="body2">
            I was not building this to show off my UX design skills. I promise
            that I won't try to implement something this ugly in production
          </Typography>
          <Typography fontWeight="bold">About</Typography>
          <Typography variant="body2">
            Yet Another Reddit Clone (YARC) is a simplified version of reddit.
            It allows the user to view links (via r/all or various subreddits),
            post link or text, upvote links, and post comments. I want to keep
            this project small, so I will not be adding features like a "hot"
            sort, nested comments, or anything but the most minimal features.
          </Typography>
          <Typography fontWeight="bold">Technologies Used</Typography>
          <Typography variant="body2" component="span">
            <ul>
              <li>React</li>
              <li>Typescript</li>
              <li>Mobx</li>
              <li>Material UI</li>
            </ul>
          </Typography>
          <Typography fontWeight="bold">Why I built this</Typography>
          <Typography variant="body2">
            I have enterprise Vue and Angular experience. These are core parts
            of my full stack resume. I do not have enterprise react experience.
            I view this as an item of concern. React is by far the most popular
            framework out there and I only have limited experience. While
            nothing can replace enterprise development, I want to get a basic
            understanding of the framework so I can jump right in
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
});
