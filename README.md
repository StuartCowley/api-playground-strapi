# API playground

Basic front end application to test the api endpoints and data retrieval from a local instance of a Strapi API (available [here](https://github.com/StuartCowley/api-playground-strapi-backend))

You will need to create a `.env` file at the root of the project containing the root of the API, using the name `REACT_APP_SITE_URL`. For local this should be `http://localhost:1337`, otherwise use the base url of the deployed backend.

This repo is intended purely for testing out the API, has minimal styling and does not use any routing for the various components. All content is supplied by the Strapi back end mentioned above.

## Features
![Screenshot](./src/images/FE%20screenshot.png)
- Conditional rendering of an artists name or pseudonym depending on their choice of anonymity (defaulting to "Anon" in the case of no pseudonym being chosen and wish to be anonymous)
- A dropdown selector to display one of 3 componenets: `Artists`,`Artworks` and `Collections`. On selecting an option the static content for the page will be displayed, on clicking the `Fetch!` button the data for that page will be retrived and the results displayed

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode at http://localhost:3000
