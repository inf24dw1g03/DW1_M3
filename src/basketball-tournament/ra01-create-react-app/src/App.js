import { Admin, Resource} from "react-admin";
import lb4Provider from "react-admin-lb4";
import { PlayerList } from "./PlayerList";
import { MatchList } from "./MatchList";
const dataProvider = lb4Provider("http://127.0.0.1:3000");
const App = () => (
 <Admin dataProvider={dataProvider}>
 <Resource name="players" list={PlayerList} />
 <Resource name="matches" list={MatchList} />
 </Admin>
);
export default App;
