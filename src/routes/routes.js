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

const routes = (app) => {
  /**
   * @swagger
   * /menu-our-project:
   *   get:
   *     summary: Get list of our projects
   *     responses:
   *       200:
   *         description: A list of projects
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   title:
   *                     type: string
   *                   link:
   *                     type: string
   */
  app.get("/menu-our-project", (request, response) => {
    response.json(projectList);
  });

  /**
 * @swagger
 * components:
 *   schemas:
 *     ViezdnyeProgrammyItem:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the program, including the year or specific date
 *         path:
 *           type: string
 *           format: uri
 *           description: The path to the detailed information of the program
 */

/**
 * @swagger
 * /viezdnye-programmy:
 *   get:
 *     summary: Get list of Viezdnye Programmy information
 *     responses:
 *       200:
 *         description: A list of Viezdnye Programmy information
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ViezdnyeProgrammyItem'
 */

  app.get("/viezdnye-programmy", (request, response) => {
    response.json(viezdnyeProgrammyInfo);
  });

  /**
 * @swagger
 * components:
 *   schemas:
 *     PicArrayItem:
 *       type: object
 *       properties:
 *         url:
 *           type: string
 *           format: uri
 *           description: URL of the picture
 *         name:
 *           type: string
 *           description: Name of the person
 *         description:
 *           type: string
 *           description: Description or role of the person
 *         altPic:
 *           type: string
 *           description: Alt text for the picture
 */

/**
 * @swagger
 * /swiper:
 *   get:
 *     summary: Get list of picture array items
 *     responses:
 *       200:
 *         description: A list of picture array items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PicArrayItem'
 */


  app.get("/swiper", (request, response) => {
    response.json(picArray);
  });

  /**
 * @swagger
 * components:
 *   schemas:
 *     CardInfo:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the card
 *         title:
 *           type: string
 *           description: Title of the card
 *         description:
 *           type: string
 *           description: Description of the card
 *         boldText:
 *           type: string
 *           description: Bold text to highlight important information
 *         image:
 *           type: string
 *           format: uri
 *           description: URL of the image
 *         alt:
 *           type: string
 *           description: Alt text for the image
 *         donationGoal:
 *           type: integer
 *           description: Goal amount for donations
 *         collected:
 *           type: integer
 *           description: Amount of donations collected so far
 */

/**
 * @swagger
 * /support-cards:
 *   get:
 *     summary: Get list of card information
 *     responses:
 *       200:
 *         description: A list of card information
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CardInfo'
 */

  app.get("/support-cards", (request, response) => {
    response.json(cardInfoList);
  });
  /**
 * @swagger
 * components:
 *   schemas:
 *     MenuItem:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         link:
 *           type: string
 *           format: uri
 *         children:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/MenuItem'
 */

/**
 * @swagger
 * /header-menu:
 *   get:
 *     summary: Get menu links
 *     responses:
 *       200:
 *         description: A list of menu links
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MenuItem'
 */
  app.get("/header-menu", (request, response) => {
    response.json(menuLinksArr);
  });

/**
 * @swagger
 * components:
 *   schemas:
 *     SocialLink:
 *       type: object
 *       properties:
 *         imageUrl:
 *           type: string
 *           format: uri
 *           description: URL of the social media icon image
 *         name:
 *           type: string
 *           description: Name of the social media platform
 *         link:
 *           type: string
 *           format: uri
 *           description: URL of the social media platform
 */

/**
 * @swagger
 * /social-nets:
 *   get:
 *     summary: Get list of social links
 *     responses:
 *       200:
 *         description: A list of social links
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SocialLink'
 */


  app.get("/social-nets", (request, response) => {
    response.json(socialLinks);
  });

/**
 * @swagger
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the project
 *         description:
 *           type: string
 *           description: A brief description of the project
 *         highlight:
 *           type: string
 *           description: Special highlight or additional information about the project
 *         link:
 *           type: string
 *           format: uri
 *           description: URL link to the project's detailed page
 */

/**
 * @swagger
 * /our-projects:
 *   get:
 *     summary: Get list of projects
 *     responses:
 *       200:
 *         description: A list of projects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Project'
 */

  app.get("/our-projects", (request, response) => {
    response.json(projectsData);
  });

  /**
 * @swagger
 * components:
 *   schemas:
 *     DocumentItem:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         path:
 *           type: string
 *           format: uri
 */

/**
 * @swagger
 * /documents:
 *   get:
 *     summary: Get list of documents
 *     responses:
 *       200:
 *         description: A list of documents
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DocumentItem'
 */

  app.get("/documenti", (request, response) => {
    response.json(documents);
  });

  /**
 * @swagger
 * components:
 *   schemas:
 *     Report:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the report
 *         path:
 *           type: string
 *           format: uri
 *           description: URL path to the report PDF
 */

/**
 * @swagger
 * /reports:
 *   get:
 *     summary: Get list of reports
 *     responses:
 *       200:
 *         description: A list of reports
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Report'
 */

  app.get("/documenti/otcheti", (request, response) => {
    response.json(reports);
  });

  /**
 * @swagger
 * components:
 *   schemas:
 *     SocialService:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the social service document
 *         path:
 *           type: string
 *           format: uri
 *           description: URL path to the social service document PDF
 */

/**
 * @swagger
 * /social-service:
 *   get:
 *     summary: Get list of social service documents
 *     responses:
 *       200:
 *         description: A list of social service documents
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SocialService'
 */

  app.get("/socialnoe-obsluzhivanie", (request, response) => {
    response.json(socialService);
  });
/**
 * @swagger
 * components:
 *   schemas:
 *     NewsItem:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         image:
 *           type: string
 *         title:
 *           type: string
 *         subtitle:
 *           type: string
 *         text:
 *           type: string
 *         date:
 *           type: string
 *           format: date
 *         fullnews:
 *           type: object
 *           properties:
 *             text1:
 *               type: string
 *             text2:
 *               type: string
 *             text3:
 *               type: string
 *             text4:
 *               type: string
 *             text5:
 *               type: string
 *             greenText:
 *               type: string
 */

/**
 * @swagger
 * /novosti:
 *   get:
 *     summary: Get list of news items
 *     responses:
 *       200:
 *         description: A list of news items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NewsItem'
 */
  app.get("/novosti", (request, response) => {
    response.json(news);
  });

  /**
 * @swagger
 * components:
 *   schemas:
 *     Partner:
 *       type: object
 *       properties:
 *         imageUrl:
 *           type: string
 *           format: uri
 *           description: URL path to the partner's image
 *         name:
 *           type: string
 *           description: The name of the partner
 */

/**
 * @swagger
 * /partners:
 *   get:
 *     summary: Get list of partners
 *     responses:
 *       200:
 *         description: A list of partners
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Partner'
 */

  app.get("/partners", (request, response) => {
    response.json(partnersData);
  });
/**
   * @swagger
   * /swiper/breakpoints:
   *   get:
   *     summary: Get list of breakpoints
   *     responses:
   *       200:
   *         description: A list of breakpoints
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   width:
   *                     type: integer
   *                   quantity:
   *                     type: integer
   *                   naturalSlideHeight:
   *                     type: integer
   *                   naturalSlideWidth:
   *                     type: integer
   *                   dragEnabled:
   *                     type: boolean
   */
  app.get("/swiper/breakpoints", (request, response) => {
    response.json(breakpoints);
  });
};

module.exports = routes;
