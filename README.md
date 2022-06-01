# basic-express-server

[Pull Request]()
[GitHub]()
[heroku]()


- Create a new repository called basic-express-server and Work in a new branch called dev
-
## Person Route
Method: GET
Path: /person
Expects a query string from the user with a “name” property
When present, output JSON to the client with this shape: { name: "name provided" }
Without a name in the query string, force a “500” error

##  Create 2 middlewares:
logger.js

validator.js

## Create 2 error-handlers:
404.js

500.js

## Testing
- 404 on a bad route
- 404 on a bad method
- 500 if no name in the query string
- 200 if the name is in the query string
- given an name in the query string, the output object is correct
