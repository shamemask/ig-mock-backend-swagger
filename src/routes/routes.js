import { menuList } from "../data/menu.js";
import { projectList } from "../data/projectList.js";
import { menuList } from "../data/menu.js";
import { documents } from "../data/documents.js";
import { reports } from "../data/reports.js";
import { socialService } from "../data/socialService.js";
import { socialLinks } from "../data/socialLinks.js";


export const routes = (app) => {
  app.get("/", (request, response) => {
    response.json(projectList);
  });

  app.get("/", (request, response) => {
    response.json(menuList);
  });

  app.get("/", (request, response) => {
    response.json(socialLinks);
  });

  app.get("/documenti", (request, response) => {
    response.json(documents);
  });

  app.get("/documenti/otcheti", (request, response) => {
    response.json(reports);
  });

  app.get("/socialnoe-obsluzhivanie", (request, response) => {
    response.json(socialService);
  });
};
