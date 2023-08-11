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

## Todo's

### Specify fields to return

```
GET /events?fields=id,name
```

### Specify relationships to return

```
GET /events?include=director
```

### Specify relationship fields to return

```
GET /events?fields[events]=name,director&include=director&fields[directors]=name,email
```

### Specify pagination

```
GET /events?page[number]=1&page[size]=10
```

### Specify sorting

```
GET /events?sort=name
```

```
GET /events?sort=-startDate,name
```

### Specify filters

```

```

### Include relationship links in response

```json
{
   "links": {
      "self": "/events/1",
      "related": "/events/1/comments"
   }
}
```

```json
{
   "links": {
      "self": "/events?page[number]=1&page[size]=10",
      "next": "/events?page[number]=2&page[size]=10",
      "last": "/events?page[number]=12&page[size]=10"
   }
}
```

```json
{
   "data": [
      {
         "type": "comments",
         "id": "1",
         "attributes": {
            "text": "HATEOS are the thing!"
         },
         "links": {
            "self": "/comments/1"
         },
         "relationships": {
            "author": {
               "links": {
                  "self": "/comments/1/relationships/author",
                  "related": "/comments/1/author"
               }
            },
            "articles": {
               "links": {
                  "self": "/comments/1/relationships/articles",
                  "related": "/comments/1/articles"
               }
            }
         }
      }
   ],
   "links": {
      "self": "/comments"
   }
}
```

### Return JSON or JSONAPI

#### JSON

Request

```
GET /events?page[number]=1&page[size]=2&fields=name
accept: application/json
```

Response

```json
[{ "name": "Monsta Spring Bash" }, { "name": "ABQ City League Summer" }]
```

#### JSON-API

Request

```
GET /events
   ?page[number]=1
   &page[size]=2
   &include=director
   &fields[events]=name,director
   &fields[directors]=name,email
accept: application/vnd.api+json
```

Response

```json
{
   "data": [
      {
         "type": "events",
         "id": "1",
         "attributes": {
            "name": "Monsta Spring Bash"
         },
         "relationships": {
            "director": "/directors/1"
         }
      },
      {
         "type": "events",
         "id": "2",
         "attributes": {
            "name": "ABQ City League Summer"
         },
         "relationships": {
            "director": "/directors/2"
         }
      }
   ],
   "included": [
      {
         "type": "directors",
         "id": "1",
         "attributes": {
            "name": "Tom Teller",
            "email": "tomteller1980@gmail.com"
         }
      },
      {
         "type": "directors",
         "id": "2",
         "attributes": {
            "name": "Kit Carlson",
            "email": "kitcarlson1313@gmail.com"
         }
      }
   ]
}
```
