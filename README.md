# webdriverio-basics

## About this project
This repo is dedicated to getting familiar with the basics of automated testing, BDD and WebDriverIO. It focuses on testing with the DuckDuckGo website, using a simple search of the word 'cucumber'. Only one feature is tested: the search feature. The step definitions, support files and page objects within the repo all exist to support testing this one feature.

The Page Object Pattern is used here to support reusability of the functions: the relevant locators and validations are specific to the 'Home' and 'Results Page' objects. The support files are based on the properties and methods of these objects and the step definitions are based on the functions within the support files. 

## Future enhancements
More features could be tested. This would mean creating more feature files, step definitions, support files and page objects. There is also room to optimise the wdio configuration file for testing. Even though the feature file returns passes for all the steps, there is a recurring 'socket hang up' error which results in a failed test in the Spec reporter file.  

## How to Run
1. Ensure npm, Java and node.js are installed.

2. Clone the repository / download the files from the repo.

3. Navigate to the root folder in the terminal.

4. Run this command:
```
$ npm run wdio
```

