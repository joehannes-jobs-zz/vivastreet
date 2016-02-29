import module from "./module";
import routes from "./routes";

import "./services/localstorage";

import "./controllers/menu";
import "./controllers/imprint";

import "./controllers/components/avatar";
import "./controllers/components/battlecry";
import "./controllers/components/heartslevel";
import "./controllers/components/feedmsg";
import "./controllers/components/hitbutton";

import "./controllers/routes/setup";
import "./controllers/routes/game";
import "./controllers/routes/goodbye";

import "../styles/structure.sass!";
import "../styles/components.sass!";
import "../styles/fonts.sass!";
import "../styles/color.sass!";

module.routing(routes);
module.bootstrap();