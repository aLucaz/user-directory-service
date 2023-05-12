# User Directory Service 🫂🚀

Simple service using hexagonal architecture in Nest.js. This is a clean and
clear approach of the use of Nest.js with SOLID & Clean architectue.

I'm open to suggestions and feedback, please contact me at [my email](arturo.lucas.pe@gmail.com).

## Technologies used

- NestJS
- Node.js
- Express.js
- RabbitMQ
- Docker
- Make
- Docker-compose
- Typescript
- Clean Architecture
- Hexagonal Architecture
- Advanced Generics in Typescript

## Can be added in future versions ✅
- abstraction of the rabbitmq connection
- complete crud
- guards
- middlewares

## Pre-requisites
- docker
- make
- docker-compose

## Setup ✅

I'm using makefile to facilitate the start so you can run any of this commands: 

```bash
# to run the nest project and the rabbitmq instance
$ make up-all
```

```bash
# to run only the nest project
$ make up-app
```

```bash
# to run only the rabbitmq instance
$ make up-queue
```
You can also use the docker-compose commands to start the projects.

## Running the app locally 💻 

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Stay in touch

- Author - [aLucaz](https://github.com/aLucaz)
- Linkedin - [Arturo Lucas](https://www.linkedin.com/in/arturo-lucas/)
