## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Endpoints

Swagger

```
http://localhost:3000/docs
```

Check Status

```
GET http://localhost:3000/
```

Events

```
GET http://localhost:3000/events
```

```
GET http://localhost:3000/events/:id
```

```
POST http://localhost:3000/events
content-type: application/json

{
   "name": "Foo Championships"
}
```

```
PATCH http://localhost:3000/events/:id
content-type: application/json

{
   "name": "Bar Championships"
}
```

```
DELETE http://locahost:3000/events/:id
```
