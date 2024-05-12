# Medical Health Backend

## Description
This project is a backend service built with Node.js v18 that provides a REST API for managing patient medical records and doctor information. The main objective is to facilitate immediate access to patient medical records for doctors.

## Table of Contents
- [Features](#características)
- [Installation](#instalación)
- [Environment Variables](#environment-variables)
- [Usage](#uso)
- [Contributing](#contribución)
- [Contact](#contacto)

## Features

- Doctors can register in the system ✅
- Autentication by JWT ✅

## Installation

To install this project, it is necessary to have Node in a version equal to or greater than 18. It is recommended to use NVM, which allows us to have different versions of Node.

 - [Linux/MacOS](https://github.com/nvm-sh/nvm)
 - [Windows](https://github.com/coreybutler/nvm-windows)

Once you have NVM installed, run the following commands to use NVM with Node >= v18

```
    nvm install 18
```

To verify the installation, you can run the following command

```
    nvm ls
```

When you already have Node installed on your system, make sure you have NPM by running the following command

```
    npm -v
```

When you have Node and NPM installed, you can install the project dependencies by doing the following

- In the root of the project run the following command

```
    npm install
```
This command will install all the dependencies that are necessary to run the project

## Environment Variables

List of environment variables used in the project and their purposes

- `PORT`:  The port where backend servise run
- `DB_CNN`:  Database connection object 
- `SECRET_JWT_SEED`:  Database connection object 

To use these variables, you have to make a copy of the .env.example file to .env and assign the corresponding values.

```
    cp .env.example .env
```

## Usage

To run the project, follow these steps:

1. Ensure that you have installed all the dependencies and configured the environment variables.
2. Run the following command:

```
    npm run dev
```

## Contributing

To make a contribution, it is necessary to have the "main" branch updated and from there create a new branch with the id provided in the GitHub issue so that there is a relationship between the branch and the issue created.


## Contact
Developed with love ♥️ by:
imjavieralonso@gmail.com
