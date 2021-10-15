# Sports Apparel, Inc.

This project is a proof-of-conecpt of a patient and encounter management system for Super Health Inc.  [Create React App](https://github.com/facebook/create-react-app).

## Install Prerequisites

### Node Version Manager (NVM)

NVM is a utility to help you quickly install and switch between Node versions. With NVM, there is no need to manually install and uninstall versions.

Follow the Installation Steps for [NVM on GitHub](https://github.com/coreybutler/nvm-windows).

## Getting Started

1. Clone this project locally.
1. CD into the root folder
1. Run `npm install` in the root folder to install dependencies.

This command installs a package, and any packages that it depends on.

1. Run `npm start`.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Dependencies
* patients.api must be running. patients.api can be cloned [here](https://gitlab.ce.catalyte.io/jhelton/jh-final-project-api)

## Usage
* UI can be used to view, add, edit and delete patients from the API, as well as view, add, and edit encounters from the API

## Testing
* You can run tests with coverage via `npm test -- --coverage --watchAll`

## Linting
* Linting is managed by ESLint Airbnb configuration (available [here](https://www.npmjs.com/package/eslint-config-airbnb)).  Code can be linted manually by running `npm run lint -- --fix`
