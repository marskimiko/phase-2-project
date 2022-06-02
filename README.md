# Studio Ghibli-App

## Repository URL

https://github.com/marskimiko/studioghibli-app

## Project Philosophy:

This project was made as a database for me to store music that I have worked on as an audio engineer in once place, as well as to add more music as I am involved in more projects in the future. I was inspired to make this project as an audio engineer in can be hard to keep track of all of the different projects that I have worked on over the year and thought this would be able to create something that I can easily continue to add to as time goes on. 


## Features: 

- The home page displays all of the music projects that I have worked on over the years 
- On the home page you have the ability to like the albums, delete them from the broser, as well as edit the information displayed about them on the page
- Upon clicking on the "edit" button the user will be taken to a form where they can edit information, and then click the "update" button which will automatically link them back to the home page where they can see the changes they made displayed in the browerser
- In the nav bar you can click on the "Add Music" button to add more projects to the home page. Upon clicking you will automatically be taken to a form where you can enter information about the project you are adding. Click on the create button to automatically be linked to the home page and see the new project in the browser. These projects can also be liked, deleted, and edited as desired
- You can also click the about button in the nav bar to be liked to the about page providing information about the developer as well as a link to more projects that they have worked on

## Description of app: 

This is a single page application that is a database of Music projects that Marisa Kimiko Saunders has worked on over the years. It uses a public JSON server to store the data which is then fetched : http://localhost:3004/music

The application uses a total of 6 components: App.js, Home.js, MusicCard.js, Form.js, NavBar.js, and Aout.js

The application has 5 different client-side routes throughout it using React Router: Home, Add, Edit, and About

The application uses GET, POST, PATCH, and DELETE requests in the code.

The GET request is used to fetch the data from the db.json file using the JSON server to display the different projects in the browser. 

The POST request is used in the form in order to add more projects to the home page. The

Two PATCH requests are used in the like feature to add more likes, as well as the update feautre to edit the projects on the home page.

The DELETE request is used to delete projects from the home page. 

Styling was done with css using both styled components and a CSS file, as well as Bootstrap.


## How to Use:

**•** Click on a the heart to add more likes and click the edit button to enter information about the album of your choice

![Alt Text](gifs/gif1.gif)

**•** Once you've entered the information click the update button to see the changes populated in the browser

![Alt Text](gifs/gif2.gif)

**•** Click the "Add Music" button to add more albums, once youve entered the information click the create button to see the new album in the browser, once again you can click the heart to add more likes

![Alt Text](gifs/gif3.gif)

**•** Click the "About" button to see a description about the developer as well as a link to more of there projects

![Alt Text](gifs/gif4.gif)

![Alt Text](gifs/gif5.gif)

![Alt Text](gifs/gif6.gif)

![Alt Text](gifs/gif7.gif)

## Technologies used:

- React
- Javascript
- HTML
- CSS
- Bootstrap
- JSON server
- React Router
- Create-react-app

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
