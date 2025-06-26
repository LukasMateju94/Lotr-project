# Update

## 1. bod

CharacterQuotes.js - try-catch přepsán do get-then-catch-finally

## 3. bod

Footer.js - jako komponenta odstraněna a přesunuto do SharedLayout.js

## 4. bod

Home.js - const getRandomText vyřešen bez useEffectu

## 5. bod

Vytvořeny samostatné složky pro .jsx komponenty a jejich .css soubory

#

# Úvod

Vytvořil jsem projekt na filmovou trilogii Pána prstenů.

## První strana

První strana je přehled filmů s krátkým popisem a dalšími informacemi, tvořeno na základě předlohy v zadání projektu.

## Druhá strana

Druhá strana je zaměřena na citaci hlášek postav. API jsem zvolil tohle: https://the-one-api.dev/ (API s klíčem), časem jsem zjistil, že pracovat s klíčem je trochu složitější a musel jsem si to nastudovat a zabralo to nějaký čas. Problém je hlavně zabezpečení klíče a i samotný .env soubor není nejlepší řešení a ideální by to bylo v kombinaci s backendem, ale to je mimo mou úroveň.
Proto jsem v projektu tedy vytvořil soubor '.env' (na úrovni vedle souborů package.json atd.) a vepsal jsem ho do .gitignore.

# Spuštění projektu

Před spuštěním projektu bude tedy potřeba založit .env soubor a vepsat do něj 'REACT_APP_LOTR_API_KEY=token' => token zašlu na discord, aby nebyl veřejný. (doufám, že to bude fungovat)

## Další

Přidána je i error stránka.

#

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
