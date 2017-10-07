/**
 * Script to customize project after git clone.
 * Will replace all bootstrap string variables with user defined project vars.
 */

const readlineSync = require('readline-sync')
const fs = require('fs')
const path = require('path')

/* eslint-disable no-useless-escape */
const CORDOVA_NAME_RE = /^([a-zA-Z0-9]{1,}[.]*)+$/
const PACKAGE_NAME_RE = /^(?:@[a-z0-9-~][a-z0-9-._~]*)?[a-z0-9-~][a-z0-9-._~]*$/
const DISPLAY_NAME_RE = /^[a-zA-Z0-9\ ]+$/
const EMAIL_RE = /.+@.+\..+/i
/* eslint-enable no-useless-escape */

// files that we are changing
const CONFIG_PATH = path.resolve(__dirname, 'config.xml')
const PACKAGE_PATH = path.resolve(__dirname, 'package.json')
const PACKAGE_LOCK_PATH = path.resolve(__dirname, 'package-lock.json')
const INDEX_PATH = path.resolve(__dirname, 'www', 'index.html')

// strings we are replacing
const REPLACE_CORDOVA_NAME = 'ca.udia.phaserCordovaES6'
const REPLACE_PACKAGE_NAME = 'phaser-cordova-es6'
const REPLACE_DISPLAY_NAME = 'Phaser Cordova Quickstart'
const REPLACE_DESCRIPTION = 'A bootstrap project for building Phaser games using ES6 and Webpack.'
const REPLACE_AUTHOR_EMAIL = 'admin@alexander-wong.com'
const REPLACE_AUTHOR_NAME = 'Alexander Wong'
const REPLACE_AUTHOR_SITE = 'https://alexander-wong.com'

// values we are replacing the strings with
var cordovaName
var packageName
var displayName
var description
var authorEmail
var authorName
var authorSite

function trim (val) {
  return val.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
}

function getCordovaName () {
  while (!cordovaName) {
    var answer = trim(
      readlineSync.question(
        `What is the project cordova name? (e.g. ${REPLACE_CORDOVA_NAME}) `
      )
    )
    if (answer === REPLACE_CORDOVA_NAME) {
      console.log(`\tInvalid entry: (cannot be ${REPLACE_CORDOVA_NAME})`)
    } else if (CORDOVA_NAME_RE.test(answer)) {
      cordovaName = `${answer}`
    } else {
      console.log(
        `\tInvalid entry: '${answer}' (must be alphanumeric with periods)`
      )
    }
  }
  getPackageName()
}

function getPackageName () {
  while (!packageName) {
    var answer = trim(
      readlineSync.question(
        `What is the project package name? (e.g. ${REPLACE_PACKAGE_NAME}) `
      )
    )
    if (PACKAGE_NAME_RE.test(answer)) {
      packageName = `${answer}`
    } else {
      console.log(
        `\tInvalid entry: '${answer}' (must be valid JS package name)`
      )
    }
  }
  getProjectDisplayName()
}

function getProjectDisplayName () {
  while (!displayName) {
    var answer = trim(
      readlineSync.question(
        `What is the project display name? (e.g. ${REPLACE_DISPLAY_NAME}) `
      )
    )
    if (DISPLAY_NAME_RE.test(answer)) {
      displayName = `${answer}`
    } else {
      console.log(
        `\tInvalid entry: '${answer}' (must be alphanumeric with spaces)`
      )
    }
  }
  getProjectDescription()
}

function getProjectDescription () {
  description = trim(
    readlineSync.question('(Optional) What is the project description? ')
  )
  getAuthorEmail()
}

function getAuthorEmail () {
  while (!authorEmail) {
    var answer = trim(
      readlineSync.question(
        `What is the author's email? (e.g. ${REPLACE_AUTHOR_EMAIL}) `
      )
    )
    if (EMAIL_RE.test(answer)) {
      authorEmail = `${answer}`
    } else {
      console.log(`\tInvalid entry: '${answer}' (must be a valid email)`)
    }
  }
  getAuthorName()
}

function getAuthorName () {
  while (!authorName) {
    var answer = trim(
      readlineSync.question(
        `What is the author's name? (e.g. ${REPLACE_AUTHOR_NAME}) `
      )
    )
    if (answer) {
      authorName = `${answer}`
    } else {
      console.log(`\tInvalid entry: (cannot be empty)`)
    }
  }
  getAuthorSite()
}

function getAuthorSite () {
  authorSite = trim(
    readlineSync.question(
      `(Optional) What is the author's site? (e.g. ${REPLACE_AUTHOR_SITE}) `
    )
  )
  replaceFilesAndPrompt()
}

function replaceFilesAndPrompt () {
  // config.xml
  fs.readFile(CONFIG_PATH, 'utf8', function (err, data) {
    console.log('Updating config.xml...')
    if (err) return console.error(err)
    var result = data
    result = result.replace(REPLACE_CORDOVA_NAME, cordovaName)
    result = result.replace(REPLACE_DISPLAY_NAME, displayName)
    result = result.replace(REPLACE_DESCRIPTION, description)
    result = result.replace(REPLACE_AUTHOR_EMAIL, authorEmail)
    result = result.replace(REPLACE_AUTHOR_NAME, authorName)
    result = result.replace(REPLACE_AUTHOR_SITE, authorSite)
    fs.writeFile(CONFIG_PATH, result, 'utf8', function (err) {
      if (err) return console.error(err)
    })
  })

  // package.json
  fs.readFile(PACKAGE_PATH, 'utf8', function (err, data) {
    console.log('Updating package.json...')
    if (err) return console.error(err)
    var result = data
    result = result.replace(REPLACE_PACKAGE_NAME, packageName)
    result = result.replace(REPLACE_DISPLAY_NAME, displayName)
    result = result.replace(REPLACE_DESCRIPTION, description)
    result = result.replace(REPLACE_AUTHOR_EMAIL, authorEmail)
    result = result.replace(REPLACE_AUTHOR_NAME, authorName)
    fs.writeFile(PACKAGE_PATH, result, 'utf8', function (err) {
      if (err) return console.error(err)
    })
  })
  // package-lock.json
  fs.readFile(PACKAGE_LOCK_PATH, 'utf8', function (err, data) {
    console.log('Updating package-lock.json...')
    if (err) return console.error(err)
    var result = data
    result = result.replace(REPLACE_PACKAGE_NAME, packageName)
    fs.writeFile(PACKAGE_LOCK_PATH, result, 'utf8', function (err) {
      if (err) return console.error(err)
    })
  })
  // www/index.html
  fs.readFile(INDEX_PATH, 'utf8', function (err, data) {
    console.log('Updating www/index.html...')
    if (err) return console.error(err)
    var result = data
    result = result.replace(REPLACE_DISPLAY_NAME, displayName)
    fs.writeFile(INDEX_PATH, result, 'utf8', function (err) {
      if (err) return console.error(err)
    })
  })
}

/**
 * If the setup script has run already, don't do anything else
 */
function checkSetupRan () {
  fs.readFile(CONFIG_PATH, 'utf8', function (err, data) {
    if (err) console.error(err)
    if (data.indexOf(REPLACE_CORDOVA_NAME) >= 0) {
      getCordovaName()
    } else {
      console.log('Setup script was already run. Doing nothing.')
    }
  })
}
checkSetupRan()
