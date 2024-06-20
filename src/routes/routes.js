const documents = require("../data/documenti.js");
const reports = require("../data/otcheti.js");
const socialService = require("../data/socialnoe-obsluzhivanie-page.js");
const socialLinks = require("../data/social-nets.js");
const news = require("../data/novosti.js");
const partnersData = require("../data/partners.js");
const menuLinksArr = require("../data/header-menu.js");
const projectsData = require("../data/our-projects.js");
const picArray = require("../data/swiper.js");
const cardInfoList = require("../data/supprot-cards.js");
const viezdnyeProgrammyInfo = require("../data/viezdnye-programmy.js");
const projectList = require("../data/menu-our-project.js");
const breakpoints = require("../data/breakpoints.js");
const footerData = require("../data/footer.js");

const routes = (app) => {
  app.get("/menu-our-project", (request, response) => {
    response.json(projectList);
  });

  app.get("/viezdnye-programmy", (request, response) => {
    response.json(viezdnyeProgrammyInfo);
  });

  app.get("/swiper", (request, response) => {
    response.json(picArray);
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

  app.get("/swiper/breakpoints", (request, response) => {
    response.json(breakpoints);
  });

  app.get("/footer", (request, response) => {
    response.json(footerData);
  });
};

module.exports = routes;
