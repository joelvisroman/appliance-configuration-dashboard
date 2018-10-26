# Appliance Configuration Dashboard Backend

This project is used for supporting and serving Appliance Configuration Dashboard ui.

## Development

Refer to the documentation of the project's monorepo root.

For running in isolation, you should:

1. `npm i`
1. `npm start`

### Folder structure

This project uses a simplified MVC structure, spliting the code in _routes, handlers and models_.

On routes, we specify the route object that's going to be passed to Hapi.js router.
Each route has a corresponding _handler_. Which is in charge of taking user input and send the output. Their scope is limited to take input, delegate the work to the _model_ and send the output back to the caller.

### Testing

We have two kind of tests:

**Unit tests for models**: Included at the same level than the file we're testing for. We require 100% test coverage for models.

**Functional tests**: Included at `src/tests`, they use `server inject` method from hapi to simulate api calls. Coverage can't be properly measure, but we should test every endpoint we add and at least one test for every possible response.
