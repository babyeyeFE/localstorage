# @babyeyefe/localstorage

> A simplified `localStorage` API that just works

# Install

```shell
npm install @babyeyefe/localstorage
# or
yarn add @babyeyefe/localstorage
```

# API

The API is a simplified way to interact with all things `localStorage`. Note that when `localStorage` is unsupported in the current browser, a fallback to an in-memory store is used transparently.

For that reason, consider that `local-storage` values _might evaporate_ across page views.

## `ls(key, value?)`

If a `value` argument is provided, acts as `ls.set`. When `value` isn't provided, acts as `ls.get`.

##### Example

```js
var ls = require('local-storage');

ls('foo');
// <- null

ls('foo', 'bar');
// <- true

ls('foo');
// <- 'bar'
```

## `ls.get(key)`

Returns value under `key` in local storage. Equivalent to `ls(key)`. Internally parses the value from JSON before returning it.

##### Example

```js
var ls = require('local-storage');

ls('foo', 'bar');
// <- true

ls.get('foo');
// <- 'bar'
```

## `ls.set(key, value)`

Persists `value` under `key` in local storage. Equivalent to `ls(key, value)`. Internally converts the `value` to JSON.

Returns whether an error was thrown by the browser when trying to persist the value. Failure typically means a `QuotaExceededError` was thrown.

##### Example

```js
var ls = require('local-storage');

ls.set('foo', 'bar');
// <- true

ls.get('foo');
// <- 'bar'
```

## `ls.remove(key)`

Removes `key` from local storage. Returns `true` if the property was successfully deleted, and `false` otherwise.

##### Example

```js
var ls = require('local-storage');

ls.set('foo', 'bar');
// <- true

ls.remove('foo');
// <- true
```

## `ls.clear()`

Clears local storage.

##### Example

```js
var ls = require('local-storage');

ls.set('foo', 'bar');
ls.set('baz', 'tar');
ls.clear();
```

# License

MIT

# Reference

https://github.com/bevacqua/local-storage