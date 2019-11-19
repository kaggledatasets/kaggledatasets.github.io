# kaggledatasets.github.io

Official Website of Kaggle Datasets

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Following are the packages/frameworks requried to get this site up and running.  

- [Node.js](https://nodejs.org/en/download/)
- [React](https://reactjs.org/) and [create-react-app](https://www.npmjs.com/package/create-react-app)
- [Bootstrap](https://getbootstrap.com/)

### Setup

Clone the repository:  

```bash
git clone https://github.com/kaggledatasets/kaggledatasets.github.io
cd kaggledatasets.github.io
```

Install the npm dependencies:

```bash
npm install
```

Start the website:

```bash
npm run start
```

### Running Tests

```bash
npm run test
```

### Linting and Fixing Linter Issues

```bash
npm run lint
npm run lint:fix # fixes linter issues which can be solved automatically
```

## Deployments

The website is hosted on Github Pages at [https://kaggledatasets.github.io](https://kaggledatasets.github.io).
To deploy changes, merge your latest code into the `source` branch. A build will be automatically built and committed to the master branch via a Travis CI job.

## License

This website is Apache-2.0 licensed, as found in the [LICENSE](LICENSE) file.
