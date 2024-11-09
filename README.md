# Next.js Project Setup Guide

---

---

This README provides a step-by-step guide for installing and setting up a `Next.js` project. Follow each section carefully to get your `Next.js` application up and running!

---

# 1. Prerequisites

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

---

# 3. Setting Up the `.vscode` Folder in Your Project

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
    "source.fixAll.markdownlint": "explicit",
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
  "typescript.tsdk": "node_modules/typescript/lib",
  "[markdown]": {
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true
  },
  // this will hide the folders and files
  "files.exclude": {
    "**/.git": true,
    "**/.vscode": true,
    "**/.next": true,
    "**/node_modules": true,
    "next-env.d.ts": true
  }
}
```

Save the file. These settings will now apply only to this project.

---

## Summary

With a .vscode folder, you can streamline your project’s VS Code settings, debug configurations, and recommended extensions, enhancing consistency across different environments.

---

---

# 4. ESLint & Prettier Setup

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

---

# 5. Tailwind CSS Configuration Guide

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

---

---

# 6. Setting Up a Custom Fonts in Next.js

This guide will walk you through setting up a custom font in your Next.js project. We will use Google Fonts as the font source.

---

## Step 1: Download the Font

1. Go to Google Fonts.

2. Select the font you want to use.

3. Click on the Download family button.

4. Once the font is downloaded, unzip the file to access the .ttf or .woff files.

---

## Step 2: Create a Fonts Folder

1. In your `Next.js` project, navigate to the `app` directory.
2. Create a folder named fonts if it doesn’t exist.

3. Copy the font file(s) (for example, `FontNameVF.ttf`) into this fonts folder.

Your directory structure should look like this:

```
project-root/
│
├── app/
│   └── fonts/
│       └── FontNameVF.ttf
│
```

---

## Step 3: Update layout.tsx to Use the Font

1. Open layout.tsx in the app directory.

2. Add the font file using the Next.js const variable component.

```tsx
// layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";

// create font variables

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 600 700",
});

export const metadata: Metadata = {
  title: "Dev Overflow",
  description: "The updated version of stack overflow",
};

// use font variables in body tag

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

---

## Step 4: Update `tailwind.config.js` to Include the Font

1. Open the `tailwind.config.js` file in the root of your project.

2. Add the font to the `extend` section below the `screens`, under `fontFamily` to use it in Tailwind CSS classes.

```js
// tailwind.config.js

fontFamily: {
        inter: ["var(--font-inter)"],
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
```

---

## Step 5: Apply the Font in Your Project

Now, you can use the custom font in your CSS or Tailwind classes:

```html
<div className="font-space-grotesk">
  This text will use the custom font you have added.
</div>
```

And that’s it! Your Next.js project now uses a custom font from Google Fonts.

---

---

# 7. Add Assets to the `public` Folder

1. In your Next.js project, navigate to the public directory. This directory is used for storing static assets that can be served directly, such as images, icons, and documents.

2. Create subfolders within `public` as needed (e.g., images, icons, docs) to keep assets organized.

Example Directory Structure:

```

project-root/
│
├── app/
│ └── favicon.ico
├── public/
│ ├── images/
│ │ └── logo.png
│ ├── icons/
│ │ └──
│ └── docs/
│ └── guide.pdf
│

```

3. Copy your assets (e.g., logo.png, favicon.ico) into the appropriate folders within `public`.

---

---

# 8. Setting Up Metadata in `layout.tsx`

1. Open the `layout.tsx` file in the `app` directory.

2. Define the metadata object to include properties such as `title`, `description`, `icons`, `viewport`, and `openGraph` tags. This metadata will be applied across all pages that use this layout.
   `

```tsx
// layout.tsx

import "./globals.css";

export const metadata = {
  title: "Your Project Title", // Page title
  description: "Your Project Description", // Meta description for SEO
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Your Project Title", // Title for social sharing
    description: "Your Project Description", // Description for social sharing
    url: "https://yourdomain.com", // URL of your site
    siteName: "Your Site Name", // Name of the site
    images: [
      {
        url: "/images/logo.png", // Path to Open Graph image
        width: 1200,
        height: 630,
        alt: "Logo Alt Text",
      },
    ],
    locale: "en_US", // Locale of your site
    type: "website", // Type of content (e.g., website)
  },
  twitter: {
    card: "summary_large_image", // Twitter card style
    site: "@YourTwitterHandle", // Twitter username of site
    creator: "@CreatorTwitterHandle", // Twitter username of content creator
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/favicon.ico" /> {/_ Favicon _/}
      </head>
      <body>{children}</body>
    </html>
  );
}
```

3. Replace values such as `Your Project Title`, `Your Project Description`, and `https://yourdomain.com` with your actual project details. The Open Graph image (`/images/logo.png`) should be one that represents your site and fits Open Graph size requirements (recommended 1200x630 pixels).

4. The metadata defined in `layout.tsx` will be applied across all pages by default. If you need page-specific metadata, you can override it within individual page files.

---

## Tips for Managing Metadata and Assets

- Use Consistent Paths: Always reference paths starting from the `public` folder by using `/` at the beginning of the path.

- **SEO Best Practices**: Customize metadata for better SEO and social media sharing, ensuring that title and description reflect your page content accurately.

---

---

# 9. Setting Up `next-themes` in a `Next.js` Project

`next-themes` is a library for managing themes in `Next.js`, enabling features like dark mode or custom themes with minimal setup.

## Step 1: Install `next-themes`

Run the following command in your Next.js project directory to install `next-themes`:

```bash
Copy code
npm install next-themes

# or

yarn add next-themes
```

---

## Step 2: Setup Theme Provider in `Theme.tsx`

Open `Theme.tsx` in your context directory at root.

Import and wrap the application with the `ThemeProvider` from `next-themes`.

```tsx
// Theme.tsx

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import React from "react";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </>
  );
};

export default ThemeProvider;
```

## Step 3: Import and Setup `ThemeProvider` in `layout.tsx`

- attribute="class": This sets the theme using a class on the html element (recommended).

- defaultTheme="system": Sets the default theme based on the user's OS preference

```tsx
return (
  // suppressHydrationWarning to avoid rendering warning

    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
 // inshore children inside a <ThemeProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
```

---

---

# 10. Use `shadcn` for ui design

## Step 1: Run the `init` command:

```bash
npx shadcn@latest init
```

You can use the -d flag for defaults i.e `new-york`, `zinc` and yes for the `css variables`.

```bash
npx shadcn@latest init -d
```

---

## Step 2:Configure `components.json`

You will be asked a few questions to configure components.json:

- Which style would you like to use? › New York

- Which color would you like to use as base color? › Zinc

- Do you want to use CSS variables for colors? › no / yes

That's it

---

## Step 3: You can now start adding components to your project.

```bash
npx shadcn@latest add button
```

The command above will add the Button component to your project. You can then import it like this:

```
import { Button } from "@/components/ui/button"

export default function Home() {
return (

<div>
<Button>Click me</Button>
</div>
)
}
```

---

---

# 11. Start Developing Your Navbar

This guide explains how to set up a Navbar component in the specified file path for a Next.js or React project.

## Step 1: Create the Folder Structure

Navigate to your project's `root` directory and create the necessary folder structure:

```bash
- root
  - components
    - navigation
      - navbar

mkdir -p root/components/navigation/navbar

# This command will create the folders and path:
```

## Step 2: Create the Navbar Component

Inside the navbar folder, create a new file called `index.tsx`:

```bash
touch root/components/navigation/navbar/index.tsx
```

## Step 3: Implement the Navbar Component

Open `index.tsx` and add the following code to create a simple Navbar component:

```tsx
// root/components/navigation/navbar/index.tsx

import Image from "next/image";
import Link from "next/link";
import React from "react";

import ThemeChanger from "./Theme";

const Navbar = () => {
  return (
    <>
      <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/site-logo.svg"
            width={23}
            height={23}
            alt="DevFlow logo"
          />
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
            DEV<span className="text-primary-500">FLOW</span>
          </p>
        </Link>

        <p>Global Search</p>

        <div className="flex-between gap-5">
          <ThemeChanger />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
```

## Step 4: Import and Use the Navbar Component

To use the Navbar component in a page or layout, import it in your desired file:

```tsx
// Example: root/Layout.tsx

import Navbar from "@/components/navigation/navbar";
```

### Summary

- Folder path: `root/components/navigation/navbar/`

- Component file: `index.tsx`

- Import path: `@/components/navigation/navbar`

This setup ensures a clean, modular structure for your Navbar component.

---

---

# 12. Project Directory Organization

This documentation explains how to structure your `Next.js` app by organizing it into `(root)` and `(auth)` folders inside the `app` directory. We’ll also move the `page.tsx` file to the `(root)` directory and create `layout.tsx` files in both `(root)` and `(auth)` folders.

## Step 1: Create Group Folders

Inside the `app` directory, create `(root)` and `(auth)` folders to separate different parts of your application:

```bash
app
├── (root)
└── (auth)
```

## Step 2: Move `page.tsx` to the `(root)` Directory

If you already have a `page.tsx` file in the `app` directory, move it into the `(root)` folder to serve as the main landing page for the application:

```bash
mv app/page.tsx app/root/page.tsx
```

## Step 3: Create `layout.tsx` for Each Group

Each group (i.e., `(root)` and `(auth)`) should have its own `layout.tsx` file to define a specific layout structure.

```tsx
// layout.tsx

import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export default AuthLayout;
```

### Summary of the New Directory Structure

After following these steps, your project structure should look like this:

```bash
app
├── (root)
│   ├── page.tsx # Main page for the root layout
│   └── layout.tsx # Layout for root pages
├── (auth)
│   ├── sign-in
│   ├── sign-up
│   └── layout.tsx # Layout for auth pages
└── layout.tsx # Layout for all app pages
```

### Usage

- The `(root)/layout.tsx` file applies to all pages in the `(root)` folder, providing a header and main section for the main content.

- The `(auth)/layout.tsx` file applies to all pages in the `(aut)`h folder, offering a similar structure customized for authentication pages.

This setup helps keep the layout and organization of your application modular and maintainable.

---

---

# 13. Setting up `Auth.js`

## Step 1. Installing Auth.js

Start by installing the appropriate package for your framework.

```bash
npm install next-auth@beta
```

Installing `@auth/core` is not necessary, as a user you should never have to interact with `@auth/core`.

## Step 2. Setup Environment

The only environment variable that is mandatory is the `AUTH_SECRET`. This is a random value used by the library to encrypt `tokens` and `email` verification hashes. (See Deployment to learn more). You can generate one via the official `Auth.js` CLI running:

```bash
npx auth secret
```

This will also add it to your `.env` file, respecting the framework conventions (eg.: `Next.js`’ `.env.local`).

## Step 3. Configure

Next, create the `auth.ts` config file in root directory. This is where you can control the behavior of the library and specify custom authentication logic, adapters, etc. We recommend all frameworks to create an `auth.ts` file in the project. In this file we’ll pass in all the options to the framework specific initialization function and then export the route `handler(s)`, `signin` and `signout` methods, and more.

You can name this file whatever you want and place it wherever you like, these are just conventions we’ve come up with.

## Step 4. Create a new `auth.ts`

Start by creating a new `auth.ts` file at the `root` of your app with the following content.

```ts
//  ./auth.ts

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
});
```

## Step 5. Add a Route Handler

Add a Route Handler under `/app/api/auth/[...nextauth]/route.ts`.

This file must be an App Router Route Handler, however, the rest of your app can stay under page/ if you’d like.

```ts
./app/api/auth/[...nextauth]/route.ts

import { handlers } from "@/auth"; // Referring to the auth.ts we just created
export const { GET, POST } = handlers;
```

## Step 6. Add optional Middleware

Add optional Middleware i.e. `middleware.ts` in `root` directory to keep the session alive, this will update the session expiry every time its called.

```ts
./middleware.ts

export { auth as middleware } from "@/auth"
```

## Setup Authentication Methods

With that, the basic setup is complete! Next we’ll setup the first authentication methods and fill out that providers array.

---

---

# 14. OAuth

Auth.js comes with over 80 providers preconfigured. We constantly test ~20 of the most popular ones, by having them enabled and actively used in our example application. You can choose a provider below to get a walk-through, or find your provider of choice in the sidebar for further details.

## Step 1. GitHub

Register OAuth App in GitHub's dashboard.

First you have to setup an OAuth application on the GitHub developers dashboard.

- **Note**: If you haven’t used OAuth before, you can read the beginners step-by-step guide on how to setup "Sign in with GitHub" with Auth.js.

When registering an OAuth application on GitHub, they will all ask you to enter your application’s callback URL. See below for the callback URL you must insert based on your framework.

## Step 2.Callback URL

```
[origin]/api/auth/callback/github

// eg. http://localhost/api/auth/callback/github
```

Many providers only allow you to register one callback URL at a time. Therefore, if you want to have an active OAuth configuration for development and production environments, you'll need to register a second OAuth app in the GitHub dashboard for the other environment(s).

## Step 3. Setup Environment Variables

Once registered, you should receive a `Client ID` and `Client Secret`. Add those in your application environment file:

```
.env.local

AUTH_GITHUB_ID={CLIENT_ID}
AUTH_GITHUB_SECRET={CLIENT_SECRET}
```

Auth.js will automatically pick up these if formatted like the example above. You can also use a different name for the environment variables if needed, but then you’ll need to pass them to the provider manually.

## Step 4. Setup Provider

Let’s enable GitHub as a sign in option in our Auth.js configuration. You’ll have to import the `GitHub` provider from the package and pass it to the `providers` array we setup earlier in the Auth.js config file:

In `Next.js` we recommend setting up your configuration in a file in the root of your repository, like at `auth.ts`.

```ts
./auth.ts

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
});
```

## Step 5. Add Signin Button

Next, we can add a signin button somewhere in your application like the Navbar. It will trigger `Auth.js` sign in when clicked.

```tsx
./components/sign-in.tsx

"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";

import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";

import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      toast({
        title: "Sign-in failed",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred during sign-in",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mt-6 flex flex-wrap gap-2.5">
      <Button
        className="background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5"
        onClick={() => handleSignIn("github")}
      >
        <Image
          src="icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login with Github</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;


```

## Step 6. Create `routes.ts`

Create a `routes.ts` file in `constants` directory in `root` for easy routing

```ts
const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
};

export default ROUTES;
```

Now you can use it like: `ROUTES.SIGN_UP`

## Ship it!

Click the “`Login in with GitHub`" button and if all went well, you should be redirected to GitHub and once authenticated, redirected back to the app!

You can build your own `Signin`, `Signout`, etc. pages to match the style of your application, check out session management for more details.

---

---

# 15. `ShadCN` Form Documentation

## Step 1: Install `ShadCN` form component

```bash
npx shadcn@latest add form

npx shadcn@latest add input
```

## Step 2: Create a form schema

Define the shape of your form using a Zod schema in a new file inside `lib` directory `validations.ts`. You can read more about using Zod in the Zod documentation.

```ts
import { number, z } from "zod";
export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please provide a valid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password cannot exceed 100 characters"),
});

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." })
    .max(30, { message: "Username cannot exceed 30 characters." })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores.",
    }),

  name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(50, { message: "Name cannot exceed 50 characters." })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name can only contain letters and spaces.",
    }),

  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please provide a valid email address." }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(100, { message: "Password cannot exceed 100 characters." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character.",
    }),
});
```

## Step 3: Creating a Form with ShadCN

1. Create a new component for your form, e.g., `components/AuthForm.js`.

2. Import the necessary components from `ShadCN`.

Here’s a example of a form with text input, select, and a submit button:

```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ROUTES from "@/constants/routes";

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
  formType: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  formType,
  schema,
  defaultValues,
  onSubmit,
}: AuthFormProps<T>) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  // 2. Define a submit handler.
  const handleSubmit: SubmitHandler<T> = async () => {
    // TODO : Authentication of user
  };

  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

  // 3. Form field
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mt-10 space-y-6"
      >
        {Object.keys(defaultValues).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-1">
                <FormLabel className="paragraph-medium text-dark400_light700">
                  {field.name === "email"
                    ? "Email Address"
                    : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type={field.name === "password" ? "password" : "text"}
                    {...field}
                    className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button
          disabled={form.formState.isSubmitting}
          className="primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900"
        >
          {form.formState.isSubmitting
            ? buttonText === "Sign In"
              ? "Signing In..."
              : "Signing Up..."
            : buttonText}
        </Button>

        {formType === "SIGN_IN" ? (
          <p>
            Don&apos;t have an account?{" "}
            <Link
              href={ROUTES.SIGN_UP}
              className="paragraph-semibold primary-text-gradient"
            >
              Sign Up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <Link
              href={ROUTES.SIGN_IN}
              className="paragraph-semibold primary-text-gradient"
            >
              Sign In
            </Link>
          </p>
        )}
      </form>
    </Form>
  );
};

export default AuthForm;
```

## Step 4: Use the Form Component in a Page

In your Next.js project, navigate to the page where you want to use the form (e.g., `app/(auth)/sign-up/page.tsx` and import your `AuthForm` component:

```tsx
"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

const SignUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignUp;
```

## Conclusion

With these steps, you have a fully functional form using `ShadCN's` latest components in your `Next.j`s project! You can further customize this form by adding additional fields, validation logic, and integrating it with a backend.

---

---

# 16. Create the Mobile Navigation Using `ShadCN`

## Step 1: Install ShadCN Components

First, install ShadCN's `sheet` component in your project:

```bash
npx shadcn@latest add sheet
```

## Step 2: Create the Mobile Navigation with `ShadCN's` Sheet

- Create a new component for the mobile menu, e.g., `components\navigation\navbar\MobileNavigation.tsx`.

- Import the necessary `ShadCN` components.

Here’s a basic example of a mobile menu using `Sheet`:

```tsx
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  // SheetDescription,
  // SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";

import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          height={34}
          width={34}
          alt="Menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/site-logo.svg"
            height={23}
            width={23}
            alt="Logo"
          />
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
            Dev<span className="text-primary-500">Flow</span>
          </p>
        </Link>

        <div className="no-scrollbar flex  h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-10">
              // Add NavLinks for reusability
              <NavLinks isMobileNav />
            </section>
          </SheetClose>

          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient">Log In</span>
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
```

## Step 3: Create Constant for `links`, `labels` and `routes`

- Create new file in `constants` folder namely `sidebarLinks.ts`

eg: `sidebarLinks.ts`

```ts
export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];
```

## Step 4: For Multiple Navigation Links Create `NavLinks.tsx`

- For multiple links and reusability purpose create new file `NavLinks.tsx` with predefined structure of elements.

- Import `sidebarLinks` in page

eg: `NavLinks.tsx`

```tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants/sidebarLinks";
import { cn } from "@/lib/utils";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathName = usePathname();
  const userId = "pravin";

  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathName.includes(item.route) && item.route.length > 1) ||
          pathName === item.route;

        if (item.route === "/profile") {
          if (userId) return (item.route = `${item.route}/${userId}`);
          else return null;
        }

        const LinkComponents = (
          <Link
            href={item.route}
            key={item.label}
            className={cn(
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900",
              "flex items-center justify-start gap-4 bg-transparent p-4"
            )}
          >
            <Image
              src={item.imgURL}
              width={20}
              height={20}
              alt={item.label}
              className={cn({ "invert-colors": !isActive })}
            />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden"
              )}
            >
              {item.label}
            </p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={item.route}>
            {LinkComponents}
          </SheetClose>
        ) : (
          <React.Fragment key={item.route}>{LinkComponents}</React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
```

## Step 5: Use the Mobile Navigation in a Page

- Import `NavLinks` in `MobileNavigation` file

- Navigate to the page where you want to use the mobile menu (e.g., `navbar/index.js`) and import your `MobileNavigation` component:

---

---
