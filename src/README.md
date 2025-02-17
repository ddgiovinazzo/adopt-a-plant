# Adopt a Plant

Adopt a Plant is a simple e-commerce application where users can browse and adopt plants. The application is built with React and Material-UI for a modern and responsive user interface.

## Features

- Browse a collection of plants
- View detailed information about each plant
- Add plants to a shopping cart
- Responsive design

## Technologies Used

- React
- Material-UI
- JavaScript
- HTML/CSS

## Typechecking Rules

We use TypeScript to ensure type safety and catch errors early in the development process. Here are some of the key typechecking rules we follow:

- **No implicit any**: All variables and function return types must have explicit types.
- **No unused variables**: Unused variables are not allowed.
- **Explicit function return types**: All functions must have explicit return types.
- **Consistent type definitions**: We use interfaces for type definitions.
- **No non-null assertions**: Non-null assertions are not allowed.
- **No var requires**: The `require` statement is not allowed; use `import` instead.

These rules help maintain a clean and consistent codebase, making it easier to maintain and scale the application.

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

### `npm run lint`

Runs ESLint to analyze the code for potential errors and enforce coding standards.

### `npm run deploy`

Deploys the app to GitHub Pages.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/adopt-a-plant.git
   ```
2. Navigate to the project directory:
   ```sh
   cd adopt-a-plant
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

### Running Tests

To run tests, use the following script:
```sh
npm test
```

### Linting

To lint the code, use the following script:
```sh
npm run lint
```

### Deployment

To deploy the app to GitHub Pages, use the following script:
```sh
npm run deploy
```

