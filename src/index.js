var stub = require('./stub')
var ls = 'localStorage' in global && global.localStorage ? global.localStorage : stub

function accessor (key, value) {
  if (arguments.length === 1) {
    return get(key)
  }
  return set(key, value)
}

function get (key) {
  const value = ls.getItem(key)
  let parseValue
  try {
    parseValue = JSON.parse(value)
  } catch (error) {
    parseValue = value
  }
  return parseValue
}

function set (key, value) {
  try {
    ls.setItem(key, JSON.stringify(value))
    return true
  } catch (e) {
    return false
  }
}

function remove (key) {
  return ls.removeItem(key)
}

function clear () {
  return ls.clear()
}

accessor.set = set
accessor.get = get
accessor.remove = remove
accessor.clear = clear

module.exports = accessor
