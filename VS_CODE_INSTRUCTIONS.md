# Portfolio Website - VS Code Setup Instructions

This document provides instructions on how to set up and work with this portfolio website project in Visual Studio Code.

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

1. **Node.js and npm** - Download and install from [nodejs.org](https://nodejs.org/)
2. **Visual Studio Code** - Download and install from [code.visualstudio.com](https://code.visualstudio.com/)
3. **Git** (optional but recommended) - Download and install from [git-scm.com](https://git-scm.com/)

## Setting Up the Project in VS Code

### Step 1: Extract the Source Code

1. Extract the `portfolio-source.zip` file to a location on your computer.

### Step 2: Open the Project in VS Code

1. Open Visual Studio Code
2. Go to File > Open Folder
3. Navigate to the extracted `portfolio-source` folder and click "Open"

### Step 3: Install Dependencies

1. Open the integrated terminal in VS Code by going to View > Terminal or pressing `` Ctrl+` ``
2. Run the following command to install all required dependencies:
   ```
   npm install
   ```
   This will create a `node_modules` folder with all the necessary packages.

### Step 4: Start the Development Server

1. In the terminal, run:
   ```
   npm start
   ```
2. This will start the development server and open the website in your default browser at `http://localhost:3000`
3. Any changes you make to the code will automatically refresh the browser

## Project Structure

The project is organized as follows:

- `src/` - Contains all the React source code
  - `components/` - Contains all the React components organized by section
    - `Header/` - Navigation and header components
    - `Projects/` - Projects showcase with upload functionality
    - `About/` - About section
    - `Resume/` - Resume section
    - `Skills/` - Skills section
    - `Contact/` - Contact form
    - `Footer/` - Footer component
  - `styles/` - Contains global styles
  - `assets/` - For storing images and other assets
  - `App.js` - Main application component
  - `App.css` - Main application styles
  - `index.js` - Entry point of the application

- `public/` - Contains static files like HTML, favicon, etc.
- `package.json` - Lists project dependencies and scripts

## Making Changes

### Editing Components

1. Navigate to the component you want to edit in the `src/components/` directory
2. Each component has a `.js` file for the React component and a `.css` file for styling
3. Make your changes to either file
4. Save the file and the browser will automatically refresh to show your changes

### Adding New Components

1. Create a new folder in the `src/components/` directory for your component
2. Create a `.js` file for the component code and a `.css` file for styling
3. Import your component in `App.js` and add it to the render method

### Customizing Content

To update your personal information:
1. Edit the text in the respective component files
2. For the resume section, update the information in `src/components/Resume/Resume.js`
3. For skills, update the skills array in `src/components/Skills/Skills.js`

## Building for Production

When you're ready to deploy your website:

1. In the terminal, run:
   ```
   npm run build
   ```
2. This creates a `build` folder with optimized production files
3. You can deploy these files to any static hosting service like GitHub Pages, Netlify, or Vercel

## Recommended VS Code Extensions

These extensions can enhance your development experience:

1. **ESLint** - For JavaScript linting
2. **Prettier** - For code formatting
3. **ES7+ React/Redux/React-Native snippets** - For React code snippets
4. **CSS Peek** - For navigating between CSS and HTML
5. **Live Server** - For testing the built website locally

## Troubleshooting

If you encounter issues:

1. **Dependencies not installing**: Make sure you have the latest version of Node.js and npm
2. **Development server not starting**: Check if port 3000 is already in use by another application
3. **Component not rendering**: Check for console errors in the browser developer tools

For more help, refer to the [React documentation](https://reactjs.org/docs/getting-started.html).
