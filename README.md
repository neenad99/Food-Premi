# Food Ordering App

## Demo Link
- [Add the demo link here]

## Table of Contents
1. [About the Project](#about-the-project)
2. [Technologies Used](#technologies-used)
3. [Setup](#setup)
   * 3.1. [Starting the App](#starting-the-app)
   * 3.2. [Setting up Tailwind CSS](#setting-up-tailwind-css)
   * 3.3. [Setting up Testing](#setting-up-testing)
4. [Contributing](#contributing)

## About the Project
- A frontend restaurant application similar to Swiggy, built using React.

## Technologies Used
- React, React DOM, React Router, Redux, HTML, Tailwind CSS, Jest, jsdom, Parcel, Babel

## Setup

### Starting the App
1. Clone this repository.
2. Run `npm clean install` or `npm install` to install the required dependencies.
3. Set up Tailwind CSS as described below.
4. Run `npm start` to start the application.
5. To run tests, set up the testing environment as described below.

### Setting up Tailwind CSS
1. Install Tailwind CSS and PostCSS.
2. Create a `tailwind.config.js` file to configure Tailwind CSS.
3. Modify the CSS file to only import Tailwind CSS.
4. Create a `.postcssrc` file and add the necessary configuration.
5. Build the project by running `npm run build`.

### Setting up Testing
1. Install React Testing Library.
2. Install Jest.
3. Install the necessary Babel dependencies.
4. Add babel.config.js to configure Babel.
5. Include .parcelrc file to modify the Parcel configuration to disable default Babel transpilation.
6. Run `npx jest --init` to initialize Jest.
7. Install the `jsdom` library.
8. Install `@babel/preset-react` to enable JSX in test cases.
9. Include `@babel/preset-react` in the Babel configuration.
10. Install `@testing-library/jest-dom` to interact with jsdom.
11. To run tests, execute `npm run test` or `npm run watch-test`.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to add your tests for any changes you make.