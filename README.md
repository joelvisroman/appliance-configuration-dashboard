# Appliance Configuration Dashboard

## Development

This is a monorepo including two packages: configuration-dashboard-backend and configuration-dashboard-client.
It uses [Lerna](https://lernajs.io/) to manage packages.

To bootstrap the project, just run: `npm i`.

This will also bootstrap Lerna for you.

While both projects are independent on its conception, you can use `npm start` to build and serve both frontend and backend.

By default projects will autoreload on any file configuration change.

## Known Issues / Pending

- [ ] configuration-frontend fails to build
- [ ] docker-compose should setup both projects and autoreload
