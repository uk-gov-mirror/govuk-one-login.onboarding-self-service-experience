import {Express} from "express";
import nunjucks from "nunjucks";
import {views} from "./resources.js";

export default function configureViews(app: Express) {
    const govukViews = require.resolve("govuk-frontend").match(/.*govuk-frontend\//)?.[0];

    if (!govukViews) {
        throw new Error("Couldn't load govuk-frontend module");
    }

    nunjucks.configure([views, govukViews], {
        autoescape: true,
        noCache: true,
        express: app
    });

    app.engine("njk", nunjucks.render);
}
