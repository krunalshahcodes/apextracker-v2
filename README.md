# Apex Tracker v2

A simple, easy to use module for interacting with the [Apex Tracker](https://apex.tracker.gg/site-api)

## Setup and Installation

```
yarn add apextracker-v2
```

or if you are using npm

```
npm i apextracker-v2
```

1. Signup at [ApexTracker](https://apex.tracker.gg/)
2. Generate an [API Key](https://apex.tracker.gg/site-api)

## Get Player

```js
const Apex = require("apextracker-v2");
const api = new Apex("Your Api Key");

api
  .user("username", "platform [origin||xbl||psn]")
  .then(res => console.log(res.data));
```

## Search Player

```js
const Apex = require("apextracker-v2");
const api = new Apex("Your Api Key");

api
  .search("platform [origin||xbl||psn]", "search term")
  .then(res => console.log(res.data));
```
