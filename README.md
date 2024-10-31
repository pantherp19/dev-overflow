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
     "prettier.arrowParent": "always",
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

# Tailwind CSS Configuration Guide

This guide walks you through setting up a `tailwind.config.ts` file, which enables you to customize Tailwind CSS settings for your project.

## Step 1: Example of a Complete tailwind.config.ts File

Here’s a full example of a `tailwind.config.ts` file:

```json

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#FFF1E6",
          "500": "#FF7000",
        },
        dark: {
          "100": "#000000",
          "200": "#0F1117",
          "300": "#151821",
          "400": "#212734",
          "500": "#101012",
        },
        light: {
          "400": "#858EAD",
          "500": "#7B8EC8",
          "700": "#DCE3F1",
          "800": "#F4F6F8",
          "850": "#FDFDFD",
          "900": "#FFFFFF",
        },
      },
      borderRadius: {
        "2": "8px",
        "1.5": "6px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "light-100":
          "0px 12px 20px 0px rgba(184, 184, 184, 0.03),
           0px 6px 12px 0px rgba(184, 184, 184, 0.02),
            0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200":
        "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "light-300":
        "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "dark-100":
        "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
        "dark-200":
        "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
      },
      backgroundImage: {
        "auth-dark": 'url("/images/auth-dark.png")',
        "auth-light": 'url("/images/auth-light.png")',
      },
      screens: {
        xs: "420px",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
```

---

## Step 2: Add Utility Classes in `Globals.css`

Eg:

```json

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --radius: 0.5rem;
  }
}

.custom-scrollbar::-webkit-scrollbar {
  width: 3px;
  height: 3px;
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #ffffff;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 50px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.active-theme {
  filter: invert(53%) sepia(98%) saturate(3332%) hue-rotate(0deg)
    brightness(104%) contrast(106%) !important;
}

.hash-span {
  margin-top: -140px;
  padding-bottom: 140px;
  display: block;
}

.mdxeditor-toolbar {
  background: #ffffff !important;
}

.dark .mdxeditor-toolbar {
  background: #151821 !important;
}

.dark .mdxeditor-toolbar button svg {
  color: #858ead !important;
}

.dark .mdxeditor-toolbar button:hover svg {
  color: #000 !important;
}

.dark .mdxeditor-toolbar [role="separator"] {
  border-color: #555 !important;
}

.markdown a {
  color: #1da1f2;
}

.markdown a,
code {
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;

  padding: 2px;
  color: #ff7000 !important;
}

.markdown pre {
  display: grid;
  width: 100%;
}

.markdown pre code {
  width: 100%;
  display: block;
  overflow-x: auto;

  color: inherit !important;
}

[data-lexical-editor="true"] {
  height: 350px !important;
  overflow-y: auto !important;
}

```
