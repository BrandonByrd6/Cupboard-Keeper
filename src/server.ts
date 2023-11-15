import 'express-async-errors';
import express, {Application} from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';

import { appConfig } from './configs';
import { errorHandler } from './middlewares/ErrorHandler'
import router from './routes/router';


class Server {
    private app: Application;

    constructor() {
        this.app = express();
        this.configure();
        this.addRouter();
        this.addErrorHandler();
    }

    public listen() { 
        this.app.listen(appConfig.port, () => {
            console.log(`Listening on http://localhost:${appConfig.port}`);
        });
    }

    private configure() {
        this.app.use(express.json());
        this.app.use(morgan("dev"));
    }

    private addRouter(){
        this.app.use('/', router);
    }

    private addErrorHandler(){
        this.app.use(errorHandler);
    }
    
    public async connectToDB() {
        try {
            await mongoose.connect(appConfig.dburi);
            console.log("Connected to Database")
        } catch (error) {
            console.log(error);
        }
    }
}

export default Server;