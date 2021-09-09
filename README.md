# Introduction

This project is created to utilise [Hacker News API](https://github.com/HackerNews/API) and create a web application that shows latest stories.The official website for [Hacker News](https://news.ycombinator.com/) has been re-created to display better UI with ReactJS. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Approach
The approach for this project was to re-create Hacker News with a better UI which is platform friendly (Desktop & Mobile) and to test all the components individually to assure that they are rendered properly. Other features that have been added are: Pagination, Sorting, Webpage Titles. 

## Alteration(s)
The stories(News/Jobs) shown in the UI are loaded dynamically from firebase API for Hacker News. Per page there are twenty stories and these are rendered in the UI as soon as they are fetched from API call. Here we are not waiting for all twenty to be fetched first and then rendered because we need a fast and responsive UI. The sorted lint of stories shown in the UI are limited to fifty to reduce the response time. Since there is a need to fetch data from firebase for every story, rendering almost five hundred stories can take up to 3 minutes. Sorting is based on the age (latest/oldest), comments (Least/Most) and points(Least/Most).

## Working
To start the app, run `npm install` and then `npm start` to start the app on localhost port 3000 (A different port will be chosen if 3000 is already being used). For running the test suites, check the available scripts below.

### Front-End
The UI is made up using technologies: React, JavaScript, Sass, JSX, HTML, React-testing-library (Jest). It consists of five components which are rendered by: `App.js`, `Items.js` and `SortedItems.js`.

### Back-End
Some of the data from API was not in a usable format so some logic has been applied to format the data and send it to components to be rendered. This includes setting props for pagination so that user can be redirected to next and previous pages & changing of timestamp to a user friendly string. This is a part of `util.js`. Along with this, the logic for sorting the stories with respect to age (latest/oldest), comments (Least/Most) and points(Least/Most) is also a part of this file. 

### Improvements
It seems that there is a possibility to further enhance the Performance, which could help in reducing the response time.

## Testing
All the components in the application are tested. Tests performed include Unit, Integration and Accessibility. Storybook has been used to support individual testing of components and check the way of working. Storybook has been installed with a11y plugin to support Accessibility testing and check if the rendered UI is compliant to standards and properly visible. Keyboard navigation is also supported by the App.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm test`

Launches the test runner for all the test suites in the project.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:debug`

Launches the test runner in debug mode. A debugger can be used within the code to pause the execution of tests for more analysis. When the test execution is paused, navigate to `about:inspect` for inspecting. This works on Chrome browser.

### `npm run test:all`

Launches the test runner for all the test suites in the repository. These are ran on a silent mode.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### `npm run build-storybook`

Builds the package: Storybook. This helps in visualizing different states of independent UI components and test their behavior. This gets build onto .storybook folder. 

### `npm run storybook`

Launches the storybook at [http://localhost:6006](http://localhost:6006). The storybook renders the independent UI components based on the files within repository. These files are named as `<Component>.stories.js`. For more information check out [Documentation](https://www.npmjs.com/package/@storybook/react)
