<h1 align="center">Welcome to api-land-random-script 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Cloudflare worker random script for api land

### ✨ [Demo: Random script]( https://api-land-random-script.rrullo.workers.dev)

This project is meant to be used with [Wrangler](https://github.com/cloudflare/wrangler). If you are not already
familiar with the tool, we recommend that you install the tool and configure it to work with
your [Cloudflare account](https://dash.cloudflare.com). Documentation can be
found [here](https://developers.cloudflare.com/workers/tooling/wrangler/).

## Install

```sh
yarn install
```

## Run

```sh
wrangler dev
```

## Format

```sh
yarn format
```

## Deploy

```sh
wrangler publish
```

## Documentation

### Routes

> Note: All API endpoints deal with JSON.

| METHODS | ENDPOINT                        | DESCRIPTION                                                                                       |
|:-------:|---------------------------------|---------------------------------------------------------------------------------------------------|
|    *    | /                               | Return a script randomly as application/javascript (to be injected)                               |
|    *    | /:id                            | Return the script with corresponding id as application/javascript (to be injected)                |
|   GET   | /test                           | Webpage to demonstrate and test scripts                                                           |
|   GET   | /test/:id                       | Webpage to demonstrate and test a specific script                                                 |
|   GET   | /api/inject/all                 | Inject the APIs with `<script src="https://api-land-random-script.rrullo.workers.dev/"></script>` |
|   GET   | /api/scripts                    | Return all scripts                                                                                |
|   GET   | /api/scripts/:id                | Return a specific script                                                                          |
|   PUT   | /api/scripts/:id                | Update the script and return it with `id`. Return the deleted script                              |
|   DEL   | /api/scripts/many/:scriptFilter | Delete many scripts based on filter. Return the remaining scripts                                 |
|   DEL   | /api/scripts/:id                | Delete one script based on `id`. Return the deleted script                                        |
|  POST   | /api/scripts                    | Create a new script. Return the created script with `id`                                          |
|  POST   | /api/scripts/many               | Create many scripts from an array of scripts. Return the created scripts with `id`                |

### Models:

* Script
    * input DTO
      ```json
      {
        "name": "string",
        "content": "string",
        "isActivated": "string"
      }
      ```
    * response DTO
      ```json
      {
      "id": "number",
      "name": "string",
      "content": "string",
      "isActivated": "string"
      }
      ```

### Params

|     PARAM     | TYPE                               |
|:-------------:|------------------------------------|
|      :id      | number                             |
| :scriptFilter | 'all' or 'activated' or 'disabled' |

## Author

👤 **Robin RULLO**

* Github: [@robinrullo](https://github.com/robinrullo)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
