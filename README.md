##### What's Being Used?

- [react](http://facebook.github.io/react/) for managing the presentation logic of application.
- [typescript](https://www.npmjs.com/package/typescript) to use the typescript features in JS.
- [axios](https://www.npmjs.com/package/axios) for making AJAX calls to a server.
- [styled-components](https://styled-components.com/) to use CSS in JS.
- [node-sass](https://npmjs.org/package/node-sass) for sass support.
- [lodash](https://www.npmjs.com/package/lodash) to use the utilities of Javascript.
- [react-perfect-scrollbar](https://www.npmjs.com/package/perfect-scrollbar-react) to use the customize scrollbar in app & to support infinite scroll.

## Getting Started

In order to get started developing, you'll need to do a few things first.

1. Install all of the `node_modules` required for the package. Depending on the computer's configuration, you may need to prefix this command with a `sudo`.

```
npm install
```

or

```
sudo npm install
```

`yarn` can be used it is already installed

```
yarn install
```

or

```
sudo yarn install
```

2. Lastly, run the start command to get the project off the ground.

```
npm start
```

or

```
yarn start
```

4. Head over to [http://localhost:3000](http://localhost:3000) to see the app live!

## File Structure

### build/

This is where application will be compiled. Assets, like images and fonts, should be placed directly within this folder. Also in this folder is a default `index.html` file for serving up the application.

### src/

The client folder houses the client application for project. This is where client-side Javascript components (and their directly accompanying styles) live.

## App Components

### api/

API directory contains the api calls which are triggering through the app. The purpose of api/ directory is to create an abstract layer for api with function with the paramters.

### assets/

Assets contains images and css resources of app

### components/

Components contains all the feature of blocks application page. Components should work like feature based widgets and should be rendered through the pages.

### pages/

Pages contains all the application pages or top level react-router components. Pages are being used to implement the layout/grid of any page.

#### pages/\*/ducks/

Each ducks directory in pages directory contains all the redux resources like action-types, action-creators, & reducers.

### routes/

Routes has the configuration of all the react routes which are being used in app.

### utils/

Utilities that can be used by any part of application.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
