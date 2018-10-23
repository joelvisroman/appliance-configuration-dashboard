# Appliance Configuration Dashboard

## Development

This is a monorepo including two packages: configuration-dashboard-backend and configuration-dashboard-client.
It uses lerna to manage packages.

1. Install dependencies: `$ npm i`
1. Start the project: `$ npm start`

This last step will initialize every package on this repo for you.

Whilde both projects are independt on its conception, you can use `docker-compose up` to build and serve both frontend and backend.

## Known Issues / Pending

- [ ] configuration-frontend fails to build
- [ ] docker-compose should setup both projects and autoreload
