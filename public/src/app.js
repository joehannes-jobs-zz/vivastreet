import module from "./module";
import routes from "./routes";

import "./services/localstorage";

import "./components/menu";
import "./components/imprint";

import "./components/avatar";
import "./components/battlecry";
import "./components/heartslevel";
import "./components/feedmsg";
import "./components/hitbutton";

import "./classes/routes/setup";
import "./classes/routes/game";
import "./classes/routes/goodbye";

import "../styles/structure.sass!";
import "../styles/components.sass!";
import "../styles/fonts.sass!";
import "../styles/color.sass!";

module.routing(routes);
module.bootstrap();
