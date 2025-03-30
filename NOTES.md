## Class notes

- whenever our app grows testing the components require to test each and every component because addition of new components might break the old one.
- test driven development:- we write test cases before even we before write our code. It causes development process slow but make developemt process slow.
- Different type of testing;-
  - manual testing - (require humans look and test)
  - automated testing - (code testing a code)- selenium(workflow of test ) - cyprus
  - E2E testing - (simulate a user interaction with the platform, given to QA team, they use headless browsers it does not show anything, without viewport or UI, with headless we can execute test cases faster because we dont make to paint the browser, they have DOM and all that)
  - unit testing:- belong to developers
  - integration testing:- testing the integration of two or more components
  - regression testing
  - smoke testing
- In older project enzyme is used but know a testing library known as jest(js testing framework) is used.
- react testing library is a part of testing library.
- react testing library behind the scene used the jest() - npm install --save-dev @testing-library/react @testing-library/dom - npm i -D jest. - configuring the jest - we create "jest.config.js" file by using "npx jest --init" - to run simply write "npm run jest" we get error like "jest-environment-jsdom" is no longer shipped by default", so need to install it sepearately - npm i -D jest-environment-jsdom - now run "npm run jest", here jest will check all available test cases and run them. - now create test inside components folder inside a "**test** (this cal- jest notled as duder test)" - convention used in industry to write "file_Name.test.js" file - to make sure our file understand the import we need to take help from babel as we get error that import is not recognizable "npm install --save-dev babel-jest @babel/core @babel/preset-env" - in ".babelrc" add configuration and add quotes to all key value pair for converting to JSON objects - jest not understand import we take help of babel and add configuration for it. - coverage folder give us the coverage report like how much test cases are filled , we need the coverage only in local machine so include these in gitignore - "Support for the experimental syntax 'jsx' isn't currently enabled" if we get this error then we use package
- Unit testing
  - as soon as header components loads, logo must be there
  - at initial cart item must be 0
  - status must be online by default.
