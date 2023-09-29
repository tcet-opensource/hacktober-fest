# Hacktoberfest 2023

**Note: The Hacktober Fest page is built using React; a JavaScript library for building user interfaces and Vite; a frontend tool used for building fast and optimized web applications.**

### Steps to run the site on your local system: 
These are the steps you need to follow to get this site on your local system.

### Install Git in your computer
Follow these steps to install git in your computer.
1. Go to [https://git-scm.com/downloads](https://git-scm.com/downloads).
2. Click on Windows. Download should start.
3. Go to downloads and install the package.

### Clone the repo
Open Git Bash in any folder and paste the following command

```bash
git clone https://github.com/tcet-opensource/hacktober-fest.git
```

### Install NodeJs

1. Go to [https://nodejs.org/en/download](https://nodejs.org/en/download)
2. Select <b>Current</b>.
3. Download the 64-bit .msi version. Follow the steps and install NodeJS.


**Note: It is important to have NodeJS in your system**


### Open the folder in VS Code
1. Install [VS Code](https://code.visualstudio.com/docs/?dv=win32user) if not installed. 
2. Open Windows Terminal in the folder you have cloned the repo, as done in [step 2](#clone-the-repo).

### Install Important Packages/Dependencies

Install pnpm globally 

```bash
npm install -g pnpm
```

You can make changes to your respective files and changes will be shown once you have saved the file.

### Commands used to run locally 

1. To run the commands, make sure that you have installed pnpm globally first.
2. All commands are run from the root of the project, from a terminal

Here are a set of commands used to run locally:

| **Command** | **Action** |
| -------- | -------- |
| `pnpm`   | Installs dependencies |
| `pnpm run dev` | Starts local dev server at `localhost:3000` |
| `pnpm run build` | Build your production site to `./dist/` |
| `pnpm run preview` | Preview your build locally, before deploying |

### Steps to run after a Pull / Merge: 

1. To install all dependencies

```bash
pnpm install
```
2. To run local dev environment

```bash
pnpm run dev
```

