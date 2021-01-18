import app from "./config/server";

import "./database";
import server from "./config/socket";
server.listen(app.get("port"));

console.log("server in port", app.get("port"));
