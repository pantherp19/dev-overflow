# 1. Next.js Project Setup Guide

This README provides a step-by-step guide for installing and setting up a Next.js project. Follow each section carefully to get your Next.js application up and running!

---

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (LTS version recommended): [Download and install](https://nodejs.org/)
- **npm** or **yarn**: Comes with Node.js, but you can also install Yarn globally: `npm install -g yarn`
- **Git** (optional, for version control): [Download and install](https://git-scm.com/)

---

## Step 1: Create a New Next.js Project

To create a new Next.js application, run the following command in your terminal:

```bash
npx create-next-app@latest my-next-app
# or
yarn create next-app my-next-app
```

---

## Step 2: Project Structure

Here’s a quick overview of the key files and folders in your Next.js project:

- `/pages`: Contains all page components. Each `.js` or `.ts` file represents a route.

- `/public`: Static files (images, fonts, etc.) that can be accessed directly.

- `/styles`: CSS and styling files for your app.

---

# 2. GitHub Project Setup Guide

This guide provides step-by-step instructions for creating a GitHub repository and pushing your project to GitHub.

---

## Prerequisites

Make sure you have the following installed and set up:

- **Git**: [Download and install Git](https://git-scm.com/)
- **GitHub Account**: [Create a GitHub account](https://github.com/) if you don’t have one.

---

## Step 1: Initialize Git in Your Project

Navigate to your project directory in the terminal and initialize Git:

```bash
cd your-project-directory
git init
```

---

## Step 2: Create a GitHub Repository

- Go to GitHub.

- Click on the New button to create a new repository.

- Enter a Repository name and an optional Description.

- Choose visibility (Public or Private).

- Do not initialize with a README if you already have one locally.

- Click Create repository.

---

## Step 3: Link Your Local Project to GitHub

After creating the repository, GitHub will provide you with commands to link your local repository.
Copy the URL for your GitHub repository and run the following commands:

```bash
git remote add origin https://github.com/your-username/your-repo-name.git
```

Replace `https://github.com/your-username/your-repo-name.git` with your repository’s URL.

---

## Step 4: Add and Commit Your Files

Add all files in your project directory to the Git index and commit them:

```bash
git add .

git commit -m "Initial commit"
```

If your repository uses master as the default branch, rename master with main using following command:

```bash
git branch -M main
```

---

## Step 5: Push to GitHub

Push your code to GitHub with:

```bash
git push -u origin main
```

---

## Step 6: Verify on GitHub

- Go to your GitHub repository page.

- Refresh the page to see your files uploaded.

---

## Additional Git Commands

- Check Status: `git status`

- Create a New Branch: `git branch branch-name`

- Switch Branches: `git checkout branch-name`

- Pull Latest Changes: `git pull origin main`

---

# Setting Up the `.vscode` Folder in Your Project

The `.vscode` folder allows you to define workspace-specific settings, extensions, and launch configurations for your Visual Studio Code environment. This guide provides steps to create and configure a `.vscode` folder in your project.

---

## Step 1: Create the `.vscode` Folder

1. In the root of your project directory, create a folder named `.vscode`.

2. Inside `.vscode`, you can create various configuration files, including:

   - `settings.json`: For workspace settings.

   - `launch.json`: For debug configurations.

   - `extensions.json`: For recommended extensions.

---

## Step 2: Configure `settings.json`

`settings.json` is used for defining project-specific settings. Here’s how to create and configure it:

1. Inside the `.vscode` folder, create a file named `settings.json`.
2. Add your project-specific settings:

   ```json
   {
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.formatOnSave": true,
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": "explicit",
       "source.addMissingImports": "explicit"
     },
     "prettier.tabWidth": 2,
     "prettier.useTabs": false,
     "prettier.semi": true,
     "prettier.singleQuote": false,
     "prettier.jsxSingleQuote": false,
     "prettier.trailingComma": "es5",
     "prettier.arrowParens": "always",
     "[json]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "[typescript]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "[typescriptreact]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "[javascriptreact]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "typescript.tsdk": "node_modules/typescript/lib"
   }
   ```

Save the file. These settings will now apply only to this project.

---

## Summary

With a .vscode folder, you can streamline your project’s VS Code settings, debug configurations, and recommended extensions, enhancing consistency across different environments.

---

# 3. ESLint & Prettier Setup

## Step 1: Update `.eslintrc.json` file

Copy and paste the following code in `.eslintrc.json`

```json
{
  "extends": [
    "next/core-web-vitals",
    "next/typescript",
    "standard",
    "plugin:tailwindcss/recommended",
    "prettier"
  ],
  "plugins": ["import"],
  "rules": {
    "import/order": [
      "error",
      {
        "groups": [
          "builtin", // Built-in types are first
          "external", // External libraries
          "internal", // Internal modules
          ["parent", "sibling"], // Parent and sibling types can be mingled together
          "index", // Then the index file
          "object" // Object imports
        ],
        "newlines-between": "always",
        "pathGroups": [
          {
            "pattern": "@app/**",
            "group": "external",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": ["builtin"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ]
  },
  "ignorePatterns": ["components/ui/**"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "no-undef": "off"
      }
    }
  ]
}
```

## Step 2: Install the ESLint, Prettier and their dependencies

```bash
npm i eslint-config-standard

// to test above command run
npm run lint

npm i eslint-plugin-tailwindcss

npm i eslint-config-prettier

npm i prettier

npm i eslint-plugin-import --save-dev

```

---

## Step 3: Install Recommended Extensions

To enhance your development experience, install the following Visual Studio Code extensions:

1. **ESLint** - Lints JavaScript/TypeScript code and identifies issues based on defined rules.

2. **Prettier - Code formatter** - Automatically formats code to maintain consistent styling.

3. **Prettier ESLint** - Combines Prettier and ESLint formatting for a smooth workflow.

---

## Step 4: Reload Visual Studio Code

After installing the extensions, reload Visual Studio Code to apply all changes:

1. Press `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (macOS).

2. Type `Reload Window`.

3. Press `Enter`.

4. If `Reload Window` not worked try with `Restart Window`

You’re all set! Your environment is now configured and ready for development.

---
