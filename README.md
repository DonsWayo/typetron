# typetron

![David](https://img.shields.io/david/dev/DonsWayo/typetron)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/DonsWayo/typetron)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/DonsWayo/typetron/dev/electron)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/DonsWayo/typetron/dev/webpack)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/DonsWayo/typetron/dev/typescript)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/DonsWayo/typetron/react)


### A Boilerplate for an Easy Start with TypeScript React and Electron.


## Install
Clone the repository

install the dependencies:

```bash
cd <your-project-name>
npm install
```

## Usage
Both processes have to be started **simultaneously** in different console tabs:

```bash
npm run start-renderer-dev
npm run start-main-dev
```

This will start the application with hot-reload so you can instantly start developing your application.

You can also run do the following to start both in a single process:

```bash
npm run dev
```

## Packaging
We use [Electron builder](https://www.electron.build/) to build and package the application. By default you can run the following to package for your current platform:

```bash
npm run dist
```

This will create a installer for your platform in the `releases` folder.

You can make builds for specific platforms (or multiple platforms) by using the options found [here](https://www.electron.build/cli). E.g. building for all platforms (Windows, Mac, Linux):

```bash
npm run dist -- -mwl
```

