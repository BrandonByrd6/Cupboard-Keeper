import { createLocalConfig } from "./envs/local";

export const appConfig = getConfig();

function getConfig(){
    switch (process.env.APP_ENV) {
        // case "production":
        //   return createProdConfig();
        // case "staging":
        //   return createStagingConfig();
        case "local":
          return createLocalConfig();
        default:
          throw new Error(`Invalid APP_ENV "${process.env.APP_ENV}"`);
      }
}