# Tap Lovely NestJS Backend

This is the backend for the Lovely Legends application, built with NestJS.

## Description

The project provides API endpoints for user management, settings, statistics, and Telegram bot integration.

## Installation

```bash
$ npm install
```

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

## Environment Variables

Make sure to set up the following environment variables:

- `MONGO_URI`: MongoDB connection string
- `BOT_TOKEN`: Telegram bot token
- `WEB_APP`: Web application URL
- `TG_WEBHOOK`: Telegram webhook URL

## API Documentation

API documentation is available at `/api-docs` when the server is running.

When making requests from client to  NestJS backend, include the Telegram authentication data in the headers:
```javascript
fetch('http://your-api.com/users/123', {
  headers: {
    'X-Telegram-Auth': JSON.stringify(tgAuthData)
  }
})
```

## License

This project is [MIT licensed](LICENSE).