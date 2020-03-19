# api.inspectionsupport.net

This is all of the JSON documentation for the ISN API via `/[ck]/rest`

## What is this

This is a TypeScript create-react-app container running the TS version of `swagger-ui-react`

The description of the API is available via OPENAPI syntax at `public/swagger/isn.json`

## Editing

Edit the thing here: (https://editor.swagger.io/)[https://editor.swagger.io/]

## Testing locally

`npm start`

## Deploying

Deploying is (1) updating S3 with the current version, (2) invalidating all of the files on CloudFront

`npm run deploy`

`npm run invalidate`
