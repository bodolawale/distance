## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install

```

## Configuration

Create a .env file in the root directory following the keys in .env.example

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Tools Used

NestJS
TypeORM
Postgres

## Stuff I did not finish

Custom validators for create-location.dto.ts. I could not get the validator to inject the locationRepository

PATCH on the edit endpoint, I used a PUT instead. (onDelete and onUpdate were not cascading)

Tests. The time frame for the project was too short to write any tests

## Notice

Distance was in kilometers
