<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>TypeWeather</h1>
<h3>◦ Code with a forecast.</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/SVG-FFB13B.svg?style&logo=SVG&logoColor=black" alt="SVG" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style&logo=Vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />

<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style&logo=Axios&logoColor=white" alt="Axios" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/SemVer-3F4551.svg?style&logo=SemVer&logoColor=white" alt="SemVer" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/gabrielSantos1101/TypeWeather?style&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/gabrielSantos1101/TypeWeather?style&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/gabrielSantos1101/TypeWeather?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/gabrielSantos1101/TypeWeather?style&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running TypeWeather](#-running-TypeWeather)
    - [🧪 Tests](#-tests)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The TypeWeather project is a web application that allows users to search for and view weather forecasts for different cities. It provides real-time weather data such as temperature, wind speed, humidity, and probability of precipitation. The project's core functionalities include fetching city data from an API, retrieving weather data based on selected cities, and displaying the weather information in an intuitive and visually appealing manner. Its value proposition lies in providing users with a convenient and user-friendly platform to access accurate and up-to-date weather forecasts.

---

## 📦 Features

|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | The architecture of the project appears to follow a simple monolithic design, with all the code contained in a single file. This may result in reduced modularity and maintainability.                                                        |
| 📄 | **Documentation**  | There is no documentation available for this project, which makes it difficult for new contributors to understand the code and its functionality.                                            |
| 🔗 | **Dependencies**   | The project relies on a few external libraries, such as requests for making HTTP requests and PyJWT for JSON Web Token handling. Overall, the number of dependencies is minimal.   |
| 🧩 | **Modularity**     | Unfortunately, the project lacks modularity as all the code is contained in a single file. This may make it difficult to test, maintain, and extend the functionality in the future. |
| 🧪 | **Testing**        | There are no explicit tests included in the codebase. This absence of testing makes it challenging to ensure the correctness and reliability of the system.                      |
| ⚡️ | **Performance**    | It is difficult to evaluate the performance of the system without any performance tests or benchmarks. More code analysis would be required to provide a performance assessment.    |
| 🔐 | **Security**       | The codebase appears to lack security measures such as input validation or authentication. This exposes the system to potential security risks and vulnerabilities.              |
| 🔀 | **Version Control**| The project utilizes Git for version control. However, there is limited information on the version control strategies and any specific tools or workflows employed.               |
| 🔌 | **Integrations**   | The project does not have explicit integrations with external systems or services.                                             |
| 📶 | **Scalability**    | The project's scalability is limited due to its monolithic structure. Scaling the codebase may be difficult without a comprehensive re-architecting effort.                      |

---


## 📂 Repository Structure

```sh
└── TypeWeather/
    ├── .env.example
    ├── .eslintrc.json
    ├── .gitignore
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public/
    │   ├── background.png
    │   ├── logo.png
    │   ├── logo_large.svg
    │   └── vite.svg
    ├── src/
    │   ├── @types/
    │   ├── assets/
    │   ├── components/
    │   ├── libs/
    │   ├── main.tsx
    │   ├── pages/
    │   ├── routes/
    │   ├── services/
    │   ├── styles/
    │   └── utils/
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```


---

## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                                | Summary                                                                                                                                                                                                                                                                                                                                                                                         |
| ---                                                                                                 | ---                                                                                                                                                                                                                                                                                                                                                                                             |
| [vite.config.ts](https://github.com/gabrielSantos1101/TypeWeather/blob/main/vite.config.ts)         | The code is setting up the configuration for the Vite development server. It includes the React plugin which enables Vite to work with React components. The defineConfig function is used to define the configuration options for Vite.                                                                                                                                                        |
| [tailwind.config.js](https://github.com/gabrielSantos1101/TypeWeather/blob/main/tailwind.config.js) | This code is a configuration file for the Tailwind CSS framework. It specifies the content files to be processed, defines custom color themes, and includes any additional plugins.                                                                                                                                                                                                             |
| [index.html](https://github.com/gabrielSantos1101/TypeWeather/blob/main/index.html)                 | The code in index.html sets up the basic structure of a web page. It includes the necessary meta tags and links to external resources such as fonts. It also provides a container div with the id "root" where the main application will be rendered. The script tag at the end points to the main TypeScript file (/src/main.tsx) which will be responsible for the functionality of the page. |

</details>

<details closed><summary>Src</summary>

| File                                                                                | Summary                                                                                                                                                                                                                                                                           |
| ---                                                                                 | ---                                                                                                                                                                                                                                                                               |
| [main.tsx](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/main.tsx) | This code imports necessary dependencies and initializes a React app using ReactDOM. It renders the Routes component inside a StrictMode component, providing strict mode checks during development. The rendered app is then attached to the'root' element in the HTML document. |

</details>

<details closed><summary>Services</summary>

| File                                                                                                                       | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                                        | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [getCityByNameService.ts](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/services/getCityByNameService.ts) | The code provides a service function called "getCityByNameService" that retrieves city data from an API based on the input name parameter. It returns an object containing the city's ID, name (including country if available), latitude, and longitude. If an error occurs during the API call, it returns null.                                                                                                                                   |
| [getWeatherByCity.js](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/services/getWeatherByCity.js)         | The code in `getWeatherByCity.js` fetches weather data from an API based on latitude and longitude coordinates. It extracts and formats the weather information for today and the next few days, including temperature, description, wind speed, humidity, and probability of precipitation. It also includes icons corresponding to the weather conditions. The function returns an object containing the weather data for today and the next days. |
| [api.js](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/services/api.js)                                   | This code module exports an Axios instance named'api' preconfigured with a base URL and query parameters for making requests to the OpenWeatherMap API. The instance includes language preference, metric units, and an API key pulled from environment variables.                                                                                                                                                                                   |

</details>

<details closed><summary>@types</summary>

| File                                                                                                 | Summary                                                                                                                                     |
| ---                                                                                                  | ---                                                                                                                                         |
| [vite-end.d.ts](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/@types/vite-end.d.ts) | The code defines a reference to the Vite client typescript definition, allowing for type checking and code autocompletion in Vite projects. |

</details>

<details closed><summary>Dashboard</summary>

| File                                                                                                    | Summary                                                                                                                                                                                                                                                                                     |
| ---                                                                                                     | ---                                                                                                                                                                                                                                                                                         |
| [styles.css](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/pages/Dashboard/styles.css) | This code defines the layout for a dashboard using CSS grid. It specifies the columns and rows, sets the gap between elements, and assigns areas to different sections. It also includes a media query for smaller screens that changes the layout to a vertical flexbox.                   |
| [index.tsx](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/pages/Dashboard/index.tsx)   | The code is for a Dashboard page that displays weather information. It fetches weather data based on the selected city, renders a loading component while data is loading, and then displays the current weather, detailed weather information, and weather forecast for the next few days. |

</details>

<details closed><summary>Search</summary>

| File                                                                                                 | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                  | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [styles.css](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/pages/Search/styles.css) | The code defines the styling for the search page. The container has a background image, centered content, and specific font sizes and colors.                                                                                                                                                                                                                                                                                                        |
| [index.tsx](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/pages/Search/index.tsx)   | The code in src/pages/Search/index.tsx is responsible for rendering a search page where users can select a city to view weather forecasts. It uses React Router for navigation and interacts with localStorage to store the selected city. The SelectCity component is used to display a dropdown where users can choose a city. Once a city is selected, the handleSelected function stores it in localStorage and navigates to the dashboard page. |

</details>

<details closed><summary>Today</summary>

| File                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                  |
| ---                                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                      |
| [styles.css](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/Today/styles.css) | The code in the "styles.css" file defines the styling for the "Today" component. It sets up the layout and appearance of the component, including padding, background colors, borders, and font styles. The code also includes media queries for different screen sizes to adjust the styling accordingly.                                                               |
| [index.jsx](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/Today/index.jsx)   | The code in this file is responsible for rendering the Today component, which displays the current weather information for a selected city. It includes functionalities such as fetching the current date and time, determining if it is day or night, setting the background image and weather icon accordingly, and rendering the weather details for the chosen city. |

</details>

<details closed><summary>Details</summary>

| File                                                                                                       | Summary                                                                                                                                                                                                                                                                        |
| ---                                                                                                        | ---                                                                                                                                                                                                                                                                            |
| [styles.css](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/Details/styles.css) | The code provides styling for a weather detail component. It sets the background color, padding, and border radius. It also styles the heading, adds border-bottom to child elements, and adjusts the layout for smaller screens.                                              |
| [index.jsx](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/Details/index.jsx)   | The code is for a React component that displays weather details. It imports SVG icons and utilizes the WeatherItem component to display the temperature, rain probability, wind speed, humidity, and temperature variation. The component receives the weather data as a prop. |

</details>

<details closed><summary>Input</summary>

| File                                                                                                     | Summary                                                                                                                                                                                                                                 |
| ---                                                                                                      | ---                                                                                                                                                                                                                                     |
| [styles.css](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/Input/styles.css) | This code defines the styling for an input component. It sets the width, height, border, background color, padding, placeholder color, and font size. It also includes a loading spinner positioned at the right side of the input.     |
| [index.tsx](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/Input/index.tsx)   | The code defines a reusable Input component that accepts an isLoading prop. It renders an input element with additional styles and a loading spinner if isLoading is true. The component can also accept any standard input attributes. |

</details>

<details closed><summary>Selectcity</summary>

| File                                                                                                          | Summary                                                                                                                                                                                                                                                                                                                                                         |
| ---                                                                                                           | ---                                                                                                                                                                                                                                                                                                                                                             |
| [styles.css](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/SelectCity/styles.css) | The code in this file defines the styles for a SelectCity component. It sets the width and position of the select element, and creates a dropdown list that appears below the select element. The list items are styled as buttons with hover effects and a bottom border. The text inside the buttons is styled with a specific font size, color, and padding. |
| [index.tsx](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/SelectCity/index.tsx)   | The code represents a select city component that allows users to search for and select a city. It makes an API request to retrieve the city data based on the user's input, and updates the UI accordingly. The component also features a loading state to indicate when the data is being fetched.                                                             |

</details>

<details closed><summary>Weatheritem</summary>

| File                                                                                                           | Summary                                                                                                                                                                                                                                                                           |
| ---                                                                                                            | ---                                                                                                                                                                                                                                                                               |
| [styles.css](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/WeatherItem/styles.css) | The code in the "styles.css" file defines the styling for the WeatherItem component. It sets the width to 100%, displays the items in a flex layout, and applies padding. It also specifies the styles for the text, strong tags, and the image within the component.             |
| [index.tsx](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/WeatherItem/index.tsx)   | The code in this file exports a functional component called WeatherItem. It takes in props including an icon, a title, and a value. It renders a div with a weather item, including an image, a title, and a value. The component relies on a corresponding CSS file for styling. |

</details>

<details closed><summary>Nextdays</summary>

| File                                                                                                        | Summary                                                                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                         | ---                                                                                                                                                                                                                                                                                                                                                                          |
| [styles.css](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/NextDays/styles.css) | This code defines the CSS styles for a component called NextDays. It sets the grid area, padding, background color, and border radius. It also styles the heading and adds a flexbox layout for the next-next-detail section. Additionally, it includes a media query for mobile responsiveness by enabling horizontal scrolling when the screen width is less than 768px.   |
| [index.jsx](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/NextDays/index.jsx)   | The code defines the NextDays component, which displays a section with the title "Previsão para 5 dias" and a list of NextDaysItem components. The NextDays component receives a data prop, which is an array of objects used to render the NextDaysItem components.The key prop of each NextDaysItem component is set to the day property of each object in the data array. |

</details>

<details closed><summary>Loading</summary>

| File                                                                                                       | Summary                                                                                                                                                                                                                                   |
| ---                                                                                                        | ---                                                                                                                                                                                                                                       |
| [styles.css](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/Loading/styles.css) | This code defines the styling for a loading component. It uses flexbox to center the content both horizontally and vertically, and sets the width to 100% and height to 90vh (90% of the viewport height) to cover the entire screen.     |
| [index.jsx](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/Loading/index.jsx)   | The code in this file defines a functional component called Loading. It renders a div with a "loading" className, and within it, it renders another component called Spin. This component is used to display a loading spinner animation. |

</details>

<details closed><summary>Spin</summary>

| File                                                                                                    | Summary                                                                                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                     | ---                                                                                                                                                                                                                                                                                                                                                                     |
| [styles.css](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/Spin/styles.css) | The code in styles.css defines the styling for a loading spinner component. It sets the size, border color, and animation properties using CSS. The spinner rotates continuously using keyframes and transform properties. It uses both standard and vendor-specific syntax for compatibility. Overall, it provides a visually appealing and dynamic loading indicator. |
| [index.jsx](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/Spin/index.jsx)   | The code is a React component that renders a loading spinner. It imports a CSS file for styling. The component returns a `<div>` element with the id "loading-spinner" which represents the loading spinner.                                                                                                                                                            |

</details>

<details closed><summary>Weather</summary>

| File                                                                                                       | Summary                                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                        | ---                                                                                                                                                                                                                                                                                                                                          |
| [styles.css](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/Weather/styles.css) | HTTPStatus Exception: 400                                                                                                                                                                                                                                                                                                                    |
| [index.tsx](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/Weather/index.tsx)   | This code defines a `Weather` component that renders different weather icons based on the `type` prop passed to it. The component handles various weather types such as sunny, cloudy, rainy, snowy, rainbow, starry, and stormy. The component uses conditional rendering to display the appropriate weather icon based on the `type` prop. |

</details>

<details closed><summary>Logo</summary>

| File                                                                                                    | Summary                                                                                                                                                                                                                                   |
| ---                                                                                                     | ---                                                                                                                                                                                                                                       |
| [styles.css](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/Logo/styles.css) | The code in src/components/Logo/styles.css defines the styling for a logo component. It sets the width and height, background color, border radius, and alignment. It also styles an image within the logo with its own width and height. |
| [index.jsx](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/Logo/index.jsx)   | The code in this file defines a Logo component that displays an image logo.png within a div with the CSS class'logo'. It is imported with its corresponding styles from styles.css.                                                       |

</details>

<details closed><summary>Nextdaysitem</summary>

| File                                                                                                            | Summary                                                                                                                                                                                                                                                                                        |
| ---                                                                                                             | ---                                                                                                                                                                                                                                                                                            |
| [styles.css](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/NextDaysItem/styles.css) | This code defines the styles for a component called "NextDaysItem". It sets up a flexbox layout, applies color and font styles, and adjusts the size of images. It also includes some specific styling for the first letter of certain elements and adds a color and margin to a span element. |
| [index.jsx](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/components/NextDaysItem/index.jsx)   | The NextDaysItem component is responsible for rendering the details of a day's weather forecast. It receives a data object as a prop and displays the day, weather icon, weather description, and temperature range. The component is styled with a CSS file.                                  |

</details>

<details closed><summary>Utils</summary>

| File                                                                                                    | Summary                                                                                                                                                                                                                                                                                                                                                             |
| ---                                                                                                     | ---                                                                                                                                                                                                                                                                                                                                                                 |
| [getNextDays.js](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/utils/getNextDays.js)   | The code in getNextDays.js generates an array of the next 5 days' dates, formatted as'DD/MM'. It uses the dayjs library to manipulate the dates and formats them accordingly.                                                                                                                                                                                       |
| [weatherIcons.js](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/utils/weatherIcons.js) | This code contains a module that exports an object called `weatherIcons`. It provides different weather icons and background images based on the weather conditions such as clouds, rain, clear sky, and snow. Each weather condition has associated day and night icons and background images.                                                                     |
| [isDayTime.js](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/utils/isDayTime.js)       | The code in this file exports a function called `isDayTime` which determines whether the current time is during the day or not. It does this by getting the current hour using `new Date().getHours()` and returning `true` if the hour is greater than 6 and less than 18 (6am to 6pm). This function can be used to check if it's day or night in an application. |

</details>

<details closed><summary>Dayjs</summary>

| File                                                                                           | Summary                                                                                                                                                                                                                  |
| ---                                                                                            | ---                                                                                                                                                                                                                      |
| [index.js](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/libs/dayjs/index.js) | This code imports the dayjs library and sets the locale to'pt-br' (Brazilian Portuguese). It allows for easy handling of dates and times in JavaScript, with support for formatting, parsing, and manipulation of dates. |

</details>

<details closed><summary>Routes</summary>

| File                                                                                                   | Summary                                                                                                                                                                                                                                                               |
| ---                                                                                                    | ---                                                                                                                                                                                                                                                                   |
| [app.routes.jsx](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/routes/app.routes.jsx) | This code contains the routing configuration for the application. It uses the react-router-dom library to define routes for the Search and Dashboard pages. The "/" route maps to the Search component, while the "/dashboard" route maps to the Dashboard component. |
| [index.jsx](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/routes/index.jsx)           | This code sets up the application's routing functionality using the BrowserRouter component from the react-router-dom library. The Routes component renders the AppRoutes component, which handles the actual routing logic for different pages in the application.   |

</details>

<details closed><summary>Styles</summary>

| File                                                                                           | Summary                                                                                                                                                                                                                                                                                                          |
| ---                                                                                            | ---                                                                                                                                                                                                                                                                                                              |
| [global.css](https://github.com/gabrielSantos1101/TypeWeather/blob/main/src/styles/global.css) | This code defines global styles for the website. It sets font size and defines a range of gray colors. It also sets general styles for all elements, including font smoothing and padding. Additionally, it customizes the scrollbar appearance. There is a media query to adjust font size for smaller screens. |

</details>

---

## 🚀 Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- ℹ️ Dependency 1`

`- ℹ️ Dependency 2`

`- ℹ️ ...`

### 🔧 Installation

1. Clone the TypeWeather repository:
```sh
git clone https://github.com/gabrielSantos1101/TypeWeather
```

2. Change to the project directory:
```sh
cd TypeWeather
```

3. Install the dependencies:
```sh
► INSERT-TEXT
```

### 🤖 Running TypeWeather

```sh
► INSERT-TEXT
```

### 🧪 Tests
```sh
► INSERT-TEXT
```

---


## 🛣 Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Implement Y`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  LICENSE-TYPE` License. See the [LICENSE-Type](LICENSE) file for additional info.

---

## 👏 Acknowledgments

`- ℹ️ List any resources, contributors, inspiration, etc.`

[↑ Return](#Top)

---
