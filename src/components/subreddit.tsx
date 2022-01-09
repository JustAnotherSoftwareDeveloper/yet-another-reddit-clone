import { Box, List, ListItem, Paper, Typography } from "@mui/material";
import { makeObservable } from "mobx";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import { Post } from "../model/post";
import { ISubRedditStore } from "../store/sub-reddit-store";
import { PostItem } from "./post-item";

export interface SubRedditParams {
  subredditStore: ISubRedditStore;
}
export const SubReddit = observer((params: SubRedditParams) => {
  const testLinkPost: Post = {
    type: "link",
    link: "http://google.com",
    description: "This is a test link",
    id: "0",
    subredditId: "all",
    votes: 3,
  };
  const testTextPost: Post = {
    type: "text",
    description: "This is a test text post",
    id: "1",
    subredditId: "all",
    content: `# Pars vix non argentea illa\n## Abies vixque optabile vincla Primus\nLorem markdownum at nodosa caecisque aeger refringit dedimus stabulorum sua et
    manet si suaque tempus [genetrice Troiani](http://vela-cauti.io/tuo.html). Cum
    loris tantaque quoque; nec ora super plurima, *Quas meum Apolline*; et sinus
    vulnera. Umeri enim Iphitiden ferro sanguine in fumante gemitum sub
    [coepit](http://solitas.net/sic.html)? Se ostendit puppe flavusque herbae
    extrema remugis tibi hic, in aves vultusque, redde inemptum exstabant exit; heu.\nIllis planissima lateat. Obliquat diversa pharetratae deducat dissociata fecit
    ambiguis, sinistra acies conplectitur lucem; vocat parte. Exstincta Cimmerios
    alii obruor cupidusque excute ducitur scopulis, artes quid quove laniem
    frondesque quae ut. Virginis inque.\n## Uteri visa saepe ubi meritus culpa et\nAper quo mediaque est ventus cadit, matrem: undas! Nais qui utque, ibi eripis?
    Aera summam **et numen socios**, in *in te*, iuvenes, praecipitatur. Vices
    formamque, tamen [iactatis](http://suis.org/dixitrenoventur.html) positaque
    Phrygiae ortus me Eumenides medius insignis. Precari *siccata* sua solita, est,
    iram flectunt, quoque vero; ter plura [crevit
    miserarum](http://mihiadeo.com/ira) texit.\n\n1. Ore quae hanc est\n2. Duo qui\n3. Radice fatis vigil\n4. Poenam hanc quae sumit\n5. Nimbis damnantem divesque\n6. Ab olim crimen piasti`,
    votes: -3,
  };
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
      <List component="div">
        <Box>
          <ListItem>
            <PostItem post={testLinkPost}></PostItem>
          </ListItem>
          <ListItem>
            <PostItem post={testTextPost}></PostItem>
          </ListItem>
        </Box>
      </List>
    </Box>
  );
});
