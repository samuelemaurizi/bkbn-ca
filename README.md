[![Generic badge](https://img.shields.io/badge/version-1.0.0-blue)]() [![Generic badge](https://img.shields.io/badge/author-Samuele-green)]()

# TODO App | bkbn-ca

## Description

Based on the KISS design principle this application allows you to keep track of your tasks.

The application consists of an input field for adding a new task, once the button has been clicked it is possible to view a card slide in from the bottom of the screen.

In order to maintain the persistence of the tasks on page reload or next time you access the application, they are saved in localStorage.

If you are about to add a task that already exists the input field will throw an error message.

The application makes use of a few packages such as: react-material-ui for UI elements, framer-motion for animate UI elements, uuid that create a unique identifier for each task.

To use the application on your machine you must first clone it or download it and then execute the commands below. If you want to save some time you can go to [this](https://bucolic-phoenix-e078b4.netlify.app/) url.

## Available script

```
npm install
```

Install all the needed packages.

```
npm start
```

Run the app in development mode and will open it in your browser. If you make some changes the page will reload.

```
npm run build
```

Builds the app for production to the build folder.
