import { Admin, Resource} from "react-admin";
import lb4Provider from "react-admin-lb4";
import { PlayerList, PlayerEdit } from "./PlayerList";
import { MatchList, MatchEdit } from "./MatchList";
import { TeamList, TeamEdit } from "./TeamList";
import { TournamentList, TournamentEdit } from "./TournamentList";
import {Dashboard} from "./dashboard";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";



const dataProvider = lb4Provider("http://127.0.0.1:3000");
const App = () => (

 <Admin dashboard={Dashboard} dataProvider={dataProvider}>
 <Resource name="players" icon={CastForEducationIcon} list={PlayerList} edit={PlayerEdit} />
 <Resource name="matches" icon={CalendarMonthIcon} list={MatchList} edit={MatchEdit}/>
 <Resource name="teams" list={TeamList} edit={TeamEdit}/>
 <Resource name="tournaments" list={TournamentList} edit={TournamentEdit}/>
 </Admin>
);
export default App;
