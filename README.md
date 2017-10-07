# Phaser Cordova ES6

A bootstrap project for building Phaser games using ES6 and Webpack which can be run in the web browser and as a iOS or Android application.

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

3. Run the webpack code compiler and watcher:

    Run:

    ```bash
    npm run dev
    ```

    This will run webpack which minimizes and compile the **development** bundle into `www`.

4. Run Cordova commands.

    In a new terminal window, run the following

    ```bash
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
