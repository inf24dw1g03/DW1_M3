import { Admin, Resource} from "react-admin";
import lb4Provider from "react-admin-lb4";
import { PlayerList, PlayerEdit } from "./PlayerList";
import { MatchList, MatchEdit } from "./MatchList";
import { TeamList, TeamEdit } from "./TeamList";
import { TournamentList, TournamentEdit } from "./TournamentList";
const dataProvider = lb4Provider("http://127.0.0.1:3000");
const App = () => (
 <Admin dataProvider={dataProvider}>
 <Resource name="players" list={PlayerList} edit={PlayerEdit} />
 <Resource name="matches" list={MatchList} edit={MatchEdit}/>
 <Resource name="teams" list={TeamList} edit={TeamEdit}/>
 <Resource name="tournaments" list={TournamentList} edit={TournamentEdit}/>
 </Admin>
);
export default App;
