# Phaser Cordova ES6

[![Build Status](https://travis-ci.org/udia-software/phaser-cordova-es6.svg?branch=master)](https://travis-ci.org/udia-software/phaser-cordova-es6)
[![Dependency Status](https://img.shields.io/david/udia-software/phaser-cordova-es6.svg)](https://david-dm.org/udia-software/phaser-cordova-es6)
[![Dev-Dependency Status](https://img.shields.io/david/dev/udia-software/phaser-cordova-es6.svg)](https://david-dm.org/udia-software/phaser-cordova-es6#info=devDependencies)

A bootstrap project for building Phaser games using ES6 and Webpack.

This project supports Cordova, specifically compiling to:

* Web Browsers
* iOS
* Android

## Development

Ensure you have NodeJS installed.

1. Clone this repo:

    ```bash
    git clone https://github.com/udia-software/phaser-cordova-es6.git
    ```

2. Install dependencies:

    Navigate to the cloned repo’s directory.

    ```bash
    npm install
    ``` 

3. Run the setup script:

    Running the setup script will provide an interactive prompt which will replace the existing project names with your project's names and identifiers.

    ```bash
    npm run setup

    > node setup.js

    What is the project cordova name? (e.g. ca.udia.phaserCordovaES6) com.mysite.mygame
    What is the project package name? (e.g. phaser-cordova-es6) my-game
    What is the project display name? (e.g. Phaser Cordova Quickstart) My Game
    (Optional) What is the project description? This is my fun phaser game!
    What is the author's email? (e.g. admin@alexander-wong.com) dev@test.com
    What is the author's name? (e.g. Alexander Wong) Dev Test
    (Optional) What is the author's site? (e.g. https://alexander-wong.com) https://test.com
    Updating package.json...
    Updating config.xml...
    Updating www/index.html...
    Updating package-lock.json...
    ```

    It is at this point where you can remove the existing `.git` directory and initialize your project.

    ```bash
    rm -rf .git
    git init
    ```

4. Run the webpack code compiler and watcher:

    Run:

    ```bash
    npm run dev
    ```

    This will run webpack which minimizes and compile the **development** bundle into `www`.

5. Run Cordova commands.

    In a new terminal window, run the following

    ```bash
    # If the platform has not been added, add the browser platform.
    cordova platform add browser # peer dependency errors here can be ignored

    # After the platform is added, you can use live-reload
    # To test browser development locally
    cordova run browser -- --live-reload
    ```


## Build for deployment:

Run:

```bash
npm run deploy
```

This will uglify and minimize the compiled **production** bundle into `www`.

Afterwards, you can use Cordova to build and run the browser and native ios/android applications.

```bash
cordova run android
# Run application on Android/Emulator
cordova run ios
# Run application on iOS/Emulator
cordova run browser
# Same as development browser run command, without live reload
```

## License

[Apache License, Version 2.0](LICENSE)

```text
Copyright 2017 Udia Software Incorporated

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
