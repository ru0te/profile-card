# Profile Card

This project is a simple React application that displays a personal profile card. It showcases an avatar, an introduction, and a dynamic list of skills with corresponding experience levels.

## Features

- **User Avatar:** Displays a profile picture.
- **Introduction:** A short bio about the person.
- **Dynamic Skill List:** Shows a list of skills, each with a visual indicator of the proficiency level (beginner, intermediate, advanced).

## Technologies Used

- React
- JavaScript
- HTML
- CSS

## Installation and Setup

To get this project up and running locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/profile-card.git
    cd profile-card
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Run the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    This will open the application in your browser at `http://localhost:3000`.

## Deployment

This project is configured for deployment to GitHub Pages.

To deploy your own version:

1.  Ensure your `package.json` has the `homepage` field set correctly (e.g., `"homepage": "https://your-username.github.io/profile-card"`).
2.  Install `gh-pages`:
    ```bash
    npm install --save-dev gh-pages
    # or
    yarn add --dev gh-pages
    ```
3.  Add the deploy scripts to your `package.json`:
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```
4.  Run the deploy command:
    ```bash
    npm run deploy
    # or
    yarn deploy
    ```

## Project Structure

```
profile-card/
├── public/
│   ├── images/       # Contains static assets like user.jpg
│   └── index.html    # The main HTML file
├── src/
│   ├── App.js        # Main React component
│   └── ...           # Other components/styles
├── .gitignore
├── package.json
├── README.md         # This file
└── ...
```
