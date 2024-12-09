# Github Actions Demo
This repository demonstrates how to use GitHub Actions to automate workflows for deployment, testing, and custom actions. The project includes simple examples of automating tasks such as deploying a React app, running tests, and fetching random jokes using external APIs.

# Requirements
- GitHub account with access to the repository.
- Node.js installed (for running tests and dependencies).
- A basic React application setup (if using the example deployment).

# Features
- Deploy React app automatically on github pages when changes are pushed to the repository.
- Test automation: runs tests on every push or pull request to the main branch.
- Demonstrates how to use custom GitHub Actions, like fetching random jokes via an API.

# Setup
1. Clone this repository to your local machine.
2. Make sure you have Node.js and npm installed.
3. Install dependencies:
```
npm install
```
4. Create the necessary GitHub Actions workflows in the .github/workflows directory. These workflows are defined in:
- deployment.yaml (for deployment automation)
- tests.yml (for running tests)
- joke.yml (for fetching random jokes from an API)
5. Push changes to the repository to trigger the workflows. GitHub Actions will run automatically based on the triggers specified in the workflows.

# Sources
- [GitHub Actions](https://docs.github.com/en/actions)
- [Joke API](https://official-joke-api.appspot.com/)
- [React](https://official-joke-api.appspot.com/)
- [gh-pages](https://www.npmjs.com/package/gh-pages)
- [Deploy to github pages tutorial](https://www.youtube.com/watch?v=tjV7nVX9CAA)
