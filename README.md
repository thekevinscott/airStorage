# airStorage

`airStorage` provides mechanisms by which clients can securely store key/value pairs remotely to a server. The key/value pairs can optionally can be assigned a unique token allowing access across multiple clients. The data has no expiration time.

`airStorage` is licensed under MIT.

## Installing

You can install with `yarn`:

```
yarn add airStorage
```

Or `npm`:

```
npm install airStorage --save
```

## Usage

Where possible, `airStorage` is a 1:1 mapping with `localStorage`.

### `setItem`

You can save or update data for a particular key with `setItem`:

```
var airStorage = require("airStorage");
airStorage.setItem("myDog", "Rex", function(err, resp) {
  if (err) {
    console.error("There was an error", err);
  }

  console.log("data has been stored successfully");
});
```

### `getItem`

You can fetch the value of a key with `getItem`:

```
var airStorage = require("airStorage");
airStorage.getItem("myDog", function(err, result) {
  if (err) {
    console.error("There was an error", err);
  }

  console.log("The response", result);
});
```

You can remove the value at a specific key with `removeItem`:

```
var airStorage = require("airStorage");
airStorage.removeItem("myDog", function(err, result) {
  if (err) {
    console.error("There was an error", err);
  }

  console.log("The data was removed");
});
```

## Persistence

Every request to `airStorage` requires a user key.

If `airStorage` is not provided with an explicit user key, the first network request will return a randomly generated user key back. This key will be stored in `localStorage`. This will persist the data for a particular browser but will be cleared as soon as the user clears their cache.

To persist data more persistently, or to sync data across browsers, you can identify yourself with a unique and long-lasting key.

### Getting a key

You can retrieve a key at [https://airstorage.io](https://airstorage.io).

### Configuring a key

Once you have a key, you can configure `airStorage` with:

```
var airStorage = require("airStorage");
airStorage.config({
  key: "my-unique-key"
});
```

Alternatively, you can configure the object like so:

```
var airStorage = require("airStorage")({
  key: "my-unique-key"
});
```

### Handling network timeouts

If `airStorage` is unable to synchronize data remotely (for instance, because of network issues) it will fail with an error. You should handle this in your code.

### Handling syncronization issues

In the event of a network synchronization issue (for instance, because two clients have made updates to the same object independently), `setItem` and `removeItem` will fail with an error.

## Contributions

This project welcomes contributions from the community. Contributions are accepted using Github pull requests. If you're not familiar with making GitHub pull requests, please refer to the [GitHub documentation "Creating a pull request"](https://help.github.com/articles/creating-a-pull-request/).

For a good pull request, please ensure the following:

1. Include a clear description of the pull request in the description, including what and why the pull request exists.
2. Ensure that the full test suite passes.
3. The pull request should include new tests enforcing the changes.

### Running Tests

Tests are written using jest and can be run with:

```
npm run test
```
