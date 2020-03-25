# Azure Devops Toolkit

## What is Azure Devops Toolkit?

Out of the box Azure Devops lacks a few features which could speed up your day to day efficency. Azure Devops Toolkit is a chrome extension designed to impliment new features to make your life easier!

## Features

**Copy Branch Button**\
This feature impliments a button which allows you to copy the current branch name of the pull request your are working on.

**VS Code File Link**\
This feature adds a button which opens the current file in vs code when someone has left a comment on your pull request. 

## Installation 

1. **Clone the repository**
```
git pull https://github.com/boreme12/azure-devops-toolkit-chrome-ext.git
```
2. **Install npm packages in the root directory**
```
npm i
```
3. **Create the chrome extension**
```
npm run build-prod
```
4. **Add the extension to Google Chrome**\
4.1. Navigate to More Tools > Extensions in the Chrome menu\
4.2. Click on load unpacked and select the dist folder


## Configuration (Set your project directory)

1. Navigate to More Tools > Extensions in the Chrome menu
1. Find the Azure Devops Toolkit and click details
1. Click on extension options
1. Enter your project directory and click save

## TODOs
- [ ] Create icons and artwork for application and Chrome store
- [ ] Update UI/UX
- [ ] Implement compatibility with other IDEs
- [ ] Refactor code
- [ ] Optimize code to work better with webpack 

