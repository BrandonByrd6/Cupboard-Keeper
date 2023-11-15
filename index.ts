import { appConfig } from "./src/configs";
import Server from "./src/server";

const server = new Server();

const start = async () => {
    
    server.connectToDB();
    server.listen();
}

start();
