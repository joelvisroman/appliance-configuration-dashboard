# Appliance Configuration UI

## Development

## Project Design

The configuration UI uses React as UI framework relying on Mobx for store and state management.

Routing is handled by Route5

## Testing

### Unit Testing

Test suite can be run executing:

`$ npm test`

Tests files are placed at the same level of the module they test following the same pattern but prepending `.test` before the file extenstion.

Eg. for `users.ts`: the resulting test file should be `users.test.ts`
