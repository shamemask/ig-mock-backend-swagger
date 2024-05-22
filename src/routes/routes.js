import { documents } from "../data/documenti.js";
import { reports } from "../data/otcheti.js";
import { socialService } from "../data/socialnoe-obsluzhivanie-page.js";
import { socialLinks } from "../data/social-nets.js";
import { news } from "../data/novosti.js";
import { partnersData } from "../data/partners.js";
import { menuLinksArr } from "../data/header-menu.js";
import { projectsData } from "../data/our-projects.js";
import {
  picArray,
  picArrayNews,
  breakpoints,
  newsBreakpoints,
} from "../data/swiper-config.js";
import { cardInfoList } from "../data/supprot-cards.js";

export const routes = (app) => {
  app.get("/swiper", (request, response) => {
    response.json([picArray, picArrayNews, breakpoints, newsBreakpoints]);
  });

  app.get("/support-cards", (request, response) => {
    response.json(cardInfoList);
  });

  app.get("/header-menu", (request, response) => {
    response.json(menuLinksArr);
  });

  app.get("/social-nets", (request, response) => {
    response.json(socialLinks);
  });

  app.get("/our-projects", (request, response) => {
    response.json(projectsData);
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

  app.get("/novosti", (request, response) => {
    response.json(news);
  });

  app.get("/partners", (request, response) => {
    response.json(partnersData);
  });
};
