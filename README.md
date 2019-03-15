## Planning

#### Configuration/dependencies


Dependencies | Location | Description
------------- | ----- | ------
webpack | _package.json_ | Module bundler
webpack-cli | _package.json_ | Command line interface for webpack
webpack-dev-server | _package.json_ | _
uglifyjs-webpack-pulugin | _package.json_ | Renames variables and functions
etc | _etc_ | etc

 * For version information for each dependency, please refer to the package.json

#### Specs

Specification | Input | Output
------------- | ----- | ------
Take in a year and return age based on current year| _1983_ | _36_
Take in a year & month and return age based on current year & month| _December, 1983_ | _36_
Take in a year, month and date and return current age on Earth| _December, 31, 2003_ | _35_
Take in a year, month and date and return current age on Mercury| _December, 31, 2003_ | _8.4_
Take in a year, month and date and return current age on Venus| _December, 31, 2003_ | _21.7_
Take in a year, month and date and return current age on Mars| _December, 31, 2003_ | _65.8_
Take in a year, month and date and return current age on Jupiter| _December, 31, 2003_ | _415.1_
Take in a year, month, date, life expectancy, planet and return remaining years left on planet| _December, 31, 2003, 79, Mercury_ | _70.6_
Take in a year, month, date life expectancy, planet and return age past life expectancy if the age exceeds the life expectancy on that planet | _December, 31, 2003, 79, Jupiter_ | _336.1_


#### Integration
  * Configure package.json, webpack.config.js, .gitignore, .eslintrc
  * Add initial project files and directories
  * Configure karma.conf.js


#### Polish
  * Run linter to make sure code is clean
  * Make README awesome

#### Stretch Goals
  * UI logic
  * Custom css styling
  * Additional Calculator Features
