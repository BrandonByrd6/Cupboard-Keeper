import { defineConfig } from "../defineConfig";

export function createLocalConfig() {
  return defineConfig({ port: 8080 });
}
