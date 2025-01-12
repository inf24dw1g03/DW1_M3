import { Admin, ListGuesser, Resource} from "react-admin";
import lb4Provider from "react-admin-lb4";
import { PlayerList } from "./PlayerList";
import { MatchList } from "./MatchList";
import { TeamList } from "./TeamList";
import { TournamentList } from "./TournamentList";
const dataProvider = lb4Provider("http://127.0.0.1:3000");
const App = () => (
 <Admin dataProvider={dataProvider}>
 <Resource name="players" list={PlayerList} />
 <Resource name="matches" list={MatchList} />
 <Resource name="teams" list={TeamList} />
 <Resource name="tournaments" list={TournamentList} />
 </Admin>
);
export default App;
