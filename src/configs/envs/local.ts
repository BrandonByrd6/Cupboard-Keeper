import { defineConfig } from "../defineConfig";

export function createLocalConfig() {
  return defineConfig({ port: 8080, dburi: 'mongodb://admin:password@localhost:27017/auth'});
}
