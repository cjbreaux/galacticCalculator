## Project Title
Galactic Calculator

#### Names of Author(s)
Chris Breaux

#### Date of Completion

3.15.2019

### Description

This is the first independent project from the JavaScript  track at Epicodus. The intent is to practice unit testing with Jasmine & Karma, separation of logic, using classes, and configuring a development environment using webpack. This application will be able to take in a users birthday and calculate their age on Earth, Mercury, Venus, Mars and Jupiter. In addition, the user will enter a life expectancy value and the application will determine the years remaining or in excess for the given planets.

### Specs

Specification | Input | Output
------------- | ----- | ------
Take in a year and return age based on current year| _1983_ | _36_
Take in a year & month and return age based on current year & month| _September, 1983_ | _36_
Take in a year, month and date and return current age on Earth| _September, 9, 1983_ | _35_
Take in a year, month and date and return current age on Mercury| _September, 9, 1983_ | _145.83_
Take in a year, month and date and return current age on Venus| _September, 9, 1983_ | _56.45_
Take in a year, month and date and return current age on Mars| _September, 9, 1983_| _18.61_
Take in a year, month and date and return current age on Jupiter| _September, 9, 1983_ | _2.95_
Take in a year, month, date, life expectancy, planet and return remaining years left on planet| _September, 9, 1983, 79, Venus_ | _22.45_
Take in a year, month, date life expectancy, planet and return age past life expectancy if the age exceeds the life expectancy on that planet | _September, 9, 1983, 79, Mercury_ | _66.83_



### Technologies and Resources

* HTML  
* Sass
* JavaScript
* jQuery
* Webpack v4.19.1
* Karma v2.0.0
* Jasmine v3.1.0

### Responsiveness

Currently, the site is only minimally styled. UI/UX with responsive elements are planned.

### Setup Instructions
* Clone file from https://github.com/cjbreaux/galacticCalculator.git
* Navigate to the cloned folder in the terminal.
* While in the project folder, run the following in the terminal:
 ```html
$ npm i
```
* After the files have downloaded, run the following:
```html
$ npm start
```



### Stretch Goals

* Style page using bootstrap and custom css.
* Error checking on input fields.
* Refactor UI logic to utilize looping (especially in the UI);

### License

GNU License

Copyright (c) 2019 **Chris Breaux**
