![Logo](.github/mpp-kickstart-128.png)

# mpp-kickstart

This is a template bot for [Multiplayer Piano](https://multiplayerpiano.net). Use it as a template to generate scripts for MPP that use Node.js. Contributions are welcome.

## Requirements

-   **A bot token from the MPP.net staff**
-   Machine that can run Node.js
-   pnpm installed system-wide (`npm i -g pnpm`)
-   Knowledge of git and JavaScript ES6 or later
-   A GitHub account
-   An editor of your choice, preferrably [vscode](https://code.visualstudio.com) if you don't have one

## Setup Guide

1. If you don't have node installed, get it from [the official website](https://nodejs.org) or use a version manager like [fnm](https://github.com/Schniz/fnm?tab=readme-ov-file#installation) or [nvm](https://nvm.sh). You will probably need to install pnpm with `npm i -g pnpm` or by [following the official installation instructions](https://pnpm.io/installation).

2. Create a repository with this template by pressing the green "Use this template" button above, and press "Create a new repository".

3. Install the required packages by running `pnpm i`.

4. Copy the `.env.template` file to `.env` and edit it to your needs (put your bot token in it, etc.).
   The reason we do this is because we don't want to push our `.env` file to git.

5. Edit the code in `src/index.js` to your liking

6. Run the bot with `node .`
