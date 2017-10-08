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

The syntax for saving data is:

```
var airStorage = require("airStorage");
airStorage.setItem("myDog", "Rex", function(err, resp) {
  if (err) {
    console.error("There was an error", err);
  }

  console.log("data has been stored successfully");
});
```

You can fetch data with:

```
var airStorage = require("airStorage");
airStorage.getItem("myDog", function(err, result) {
  if (err) {
    console.error("There was an error", err);
  }

  console.log("The response", result);
});
```

You can remove data with:

```
var airStorage = require("airStorage");
airStorage.removeItem("myDog", function(err, result) {
  if (err) {
    console.error("There was an error", err);
  }

  console.log("The data was removed");
});
```

### Persisting across clients

To sync data across clients you will need to identify yourself via a unique key.

You can retrieve a key at ________. Once you have a key, you can configure `airStorage` with:

```
var airStorage = require("airStorage");
airStorage.config({
  key: "my-unique-key"
});
```

Alternatively, you can configure the object you get back when requiring:

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
