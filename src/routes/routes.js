import { menuList } from "../data/menu.js";

export const routes = app => {
    app.get('/main-menu', (request, response) => {
        response.json(menuList);
    });
}
