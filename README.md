# Flashtest Example

1. Run `npm run dev:front` and `npm run dev:server` to start usual front and backend parts of application.

2. Stop `dev:front` script, because `write-test:front` runs on the same port
3. Run `npm run write-test:front` and `npm run write-test:server`
4. Go to `http://localhost:8002`, use page as usual user, press `Finish` button - test file should be created in `[appRoot]/__tests__` folder.